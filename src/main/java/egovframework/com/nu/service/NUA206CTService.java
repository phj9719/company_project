package egovframework.com.nu.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.rte.map.DataSetMap;

public interface NUA206CTService {
	public NexacroResult save(VariableList inVar, DataSetList inDataset) throws Exception;
}