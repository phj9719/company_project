package egovframework.com.cm.service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

public interface CMA001CTService {
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception;
	public NexacroResult readUserInfoUpdate(VariableList inVar) throws Exception;

}