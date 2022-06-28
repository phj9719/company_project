/************************************************************************************
 * Argus System Util
 * Copyright(c) SCT
 * 
 * 1.Program  			: Common FileUtil
 * 2.File Name			: FileUtil.java
 * 3.Developer			: JL
 * 4.Development Date	: 2017-11-21
 * 5.Version			: 0.1
 * 6.Note				: 
 * 7.History		    :
*************************************************************************************/
package egovframework.com.common.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.nexacro17.xapi.data.ColumnHeader;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.data.datatype.DataType;

import egovframework.com.common.exception.NexaUserDefineException;
import egovframework.com.rte.nexacro.NexacroConstant;

/**
 * DataSet이나 VariableList를 List 또는 Map의 형태로 치환
 * @author SCT-PC-4
 *
 */
@Component("DataSetUtil")
public class DataSetUtil {

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	/**
	 *  DataSet을 list로 변환
	 * @param DataSet
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> dataSetToList(DataSet ds) {

		List<Map<String, Object>> returnList = new ArrayList<Map<String, Object>>();
		for (int i = 0; i < ds.getRowCount(); i++) {
			Map<String, Object> map = new HashMap<String, Object>();
			for (int j = 0; j < ds.getColumnCount(); j++) {
				ColumnHeader ch = ds.getColumn(j);
				map.put(ch.getName(), ds.getObject(i, ch.getName()));
			}
			map.put(NexacroConstant.DATASET_ROW_TYPE, ds.getRowType(i));
			returnList.add(map);
		}
		return returnList;
	}

	/**
	 *  DataSet을 list로 변환
	 * @param DataSet
	 * @return List<Map<String, Object>>
	 */
	public List<Map<String, Object>> removedDataSetToList(DataSet ds) {

		List<Map<String, Object>> returnList = new ArrayList<Map<String, Object>>();
		for (int i = 0; i < ds.getRemovedRowCount(); i++) {
			Map<String, Object> map = new HashMap<String, Object>();
			for (int j = 0; j < ds.getColumnCount(); j++) {
				ColumnHeader ch = ds.getColumn(j);
				map.put(ch.getName(), ds.getRemovedData(i, ch.getName()));
			}
			map.put(NexacroConstant.DATASET_ROW_TYPE, DataSet.ROW_TYPE_DELETED);
			returnList.add(map);
		}
		return returnList;
	}

	/**
	 *  list를 DataSet으로 변환
	 * @param List<Map<String, Object>>
	 * @return DataSet
	 */
	public DataSet listToDataSet(List<Map<String, Object>> list) {

		DataSet returnDs = new DataSet();

		// Column Header Setting
		if (list == null || list.size() <= 0) {
		} else {
			Map<String, Object> firstMap = list.get(0);
			Set<String> setFirstMap = firstMap.keySet();
			Iterator<String> iteFirstMap = setFirstMap.iterator();

			while (iteFirstMap.hasNext()) {
				String columnName = iteFirstMap.next();
				log.debug("[" + columnName + "]");
				ColumnHeader ch = new ColumnHeader(columnName);
				returnDs.addColumn(ch);
			}

			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> map = list.get(i);

				Set<String> s = map.keySet();
				Iterator<String> ite = s.iterator();

				returnDs.newRow(i);
				while (ite.hasNext()) {
					String columnName = ite.next();

					returnDs.set(i, columnName, map.get(columnName));
				}
			}
		}

		return returnDs;
	}

	/**
	 *  VariableList을 map으로 변환
	 * @param VariableList
	 * @return Map<String, Object>
	 */
	public Map<String, Object> varToMap(VariableList vl) {

		Map<String, Object> returnMap = new HashMap<String, Object>();

		List<String> keyList = vl.keyList();
		for (int i = 0; i < keyList.size(); i++) {
			String key = keyList.get(i);
			returnMap.put(keyList.get(i), vl.getString(key));
		}
		return returnMap;
	}

	/**
	 * Map을 VariableList로 변환
	 * @param Map<String, Object>
	 * @return VariableList
	 */
	public VariableList mapToVar(Map<String, Object> map) {

		VariableList returnVar = new VariableList();

		Set<String> s = map.keySet();
		Iterator<String> ite = s.iterator();
		while (ite.hasNext()) {
			String columnName = ite.next();
			returnVar.set(columnName, map.get(columnName));
		}
		return returnVar;
	}

}
