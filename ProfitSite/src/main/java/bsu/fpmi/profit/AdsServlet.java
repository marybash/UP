package bsu.fpmi.profit;

import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.stream.Collectors;

public class AdsServlet extends HttpServlet {
    private CrudClass crudClass;


    @Override
    public void init() throws ServletException {
        super.init();
        crudClass = new CrudClass();
        crudClass.connect();
    }

    @Override
    public void destroy() {
        crudClass.disconnect();
        super.destroy();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        String[] requestURI = request.getRequestURI().split("/");
        if (requestURI.length == 3 && requestURI[2].equals("add")) {
            BufferedReader reader = request.getReader();
            crudClass.add((new Gson()).fromJson(reader, AdItem.class));
        }
        if (requestURI.length == 3 && requestURI[2].equals("search")) {
            BufferedReader reader = request.getReader();
            Gson gson = new Gson();
            response
                    .getWriter()
                    .print(crudClass
                            .getPage(gson.fromJson(reader, AdFilters.class)).stream()
                    .map(gson::toJson)
                    .collect(Collectors
                            .joining("\n")));
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.getWriter().print((new Gson()).toJson(crudClass.get(request.getParameter("id"))));
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.getWriter().print((new Gson()).toJson(crudClass.remove(request.getParameter("id"))));
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        String[] requestURI = request.getRequestURI().split("/");
        if (requestURI.length == 3 && requestURI[2].equals("edit")) {
            response.getWriter().print((new Gson()).toJson(crudClass.edit(request.getParameter("id"),
                    (new Gson()).fromJson(request.getReader().readLine(), AdItem.class))));
        }
        if (requestURI.length == 3 && requestURI[2].equals("addReview")) {
            response.getWriter().print((new Gson()).toJson(crudClass.addReview(request.getParameter("id"),
                    (new Gson()).fromJson(request.getReader().readLine(), Review.class))));
        }
    }
}

