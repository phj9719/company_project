package egovframework.com.cm.service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

public interface CMA020CTService {
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception;
	public NexacroResult submit(VariableList inVar, DataSetList inDataset) throws Exception;
	public NexacroResult submit2(VariableList inVar, DataSetList inDataset) throws Exception;
	public NexacroResult cancel(VariableList inVar, DataSetList inDataset) throws Exception;
	public NexacroResult appvlchk(VariableList inVar, DataSetList inDataset) throws Exception;
	public NexacroResult invoiceSearch(VariableList inVar, DataSetList inDataset) throws Exception;
}