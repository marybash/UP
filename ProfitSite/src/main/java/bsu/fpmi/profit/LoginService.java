package bsu.fpmi.profit;

import java.sql.*;

public class LoginService {
    private final String url;
    private final String user;
    private final String password;
    private Connection connection;

    public LoginService(String url, String user, String password) {
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

    public User isMatch(String username, String password) throws WrongPasswordException, UserNotFoundException {
        String query = "SELECT *\n" +
                "FROM profit.user\n" +
                "WHERE USERNAME = ?";
        try {
            PreparedStatement prStatement = connection.prepareStatement(query);
            prStatement.setString(1, username);
            ResultSet rs = prStatement.executeQuery();
            if (!rs.next()) {
                throw new UserNotFoundException("There is not such a user in the DB");
            }
            if (HashingUtil.isHashEqual(password, rs.getString("password"))) {
                return new User(rs.getInt("user_id"), username, rs.getBoolean("is_vendor"));
            }
            else {
                throw new WrongPasswordException("Entered password and password from the DB do not match");
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
