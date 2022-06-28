package egovframework.com.day.service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

public interface DAY00702EXCELService {
	public NexacroResult formDown(VariableList inVar, DataSetList inDataset, DataSetList outDataSet) throws Exception;
	public NexacroResult excelDown(VariableList inVar, DataSetList inDataset) throws Exception;
}
