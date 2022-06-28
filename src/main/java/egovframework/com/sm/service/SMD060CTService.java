package egovframework.com.sm.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

public interface SMD060CTService {
	public int insert(VariableList inVar, DataSetList inDataset, VariableList outVar, Map<String, List<Map<String, Object>>> outMap) throws Exception;
	public NexacroResult insert2(VariableList inVar, DataSetList inDataset) throws Exception;
	public NexacroResult update(VariableList inVar, DataSetList inDataset) throws Exception;
	public void changePassword(VariableList inVar, DataSetList inDataset, VariableList outVar, Map<String, List<Map<String, Object>>> outMap) throws Exception;
	public void clearPassword(VariableList inVar, DataSetList inDataset, VariableList outVar, Map<String, List<Map<String, Object>>> outMap) throws Exception;
	public NexacroResult send(VariableList inVar, DataSetList inDataset) throws Exception;
}