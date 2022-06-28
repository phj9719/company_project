package egovframework.com.rte.support.interceptor;

import java.util.Locale;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.propertyeditors.LocaleEditor;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.servlet.support.RequestContextUtils;

public class LocaleChangeInterceptor extends HandlerInterceptorAdapter {

    /**
     * Default name of the locale specification parameter: "locale".
     */
    public static final String DEFAULT_PARAM_NAME = "locale";

    private String paramName = DEFAULT_PARAM_NAME;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

    /**
     * Set the name of the parameter that contains a locale specification in a
     * locale change request. Default is "locale".
     */
    public void setParamName(String paramName) {
	this.paramName = paramName;
    }

    /**
     * Return the name of the parameter that contains a locale specification in
     * a locale change request.
     */
    public String getParamName() {
	return this.paramName;
    }

    public boolean preHandle(HttpServletRequest request,
	    HttpServletResponse response, Object handler)
	    throws ServletException {
	String newLocale = request.getParameter(this.paramName);
	log.debug("[JuddCheck] newLocale parameter = " + newLocale);
	if (newLocale != null) {
	    log.debug("[JuddCheck] newLocale parameter = " + newLocale);
	    LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
	    if( localeResolver instanceof SessionLocaleResolver)
		log.debug("[JuddCheck] localeResolver is  SessionLocaleResolver ");
	    if (localeResolver == null) {
		throw new IllegalStateException(
			"No LocaleResolver found: not in a DispatcherServlet request?");
	    }
	    LocaleEditor localeEditor = new LocaleEditor();
	    localeEditor.setAsText(newLocale);
	    log.debug("[JuddCheck] localeEditor = "+((Locale) localeEditor.getValue()).getDisplayCountry());
	    
	    localeResolver.setLocale(request, response, (Locale) localeEditor
		    .getValue());
	}
	// Proceed in any case.
	return true;
	
    }

}