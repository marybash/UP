import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

public class StatusServlet extends HttpServlet {
    private static final String STATUS = "<big style='color:red'>Application is running</big>";
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter pw = response.getWriter();
        pw.println(STATUS);
    }
}
