package bsu.fpmi.profit;

import com.google.gson.Gson;

public class Test {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/profit";
        String user = "root";
        String password = "123456789";
        CrudClass cc = new CrudClass(url, user, password);
        cc.connect();
        System.out.println((new Gson()).toJson(cc.getPage((new Gson()).fromJson("{'hashtags':['minsk'], 'validUntil':'2021-04-05'}", AdFilters.class))));
        System.out.println(cc.remove("3"));
        //cc.disconnect();
    }
}
