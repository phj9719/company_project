package egovframework.com.cm.service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

public interface CMA300QRService {
	public NexacroResult delete(VariableList inVar, DataSetList inDataset) throws Exception;
}