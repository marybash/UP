package bsu.fpmi.profit;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AdFilters {
    public final String SKIP_BY_DEFAULT = "0";
    public final String TOP_BY_DEFAULT = "10";
    private String skip;
    private String top;
    private String createdAt;
    private String validUntil;
    private String vendor;
    private List<String> hashTags;

    public AdFilters() {
        hashTags = new ArrayList<>();
    }

    public AdFilters(String skip, String top, String createdAt, String validUntil, String vendor, List<String> hashTags) {

        this.skip = skip;
        this.top = top;
        this.createdAt = createdAt;
        this.validUntil = validUntil;
        this.vendor = vendor;
        this.hashTags.addAll(hashTags);
    }

    public String getSkip() {
        return skip;
    }

    public String getTop() {
        return top;
    }

    public Date getCreatedAt() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            if (createdAt != null) {
                return sdf.parse(createdAt);
            }
        } catch (ParseException e) {}
        return null;
    }

    public Date getValidUntil() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            if (validUntil != null) {
                return sdf.parse(validUntil);
            }
        } catch (ParseException e) {}
        return null;
    }

    public String getVendor() {
        return vendor;
    }

    public List<String> getHashTags() {
        return hashTags;
    }
}
