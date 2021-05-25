package bsu.fpmi.profit;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

public class GetNameServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        String name = request.getParameter("name");
        PrintWriter pw = response.getWriter();
        if (name.length() > 100) {
            throw new IOException("Name is larger than 100 symbols!");
        }
        pw.println("<html><body>");
        pw.printf("<h1> Name is %s</h1>%n", name);
        pw.println("</body></html>");
    }

}
