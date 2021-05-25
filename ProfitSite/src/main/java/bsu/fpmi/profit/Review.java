package bsu.fpmi.profit;

import java.util.Date;

public class Review {
    private String username;
    private String reviewText;
    private int rating;
    private Date reviewDate;

    public Review(String username, String reviewText, int rating, Date reviewDate) {
        this.username = username;
        this.reviewText = reviewText;
        this.rating = rating;
        this.reviewDate = reviewDate;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public void setReviewDate(Date reviewDate) {
        this.reviewDate = reviewDate;
    }

    public String getUsername() {
        return username;
    }

    public String getReviewText() {
        return reviewText;
    }

    public int getRating() {
        return rating;
    }

    public Date getReviewDate() {
        return reviewDate;
    }
}
