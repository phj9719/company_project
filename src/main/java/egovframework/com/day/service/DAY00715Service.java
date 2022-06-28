package egovframework.com.day.service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

public interface DAY00715Service {
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception;
	public NexacroResult delete(VariableList inVar, DataSetList inDataset) throws Exception;
}
