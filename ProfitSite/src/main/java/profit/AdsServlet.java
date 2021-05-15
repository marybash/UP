package Profit;

import com.google.gson.Gson;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class AdsServlet extends HttpServlet {
    private static AdList ads = new AdList();


    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init();
        List<String> hashTags = new ArrayList<>();
        hashTags.add("gym");
        hashTags.add("sport");
        List<String> reviews = new ArrayList<>();
        reviews.add("The best gym in Minsk!");
        ads.add(new AdItem("1",
                "GYM247 is the first autonomous 24-hour gym in the center of Minsk,\n" +
                        "which offers everyone training in a format convenient for them at a minimal cost.",
                "2021-01-01",

                "https://www.gym247.by/",
                "GYM247",
                "https://www.gym24.by/wp-content/uploads/2019/08/DSC08837-400x284.jpg",
                hashTags,
                "23%",
                "2021-04-01",
                3,
                reviews));
        hashTags.clear();
        hashTags.add("relax");
        hashTags.add("sauna");
        reviews.clear();
        reviews.add("Perfect massage!");
        reviews.add("Awesome spa-complex.");
        ads.add(new AdItem("2",
                "Relax and unwind from the daily hustle and bustle in SPA River.",
                "2021-03-05",
                "http://spariver.by/",
                "SPA River",
                "http://spariviera.by/assets/images/86.jpg",
                hashTags,
                "5%",
                "2021-04-10",
                5,
                reviews));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        String[] requestURI = request.getRequestURI().split("/");
        if (requestURI.length == 3 && requestURI[2].equals("add")) {
            BufferedReader reader = request.getReader();
            ads.add((new Gson()).fromJson(reader, AdItem.class));
        }
        if (requestURI.length == 3 && requestURI[2].equals("search")) {
            BufferedReader reader = request.getReader();
            Gson gson = new Gson();
            response
                    .getWriter()
                    .print(ads
                            .getPage(gson.fromJson(reader, AdFilters.class)).stream()
                    .map(gson::toJson)
                    .collect(Collectors
                            .joining("\n")));
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.getWriter().print((new Gson()).toJson(ads.get(request.getParameter("id"))));
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.getWriter().print((new Gson()).toJson(ads.remove(request.getParameter("id"))));
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.getWriter().print((new Gson()).toJson(ads.edit(request.getParameter("id"),
                (new Gson()).fromJson(request.getReader().readLine(), AdItem.class))));
    }
}

