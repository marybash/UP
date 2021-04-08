import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

public class PageServlet extends HttpServlet {
    private static final String STARTING_PAGE_ADDRESS = "/WEB-INF/page.html";
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher(STARTING_PAGE_ADDRESS).forward(request, response);
    }
}
