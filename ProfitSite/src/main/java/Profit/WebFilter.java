package Profit;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class WebFilter implements Filter {
    public void init(FilterConfig config) throws ServletException {
    }

    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        long start = System.currentTimeMillis();
        chain.doFilter(request, response);
        long duration = System.currentTimeMillis() - start;
        System.out.printf("Method: %s, url: %s, duration: %dms%n", ((HttpServletRequest) request).getMethod(),
                ((HttpServletRequest) request).getRequestURL(), duration);
    }
}
