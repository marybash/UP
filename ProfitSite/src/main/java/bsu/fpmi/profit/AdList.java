package bsu.fpmi.profit;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class AdList {
    private List<AdItem> ads;

    private static class SortByDescendingDate implements Comparator<AdItem> {
        public int compare(AdItem a, AdItem b) {
            return a.getCreatedAt().compareTo(b.getCreatedAt());
        }
    }

    public AdList() {
        ads = new ArrayList<>();
    }

    public List<AdItem> getPage (AdFilters filters) {
        String skip = filters.getSkip();
        String top = filters.getTop();
        if (skip == null) {
            skip = filters.SKIP_BY_DEFAULT;
        }
        if (top == null) {
            top = filters.TOP_BY_DEFAULT;
        }
        List<AdItem> returningAds = ads;
        Stream<AdItem> returningAdsStream = returningAds.stream();
        if (filters.getCreatedAt() != null) {
            returningAdsStream = returningAdsStream.filter(ad -> !ad.getCreatedAt().before(filters.getCreatedAt()));
        }
        if (filters.getValidUntil() != null) {
            returningAdsStream = returningAdsStream.filter(ad -> !ad.getValidUntil().before(filters.getValidUntil()));
        }
        if (!filters.getHashTags().isEmpty()) {
            returningAdsStream = returningAdsStream.filter(ad -> ad.getHashTags().containsAll(filters.getHashTags()));
        }
        if (filters.getVendor() != null) {
            returningAdsStream = returningAdsStream.filter(ad -> ad.getVendor().equals(filters.getVendor()));
        }
        returningAds = returningAdsStream.sorted(new SortByDescendingDate()).collect(Collectors.toList());
        int count = Integer.parseInt(skip) + Integer.parseInt(top);
        if (count > returningAds.size()) {
            return returningAds;
        }
        return returningAds.subList(Integer.parseInt(skip), count);
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
                && ad.getRating() > 0 && ad.getRating() <= 5;
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
        if (ad.getRating() > 0 && ad.getRating() <= 5) {
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
