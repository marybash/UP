package bsu.fpmi.profit;

import java.sql.*;

public class AuthorizationService {
    public static boolean isPostAvailable(int offerId, int userId, Connection connection) throws OfferNotFoundException {
        try {
            String query = "SELECT *\n" +
                    "FROM profit.offer\n" +
                    "WHERE OFFER_ID = ?";
            PreparedStatement prStatement =
                    connection.prepareStatement(query);
            prStatement.setInt(1, offerId);
            ResultSet rs = prStatement.executeQuery();
            if (rs.next()) {
                int userIdFromDB = rs.getInt("user_id");
                return userIdFromDB == userId;
            } else {
                throw new OfferNotFoundException("Offer with id = " + offerId + "not found.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
}
