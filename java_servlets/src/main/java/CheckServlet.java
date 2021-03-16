import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

public class CheckServlet extends HttpServlet {
    private static final String JSON_STRING = "{\"success\":\"true\"}";
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("json");
        PrintWriter pw = response.getWriter();
        pw.println(JSON_STRING);
    }
}
