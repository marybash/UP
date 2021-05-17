package bsu.fpmi.profit;

import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class CrudClass {
    private final String url;
    private final String user;
    private final String password;
    private Connection connection;

    public CrudClass(String url, String user, String password) {
        this.url = url;
        this.user = user;
        this.password = password;
    }

    public boolean connect() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            this.connection = DriverManager.getConnection(url, user, password);
            return true;
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    private String prepareFilter(AdFilters filters) {
        boolean filterUsed = false;
        StringBuilder sb = new StringBuilder("WHERE ");
        if (filters.getCreatedAt() != null) {
            sb.append("CREATED_AT >= ? AND ");
            filterUsed = true;
        }
        if (filters.getValidUntil() != null) {
            sb.append("VALID_UNTIL >= ? AND ");
            filterUsed = true;

        }
        if (filters.getVendor() != null) {
            sb.append("USERNAME = ? AND ");
            filterUsed = true;
        }
        sb.delete(sb.length() - 4, sb.length() - 1);
        if (!filterUsed) {
            sb.delete(0, sb.length() - 1);
        }
        return sb.toString();
    }

    private int computeSkip (AdFilters filters) {
        if (filters.getSkip() != null) {
            return Integer.parseInt(filters.getSkip());
        }
        return Integer.parseInt(filters.SKIP_BY_DEFAULT);
    }

    private int computeTop (AdFilters filters) {
        if (filters.getTop() != null) {
            return Integer.parseInt(filters.getTop());
        }
        return Integer.parseInt(filters.TOP_BY_DEFAULT);
    }

    private PreparedStatement prepareStatement (AdFilters filters, String query) throws SQLException {
        PreparedStatement prStatement = connection.prepareStatement(query);
        int i = 1;
        if (filters.getCreatedAt() != null) {
            prStatement.setTimestamp(i, new java.sql.Timestamp(filters.getCreatedAt().getTime()));
            i++;
        }
        if (filters.getValidUntil() != null) {
            prStatement.setTimestamp(i, new java.sql.Timestamp(filters.getValidUntil().getTime()));
            i++;
        }
        if (filters.getVendor() != null) {
            prStatement.setString(i, filters.getVendor());
            i++;
        }
        return prStatement;
    }

    private AdItem buildItem(ResultSet rs) throws SQLException, ParseException {
        String id = rs.getString("offer_id");
        int rating = 0;
        int count = 0;
        List<String> hashTags = new ArrayList<>();
        List<String> reviews = new ArrayList<>();
        String queryReviews = "SELECT *\n" +
                "FROM profit.reviews\n" +
                "WHERE OFFER_ID = " + id;
        Statement reviewsStatement = connection.createStatement();
        ResultSet rsReviews = reviewsStatement.executeQuery(queryReviews);
        while (rsReviews.next()) {
            count++;
            reviews.add(rsReviews.getString("review"));
            rating += rsReviews.getInt("rating");
        }
        rating /= count;
        String queryHashtags = "SELECT *\n" +
                "FROM profit.hashtags\n" +
                "WHERE OFFER_ID = " + id;
        Statement hashtagsStatement = connection.createStatement();
        ResultSet rsHashtags = reviewsStatement.executeQuery(queryHashtags);
        while (rsHashtags.next()) {
            hashTags.add(rsHashtags.getString("hashtag"));
        }
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        AdItem item = new AdItem(id, rs.getString("offer_name"),
                rs.getString("description"),
                sdf.parse(rs.getString("created_at")),
                rs.getString("link"),
                rs.getString("username"),
                rs.getString("photo_link"),
                hashTags,
                rs.getString("discount"),
                sdf.parse(rs.getString("valid_until")),
                rating,
                reviews);
        rsReviews.close();
        rsHashtags.close();
        reviewsStatement.close();
        hashtagsStatement.close();
        return item;
    }

    public List<AdItem> getPage(AdFilters filters) {
        int skip = computeSkip(filters);
        int top = computeTop(filters);
        String query = "SELECT *\n" +
                "FROM profit.offer\n" +
                "LEFT JOIN profit.user as user ON offer.USER_ID = user.USER_ID\n" +
                prepareFilter(filters) +
                "ORDER BY CREATED_AT DESC";
        try {
            PreparedStatement prStatement = prepareStatement(filters, query);
            ResultSet rs = prStatement.executeQuery();
            List<AdItem> list = new ArrayList<AdItem>();
            while (rs.next()) {
                AdItem item = buildItem(rs);
                list.add(item);
            }
            if (!filters.getHashTags().isEmpty()) {
                list = list.stream().filter(ad -> ad.getHashTags().containsAll(filters.getHashTags()))
                        .collect(Collectors.toList());
            }
            int count = skip + top;
            rs.close();
            prStatement.close();
            if (count > list.size()) {
                return list;
            }
            return list.subList(skip, count);
        } catch (SQLException | ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    public int remove(String id){
        try{
            String query = "DELETE FROM offer WHERE offer_id = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, Integer.parseInt(id));
            return preparedStatement.executeUpdate();
        } catch(SQLException e){
            e.printStackTrace();
        }
        return 0;
    }

    public boolean disconnect() {
        try {
            connection.close();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}


