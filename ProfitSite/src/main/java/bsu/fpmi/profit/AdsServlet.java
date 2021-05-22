package bsu.fpmi.profit;

import com.google.gson.Gson;

import javax.persistence.criteria.CriteriaBuilder;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.stream.Collectors;

public class AdsServlet extends HttpServlet {
    private final String URL = "jdbc:mysql://localhost:3306/profit";
    private final String USER = "root";
    private final String PASSWORD = "123456789";
    private CrudClass crudClass;


    @Override
    public void init() throws ServletException {
        super.init();
        crudClass = new CrudClass(URL, USER, PASSWORD);
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

    private boolean checkUserIdMatch(HttpServletRequest request) throws OfferNotFoundException {
        HttpSession session = request.getSession(false);
        if (session != null && session.getAttribute("USER") != null) {
            User user = (User)session.getAttribute("USER");
            int userId = user.getUserId();
            int offerId = Integer.parseInt(request.getParameter("id"));
            return AuthorizationService.isPostAvailable(offerId, userId, crudClass.getConnection());
        }
        return false;
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        try {
            if (checkUserIdMatch(request)) {
                response.getWriter().print((new Gson()).toJson(crudClass.remove(request.getParameter("id"))));
            } else {
                response.sendError(403, "Forbidden to delete this offer.");
            }
        } catch (OfferNotFoundException e) {
            response.sendError(404, "Offer not found.");
            e.printStackTrace();
        }
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        String[] requestURI = request.getRequestURI().split("/");
        try {
            if (requestURI.length == 3 && requestURI[2].equals("edit")) {
                if (checkUserIdMatch(request)) {
                    response.getWriter().print((new Gson()).toJson(crudClass.edit(request.getParameter("id"),
                            (new Gson()).fromJson(request.getReader().readLine(), AdItem.class))));
                } else {
                    response.sendError(403, "Forbidden to edit this offer.");
                }
            }
            if (requestURI.length == 3 && requestURI[2].equals("addReview")) {
                if (!checkUserIdMatch(request)) {
                    response.getWriter().print((new Gson()).toJson(crudClass.addReview(request.getParameter("id"),
                            (new Gson()).fromJson(request.getReader().readLine(), Review.class))));
                } else {
                    response.sendError(403, "Forbidden to add review to this offer.");
                }
            }
        }catch (OfferNotFoundException e) {
            response.sendError(404, "Offer not found.");
            e.printStackTrace();
        }
    }
}

