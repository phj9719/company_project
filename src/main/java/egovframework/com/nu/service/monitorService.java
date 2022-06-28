package egovframework.com.nu.service;

import java.util.List;
import java.util.Map;

import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

public interface monitorService {
	public void monitorSelect(VariableList inVar, DataSetList inDataset, VariableList outVar, Map<String, List<Map<String, Object>>> outMap) throws Exception;
}
