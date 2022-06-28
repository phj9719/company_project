package egovframework.com.day.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

public interface DAY00108Service {
	public void getRecordCnt(VariableList inVar,Map<String, List<Map<String, Object>>> outMap) throws Exception;
}
