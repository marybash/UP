package bsu.fpmi.profit;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

public class Test1Servlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("/status").forward(request, response);
    }
}
