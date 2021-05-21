package bsu.fpmi.profit;

public class User {
    private int userId;
    private String username;
    private boolean isVendor;

    public User(int userId, String username, boolean isVendor) {
        this.userId = userId;
        this.username = username;
        this.isVendor = isVendor;
    }

    public int getUserId() {
        return userId;
    }

    public String getUsername() {
        return username;
    }

    public boolean isVendor() {
        return isVendor;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", isVendor=" + isVendor +
                '}';
    }
}
