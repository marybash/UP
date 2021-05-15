package Profit;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AdFilters {
    private String skip;
    private String top;
    private String dateFrom;
    private String dateTo;
    private String vendor;
    private List<String> hashTags;

    public AdFilters() {
        hashTags = new ArrayList<>();
    }

    AdFilters(String skip, String top, String dateFrom, String dateTo, String vendor, List<String> hashTags) {
        this.skip = skip;
        this.top = top;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.vendor = vendor;
        this.hashTags.addAll(hashTags);
    }

    public String getSkip() {
        return skip;
    }

    public String getTop() {
        return top;
    }

    public String getDateFrom() {
        return dateFrom;
    }

    public Date getDDateFrom() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        try {
            date = sdf.parse(dateFrom);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    public String getDateTo() {
        return dateTo;
    }

    public Date getDDateTo() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        try {
            date = sdf.parse(dateTo);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    public String getVendor() {
        return vendor;
    }

    public List<String> getHashTags() {
        return hashTags;
    }
}
