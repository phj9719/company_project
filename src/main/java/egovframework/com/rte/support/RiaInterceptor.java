package egovframework.com.rte.support;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
 * X-Platform Interceptor 클래스
 * @author 개발팀 홍길동
 * @since 2010.01.01
 * @version 1.0
 * @see
 *
 * <pre>
 * << 개정이력(Modification Information) >>
 *   
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2010.01.01  홍길동          최초 생성
 *
 * </pre>
 */

public class RiaInterceptor extends HandlerInterceptorAdapter {
	//uiDto ==>NexacroMapDTO 라고 dispatcher-servlet에 설정되어 있음
	private Object[] uiDto;

	public void setUiDTO(Object[] uiDto) {
		this.uiDto = uiDto;
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		if (this.uiDto == null)
			return true;

		for (Object ud : uiDto) {
			if (ud != null)
			{
				request.setAttribute(ud.getClass().getSimpleName(), ud);
			}
			
		}
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
	                       ModelAndView modelAndView) throws Exception {
	}
}
