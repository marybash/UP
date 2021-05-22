package bsu.fpmi.profit;

import java.sql.*;

public class LoginService {
    private final String URL;
    private final String USER;
    private final String PASSWORD;
    private Connection connection;

    public LoginService(String url, String user, String password) {
        this.URL = url;
        this.USER = user;
        this.PASSWORD = password;
    }

    public boolean connect() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            this.connection = DriverManager.getConnection(URL, USER, PASSWORD);
            return true;
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public User isMatch(String username, String password) throws WrongPasswordException, UserNotFoundException {
        String query = "SELECT *\n" +
                "FROM profit.user\n" +
                "WHERE USERNAME = ?";
        try {
            PreparedStatement prStatement = connection.prepareStatement(query);
            prStatement.setString(1, username);
            ResultSet rs = prStatement.executeQuery();
            if (!rs.next()) {
                throw new UserNotFoundException("There is not such a USER in the DB");
            }
            if (HashingUtil.isHashEqual(password, rs.getString("PASSWORD"))) {
                return new User(rs.getInt("user_id"), username, rs.getBoolean("is_vendor"));
            }
            else {
                throw new WrongPasswordException("Entered PASSWORD and PASSWORD from the DB do not match");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
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
