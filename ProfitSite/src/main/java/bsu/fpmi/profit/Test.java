package bsu.fpmi.profit;

import com.google.gson.Gson;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

public class Test {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/profit";
        String user = "root";
        String password = "123456789";
        CrudClass crudClass = new CrudClass(url, user, password);
        crudClass.connect();
        System.out.println((new Gson()).toJson(crudClass.getPage((new Gson()).fromJson("{'hashtags':['minsk'], 'validUntil':'2021-04-05'}", AdFilters.class))));
        System.out.println(crudClass.remove("3"));
        List<String> hashtags = new ArrayList<String>();
        hashtags.add("tag");
        hashtags.add("test");
        List<String> reviews = new ArrayList<String>();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        AdItem ad = null;
        try {
            ad = new AdItem("4", "label", "description", sdf.parse("2021-05-17"), "link",
                    "Andrew", "photo", hashtags, "23", sdf.parse("2021-10-17"), 4, reviews);
            System.out.println(crudClass.add(ad));
            hashtags.remove(0);
            ad = new AdItem("4", "null", null, sdf.parse("2021-05-17"), "---",
                    "Andrew", "photo", hashtags, "58", sdf.parse("2021-10-17"), 4, reviews);
            System.out.println(crudClass.edit("1996129408", ad));
            System.out.println((new Gson()).toJson(crudClass.get("1996129408")));
            Review review = new Review("testUser", "testReview", 4, sdf.parse("2021-03-02"));
            System.out.println(crudClass.addReview("1996129408", review));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        //crudClass.disconnect();
    }
}
