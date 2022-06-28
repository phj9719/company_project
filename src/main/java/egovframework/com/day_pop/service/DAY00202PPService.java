package egovframework.com.day_pop.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

public interface DAY00202PPService {
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception;

}
