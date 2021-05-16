package bsu.fpmi.profit;

import java.sql.*;
import java.util.Comparator;

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

    public ResultSet SortByDescendingDate() {
        String query =
                "SELECT OFFER_ID, USERNAME, DESCRIPTION, LINK, PHOTO_LINK, CREATED_AT, VALID_UNTIL, DISCOUNT\n" +
                "FROM (profit.offer\n" +
                "INNER JOIN profit.user as USER\n" +
                "ON offer.USER_ID = user.USER_ID)\n" + "INNER JOIN profit.hashtags as HASHTAGS\n" +
                "ORDER BY CREATED_AT DESC";
        try {
            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery(query);

            statement.close();
            rs.close();
            return rs;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
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

    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/profit";
        String user = "root";
        String password = "123456789";
        try {
            CrudClass cc = new CrudClass(url, user, password);
            cc.connect();
            ResultSet rs = cc.SortByDescendingDate();
            rs.beforeFirst();
            rs.next();
            System.out.println(rs.getString("offer_name"));
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
