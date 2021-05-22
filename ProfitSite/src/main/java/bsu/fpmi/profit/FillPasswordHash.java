package bsu.fpmi.profit;

import org.apache.commons.codec.digest.DigestUtils;

import java.sql.*;

public class FillPasswordHash {

    public static void fillUsersPasswordsDB(Connection connection, ResultSet rs) throws SQLException {
        long number = (long) Math.floor(Math.random() * 9_000_000_000L) + 1_000_000_000L;
        String passwordHash = Long.toString(number);
        passwordHash = DigestUtils.sha512Hex(passwordHash);
        String queryUpdate = "UPDATE profit.user\n" +
                "SET PASSWORD = ?\n" +
                "WHERE USER_ID = ?";
        PreparedStatement prStatement = connection.prepareStatement(queryUpdate);
        prStatement.setString(1, passwordHash);
        prStatement.setInt(2, rs.getInt("user_id"));
        prStatement.executeUpdate();
        prStatement.close();
    }


    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/profit";
        String user = "root";
        String password = "123456789";
        Connection connection = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(url, user, password);
            String query = "SELECT *\n" +
                    "FROM profit.user";
            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery(query);
            while (rs.next()) {
                fillUsersPasswordsDB(connection, rs);
            }
            rs.close();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
}
