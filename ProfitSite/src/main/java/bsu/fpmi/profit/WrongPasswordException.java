package bsu.fpmi.profit;

public class WrongPasswordException extends Exception {
    String message;

    WrongPasswordException(String str) {
        this.message = str;
    }

    public String toString() {
        return ("WrongPasswordException occurred: " + message);
    }
}
