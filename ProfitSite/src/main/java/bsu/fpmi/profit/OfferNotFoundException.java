package bsu.fpmi.profit;

public class OfferNotFoundException extends Exception{
    String message;

    OfferNotFoundException(String str) {
        this.message = str;
    }

    public String toString() {
        return ("OfferNotFoundException occurred: " + message);
    }
}

