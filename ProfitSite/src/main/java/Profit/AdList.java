package Profit;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

public class AdList {
    private List<AdItem> ads;

    private static class SortByDescendingDate implements Comparator<AdItem> {
        public int compare(AdItem a, AdItem b) {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Date date1 = new Date();
            Date date2 = new Date();
            try {
                date1 = sdf.parse(a.getCreatedAt());
                date2 = sdf.parse(b.getCreatedAt());
            } catch (ParseException e) {
                e.printStackTrace();
            }
            return date2.compareTo(date1);
        }
    }

    public AdList() {
        ads = new ArrayList<>();
    }

    public List<AdItem> getPage (AdFilters filters) {
        String skip = filters.getSkip();
        String top = filters.getTop();
        boolean usedFilter = false;
        if (skip == null) {
            skip = "0";
        }
        if (top == null) {
            top = "10";
        }
        List<AdItem> returningAds = ads;
        if (filters.getDateFrom() != null) {
            returningAds = returningAds
                    .stream()
                    .filter(ad -> !ad.getDateCreatedAt().before(filters.getDDateFrom()))
                    .collect(Collectors.toList());
            usedFilter = true;
        }
        if (filters.getDateTo() != null) {
            returningAds = returningAds
                    .stream()
                    .filter(ad -> ad.getDateValidUntil().before(filters.getDDateTo()))
                    .collect(Collectors.toList());
            usedFilter = true;
        }
        if (!filters.getHashTags().isEmpty()) {
            returningAds = returningAds
                    .stream()
                    .filter(ad -> ad.getHashTags().containsAll(filters.getHashTags()))
                    .collect(Collectors.toList());
            usedFilter = true;
        }
        if (filters.getVendor() != null) {
            returningAds = returningAds
                    .stream()
                    .filter(ad -> ad.getVendor().equals(filters.getVendor()))
                    .collect(Collectors.toList());
            usedFilter = true;
        }
        if (Integer.parseInt(top) > returningAds.size()) {
            top = String.format("%d", returningAds.size());
        }
        if (usedFilter) {
            returningAds = returningAds.stream().sorted(new SortByDescendingDate()).collect(Collectors.toList());
            return returningAds.subList(Integer.parseInt(skip), Integer.parseInt(skip + top));
        }
        returningAds =  returningAds.subList(Integer.parseInt(skip), Integer.parseInt(skip + top));
        returningAds = returningAds.stream().sorted(new SortByDescendingDate()).collect(Collectors.toList());
        return returningAds;
    }

    public AdItem get(String id) {
        for(AdItem ad : ads) {
            if(ad.getId().equals(id)) {
                return ad;
            }
        }
        return null;
    }

    public static boolean validate (AdItem ad) {
        return ad.getId() != null && ad.getId().length() >= 1
                && ad.getDescription() != null && ad.getDescription().length() < 250
                && ad.getCreatedAt() != null
                && ad.getLink() != null
                && ad.getVendor() != null
                && ad.getHashTags().size() >= 1 && ad.getHashTags().size() <= 7
                && ad.getDiscount() != null
                && ad.getValidUntil() != null
                && ad.getRating() >= 0 && ad.getRating() <= 5;
    }

    public boolean add(AdItem ad) {
        if (validate(ad)) {
            ads.add(ad);
            return true;
        }
        return false;
    }

    public boolean edit(String id, AdItem ad) {
        if (ad == null || ad.getId() != null || ad.getVendor() != null || ad.getCreatedAt() != null) {
            return false;
        }
        AdItem editingAd = this.get(id);
        if (ad.getDescription() != null) {
            editingAd.setDescription(ad.getDescription());
        }
        if (ad.getLink() != null) {
            editingAd.setLink(ad.getLink());
        }
        if (ad.getPhotoLink() != null) {
            editingAd.setPhotoLink(ad.getPhotoLink());
        }
        if (ad.getHashTags() != null) {
            editingAd.setHashTags(ad.getHashTags());
        }
        if (ad.getDiscount() != null) {
            editingAd.setDiscount(ad.getDiscount());
        }
        if (ad.getValidUntil() != null) {
            System.out.println(ad.getValidUntil());
            editingAd.setValidUntil(ad.getValidUntil());
        }
        if (ad.getRating() >= 0 && ad.getRating() <= 5) {
            editingAd.setRating(ad.getRating());
        }
        if (ad.getReviews() != null) {
            editingAd.setReviews(ad.getReviews());
        }
        return true;
    }

    public boolean remove(String id) {
        for (AdItem ad : ads) {
            if (ad.getId().equals(id)) {
                ads.remove(ad);
                return true;
            }
        }
        return false;
    }

    public List<AdItem> getAll() {
        return ads;
    }

    public List<AdItem> addAll(List<AdItem> ads) {
        List<AdItem> invalidAds = new ArrayList<>();
        for (AdItem ad : ads) {
            if (!this.add(ad)) {
                invalidAds.add(ad);
            }
        }
        return invalidAds;
    }

    public void clear() {
        ads.clear();
    }
}
