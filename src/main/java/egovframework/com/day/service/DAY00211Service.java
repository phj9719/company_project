package egovframework.com.day.service;

import java.util.List;
import java.util.Map;

import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

public interface DAY00211Service {
	public void excel(VariableList inVar, DataSetList inDataset, Map<String, List<Map<String, Object>>> outMap) throws Exception;
}
