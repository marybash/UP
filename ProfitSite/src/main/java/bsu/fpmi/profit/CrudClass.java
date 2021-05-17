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

    private int computeSkip(AdFilters filters) {
        if (filters.getSkip() != null) {
            return Integer.parseInt(filters.getSkip());
        }
        return Integer.parseInt(filters.SKIP_BY_DEFAULT);
    }

    private int computeTop(AdFilters filters) {
        if (filters.getTop() != null) {
            return Integer.parseInt(filters.getTop());
        }
        return Integer.parseInt(filters.TOP_BY_DEFAULT);
    }

    private PreparedStatement prepareStatementFilters(AdFilters filters, String query) throws SQLException {
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
        double rating = 0;
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
        if (count != 0) {
            rating /= count;
        }
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
            PreparedStatement prStatement = prepareStatementFilters(filters, query);
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

    public AdItem get(String id) {
        String query = "SELECT *\n" +
                "FROM profit.offer\n" +
                "LEFT JOIN profit.user as user ON offer.USER_ID = user.USER_ID\n" +
                "WHERE OFFER_ID = ?";
        try {
            PreparedStatement prStatement = connection.prepareStatement(query);
            prStatement.setInt(1, Integer.parseInt(id));
            ResultSet rs = prStatement.executeQuery();
            AdItem item = null;
            if (rs.next()) {
                item = buildItem(rs);
            }
            rs.close();
            prStatement.close();
            return item;
        } catch (SQLException | ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    private static boolean validate (AdItem ad) {
        return ad.getId() != null && ad.getId().length() >= 1
                && ad.getLabel() != null && ad.getLabel().length() >= 1
                && ad.getDescription() != null && ad.getDescription().length() < 250
                && ad.getCreatedAt() != null
                && ad.getLink() != null && ad.getLink().length() >= 1
                && ad.getVendor() != null && ad.getVendor().length() >= 1
                && ad.getHashTags().size() >= 1 && ad.getHashTags().size() <= 7
                && ad.getDiscount() != null
                && ad.getValidUntil() != null
                && ad.getRating() >= 0 && ad.getRating() <= 5;
    }

    private PreparedStatement prepareStatementAdd(AdItem ad, int userId, int offerId) throws SQLException {
        String query = "INSERT INTO profit.offer(OFFER_ID, USER_ID, OFFER_NAME, DESCRIPTION, " +
                "LINK, PHOTO_LINK, CREATED_AT, VALID_UNTIL, DISCOUNT) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
        PreparedStatement prStatement = connection.prepareStatement(query);
        prStatement = connection.prepareStatement(query);
        int i = 0;
        prStatement.setInt(++i, offerId);
        prStatement.setInt(++i, userId);
        prStatement.setString(++i, ad.getLabel());
        prStatement.setString(++i, ad.getDescription());
        prStatement.setString(++i, ad.getLink());
        prStatement.setString(++i, ad.getPhotoLink());
        prStatement.setTimestamp(++i, new java.sql.Timestamp(ad.getCreatedAt().getTime()));
        prStatement.setDate(++i, new java.sql.Date(ad.getValidUntil().getTime()));
        prStatement.setInt(++i, Integer.parseInt(ad.getDiscount()));
        return prStatement;
    }

    private void addHashtags(AdItem ad, int offerId) throws SQLException {
        String query = "INSERT INTO profit.hashtags(OFFER_ID, HASHTAG) VALUES (?, ?);";
        PreparedStatement prStatement = connection.prepareStatement(query);
        for (String tag : ad.getHashTags()) {
            int i = 0;
            prStatement = connection.prepareStatement(query);
            prStatement.setInt(++i, offerId);
            prStatement.setString(++i, tag);
            prStatement.executeUpdate();
            prStatement.close();
        }
    }

    public boolean add(AdItem ad){
        if (validate(ad)) {
            try {
                String query = "SELECT user_id FROM profit.user WHERE username = ?";
                PreparedStatement prStatement = connection.prepareStatement(query);
                prStatement.setString(1, ad.getVendor());
                ResultSet resultSet = prStatement.executeQuery();
                int userId;
                if(resultSet.next()) {
                    userId = resultSet.getInt("user_id");
                    prStatement.close();
                    int offerId = (int)ad.getCreatedAt().getTime();
                    prStatement = prepareStatementAdd(ad, userId, offerId);
                    prStatement.executeUpdate();
                    prStatement.close();
                    addHashtags(ad, offerId);
                    return true;
                }
            }catch(SQLException e){
                e.printStackTrace();
            }
        }
        return false;
    }

    private String buildEditQuery(AdItem ad){
        StringBuilder sb = new StringBuilder("UPDATE profit.offer SET ");
        if(ad.getLabel() != null && ad.getLabel().length() != 0){
            sb.append("OFFER_NAME = ?, ");
        }
        if (ad.getDescription() != null && ad.getDescription().length() != 0) {
            sb.append("DESCRIPTION = ?, ");
        }
        if (ad.getLink() != null) {
            sb.append("LINK = ?, ");
        }
        if (ad.getPhotoLink() != null) {
            sb.append("PHOTO_LINK = ?, ");
        }
        if (ad.getDiscount() != null) {
            sb.append("DISCOUNT = ?, ");
        }
        if (ad.getValidUntil() != null) {
            sb.append("VALID_UNTIL = ?, ");
        }
        sb.deleteCharAt(sb.length() - 2);
        sb.append("WHERE offer_id = ?");
        return sb.toString();
    }

    private PreparedStatement prepareStatementEdit(String query, AdItem ad, String id) throws SQLException {
        PreparedStatement prStatement = connection.prepareStatement(query);
        prStatement = connection.prepareStatement(query);
        int i = 0;
        if(ad.getLabel() != null && ad.getLabel().length() != 0){
            prStatement.setString(++i, ad.getLabel());
        }
        if (ad.getDescription() != null && ad.getDescription().length() != 0) {
            prStatement.setString(++i, ad.getDescription());
        }
        if (ad.getLink() != null) {
            prStatement.setString(++i, ad.getLink());
        }
        if (ad.getPhotoLink() != null) {
            prStatement.setString(++i, ad.getPhotoLink());
        }
        if (ad.getDiscount() != null) {
            prStatement.setString(++i, ad.getDiscount());
        }
        if (ad.getValidUntil() != null) {
            prStatement.setDate(++i, new java.sql.Date(ad.getValidUntil().getTime()));
        }
        prStatement.setInt(++i, Integer.parseInt(id));
        return prStatement;
    }

    private void editHashtags(String id, AdItem ad) throws SQLException{
        String query = "DELETE FROM profit.hashtags WHERE offer_id = ?";
        PreparedStatement prStatement = connection.prepareStatement(query);
        prStatement.setInt(1, Integer.parseInt(id));
        prStatement.executeUpdate();
        prStatement.close();
        addHashtags(ad, Integer.parseInt(id));
    }

    public boolean edit(String id, AdItem ad){
        try{
            String query = buildEditQuery(ad);
            PreparedStatement prStatement = connection.prepareStatement(query);
            prStatement = prepareStatementEdit(query, ad, id);
            prStatement.executeUpdate();
            prStatement.close();
            if(ad.getHashTags() != null) {
                editHashtags(id, ad);
            }
            return true;
        }catch(SQLException e){
            e.printStackTrace();
        }
        return false;
    }

    public int remove(String id){
        try{
            String query = "DELETE FROM profit.offer WHERE offer_id = ?";
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


