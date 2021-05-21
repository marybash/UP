package bsu.fpmi.profit;

import com.google.gson.Gson;
import org.apache.commons.codec.binary.Base64;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

public class LoginServlet extends HttpServlet {
    private final String URL = "jdbc:mysql://localhost:3306/profit";
    private final String USER = "root";
    private final String PASSWORD_DB = "123456789";
    private static final String USERNAME = "username";
    private static final String PASSWORD = "password";
    private LoginService loginService;


    @Override
    public void init() throws ServletException {
        super.init();
        loginService = new LoginService(URL, USER, PASSWORD_DB);
        loginService.connect();
    }

    @Override
    public void destroy() {
        loginService.disconnect();
        super.destroy();
    }

    private User logIn(String username, String password, HttpServletRequest request) throws UserNotFoundException, WrongPasswordException {
        User user = loginService.isMatch(username, password);
        HttpSession session = request.getSession();
        session.setAttribute("USER", user);
        return user;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter(USERNAME);
        String password = request.getParameter(PASSWORD);
        password = new String(Base64.decodeBase64(password));
        if (username != null && password != null) {
            try {
                User user = logIn(username, password, request);
                response.getWriter().println((new Gson()).toJson(user));
            } catch (UserNotFoundException e) {
                response.sendError(404, "User not found.");
            } catch (WrongPasswordException e) {
                response.sendError(401, "Wrong password.");
            }
        }
    }
}
