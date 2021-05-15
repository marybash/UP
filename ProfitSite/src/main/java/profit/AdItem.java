package Profit;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class AdItem {

    private String id;
    private String description;
    private String createdAt;
    private String link;
    private String vendor;
    private String photoLink;
    private List<String> hashTags;
    private String discount;
    private String validUntil;
    private int rating;
    private List<String> reviews;

    public AdItem(String id, String description, String createdAt, String link, String vendor,
                  String photoLink, List<String> hashTags, String discount, String validUntil,
                  int rating, List<String> reviews) {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.link = link;
        this.vendor = vendor;
        this.photoLink = photoLink;
        this.hashTags = new ArrayList<>(hashTags);
        this.discount = discount;
        this.validUntil = validUntil;
        this.rating = rating;
        this.reviews = new ArrayList<>(reviews);
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public void setHashTags(List<String> hashTags) {
        Collections.copy(this.hashTags, hashTags);
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }

    public void setValidUntil(String validUntil) {
        this.validUntil = validUntil;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public void setReviews(List<String> reviews) {
        Collections.copy(this.reviews, reviews);
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public Date getDateCreatedAt() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        try {
            date = sdf.parse(createdAt);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    public String getLink() {
        return link;
    }

    public String getVendor() {
        return vendor;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public String getDiscount() {
        return discount;
    }

    public String getValidUntil() {
        return validUntil;
    }

    public Date getDateValidUntil() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        try {
            date = sdf.parse(validUntil);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }


    public int getRating() {
        return rating;
    }

    public List<String> getReviews() {
        return reviews;
    }
}
