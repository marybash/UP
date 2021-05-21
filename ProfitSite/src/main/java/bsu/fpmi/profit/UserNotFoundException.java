package bsu.fpmi.profit;

public class UserNotFoundException extends Exception{
    String message;

    UserNotFoundException(String str) {
        this.message = str;
    }

    public String toString() {
        return ("UserNotFoundException occurred: " + message);
    }
}
