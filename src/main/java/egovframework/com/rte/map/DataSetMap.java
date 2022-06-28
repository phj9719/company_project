package egovframework.com.rte.map;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCrypt;

import com.nexacro17.xapi.data.DataSet;

import egovframework.com.rte.nexacro.NexacroConstant;



public class DataSetMap {
	
	List <Map<String, Object>> rowMaps;
	
	public DataSetMap(){
		rowMaps = new ArrayList<Map<String, Object>>();
	}
	
	public Map<String, Object> get(int index){
		return rowMaps.get(index);
	}
	
	public void add(Map<String, Object> elem){
		rowMaps.add(elem);
	}
	
	public int size(){
		return rowMaps.size();
	}
	
	public Object[] toArray(){
		return rowMaps.toArray();
	}
	
	public void setRowMaps(List<Map<String, Object>> list){
		rowMaps = list;
	}
	
	public List <Map<String, Object>> getRowMaps(){
		return rowMaps;
	}
	
	public Object getMapValue(int listIndex, Object key){
		return get(listIndex).get(key);
	}
	
	public Set getKeySet(int listIndex){
		return get(listIndex).keySet();
	}

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	/**
	 * DataSet을 DataSetMap으로 변경한다.
	 * @param ds 변경할 DataSet
	 */
	public void convertDataSet2DataSetMap(DataSet ds) {
		Map <String, Object> map = null;
		for ( int j = 0; j < ds.getRowCount(); j ++ ){		//Dataset의 record 반복
			map = new HashMap<String, Object>();
			for (int k = 0; k < ds.getColumnCount(); k++) {
				Object obj = ds.getObject(j, k);
				if (obj != null){
					//log.debug("key ="+ds.getColumn(k).getName()+" value="+ds.getObject(j, k));
					map.put(ds.getColumn(k).getName(), ds.getObject(j, k));
				}/*else {
					log.debug("data is null~!!!!!!!!!!!!!!!!!!!!!!!!!");
				}*/
				
			}
			int rowType1 = ds.getRowType(j);
			map.put(NexacroConstant.DATASET_ROW_TYPE,new Integer(rowType1));
			rowMaps.add(map);
		}
		
		//log.debug("             delete="+ds.getRemovedRowCount());
		int removeRowCount = ds.getRemovedRowCount();
		for (int i = 0; i < removeRowCount; i++) {
			map = new HashMap<String, Object>();
			map.put(NexacroConstant.DATASET_ROW_TYPE, new Integer(DataSet.ROW_TYPE_DELETED));
			for (int j = 0; j < ds.getColumnCount(); j++) {
				map.put(ds.getColumn(j).getName(), StringUtils.stripToEmpty(ds.getRemovedStringData(i, j)));
			}
			rowMaps.add(map);
		}
	}
	
	/**
	 * DataSet을 DataSetMap으로 변경한다.
	 * @param ds 변경할 DataSet
	 */
	public void convertDataSet2DataSetMap(DataSet ds, Map mapUserInfo, Map mapPageInfo) {
		Map <String, Object> map = null;
		for ( int j = 0; j < ds.getRowCount(); j ++ ){		//Dataset의 record 반복
			map = new HashMap<String, Object>();
			for (int k = 0; k < ds.getColumnCount(); k++) {
				Object obj = ds.getObject(j, k);
				if (obj != null){
					log.debug("key ="+ds.getColumn(k).getName()+" value="+ds.getObject(j, k));
					map.put(ds.getColumn(k).getName(), ds.getObject(j, k));
				}/*else {
					log.debug("data is null~!!!!!!!!!!!!!!!!!!!!!!!!!");
				}*/
			}
			
			int rowType1 = ds.getRowType(j);
			
			map.put(NexacroConstant.DATASET_ROW_TYPE,new Integer(rowType1));
			//밑에 2개 확인, 필요없어보임
			map.put(NexacroConstant.SESSION_USER_MAP_NAME, mapUserInfo);
			map.put(NexacroConstant.PAGING_MAP_NAME, mapPageInfo);
			
			if(map.containsKey("USER_PASSWD")){
				map.put("USER_PASSWD", BCrypt.hashpw((String) map.get("USER_PASSWD"), BCrypt.gensalt()));
			}
			
			rowMaps.add(map);	
		}
		
		//log.debug("             delete="+ds.getRemovedRowCount());
		int removeRowCount = ds.getRemovedRowCount();
		for (int i = 0; i < removeRowCount; i++) {
			map = new HashMap<String, Object>();
			map.put(NexacroConstant.DATASET_ROW_TYPE, new Integer(DataSet.ROW_TYPE_DELETED));
			
			map.put(NexacroConstant.SESSION_USER_MAP_NAME, mapUserInfo);
			map.put(NexacroConstant.PAGING_MAP_NAME, mapPageInfo);
			
			for (int j = 0; j < ds.getColumnCount(); j++) {
				map.put(ds.getColumn(j).getName(), StringUtils.stripToEmpty(ds.getRemovedStringData(i, j)));
			}
			rowMaps.add(map);
		}
	}
	
}