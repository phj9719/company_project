package egovframework.com.rte.map;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.rte.nexacro.NexacroConstant;




/**
 * 
 * @author yimoc@tobesoft.com
 *
 */
public class NexacroMapDTO implements Serializable {
	private static final long serialVersionUID = 122554256929227668L;

	private DataSetMap tranInfoMap;						//transaction 정보를 가지는 Dataset을 Map 형태로 변경
	private Map <String, Object> inVariableMap;
	private Map <String, DataSetMap > inDataSetMap;
	private Map <String, Object> outVariableMap;
	private Map <String, DataSetMap > outDataSetMap;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	/*
	public void setTransactionData(PlatformData pData){
		DataSetList inDatasetList = pData.getDataSetList();
		VariableList inVariableList = pData.getVariableList();
		
		setVariableMap(inVariableList);
		setTranInfoMap(inDatasetList);
		setInDataSetMap(inDatasetList);
	}*/
	
	protected Map getDataSetMap(DataSet ds, int nRow)
	{
		Map varMap = new HashMap();
		if (ds==null || nRow < 0 || ds.getRowCount() <= nRow) return varMap;
		String strColNm = null;
		Object strColData = null;
		for (int i = 0; i < ds.getColumnCount(); i++) {
			strColNm = ds.getColumn(i).getName();
			strColData = ds.getObject(nRow, strColNm);
			varMap.put(strColNm, strColData);
			
			if(i == 0){
			strColNm = "USER_IP";
			strColData = "127.99.99.1";
			varMap.put(strColNm, strColData);
			log.debug(i + ".strColNm : " + strColNm);
			log.debug(i + ".strColData : " + strColData);
			}
			
			
			log.debug(i + ".strColNm : " + strColNm);
			log.debug(i + ".strColData : " + strColData);
		}
		

		return varMap;
	}	
	
	
	public void setVariableMap(VariableList vList) {
		inVariableMap = new HashMap<String, Object>();
		for (int i = 0; i < vList.size(); i++) {
			inVariableMap.put(vList.get(i).getName(), vList.get(i).getObject());
			
			log.debug(i+". : " + vList.get(i).getName() + "/" + vList.get(i).getObject());
			
		}
	}
	
	public void setVariableMap(VariableList vList, DataSetList dsList) {
		//Parameter Info
		DataSet dsParamInfo = dsList.get(NexacroConstant.PRAM_INFO_DATASET_NAME);
		Map mapParamInfo = getDataSetMap(dsParamInfo, 0);
		
		//Session Info
		DataSet dsUserInfo = dsList.get(NexacroConstant.SESSION_USER_DATASET_NAME);
		Map mapUserInfo = getDataSetMap(dsUserInfo, 0);
		
		//Paging Info
		DataSet dsPagingInfo = dsList.get(NexacroConstant.PAGING_DATASET_NAME);
		Map mapPagingInfo = getDataSetMap(dsPagingInfo, 0);
		
		inVariableMap = new HashMap<String, Object>();
		for (int i = 0; i < vList.size(); i++) {
			inVariableMap.put(vList.get(i).getName(), vList.get(i).getObject());
			log.debug(i+".vList : " + vList.get(i).getName() + "/" + vList.get(i).getObject());
		}
		
		inVariableMap.put(NexacroConstant.SESSION_USER_MAP_NAME, mapUserInfo);
		inVariableMap.put(NexacroConstant.PAGING_MAP_NAME, mapPagingInfo);
		
		//Parameter DataSet을 변수로 처리
		if (mapParamInfo == null)
			return;
		
		Set<String> keySet = mapParamInfo.keySet();
		Iterator<String> iter = keySet.iterator();
		while (iter.hasNext()) {
			String key = iter.next();
			Object value = mapParamInfo.get(key);
			inVariableMap.put(key, value);
		}
	}
	
	/**
	 * Dataset 중에  Transaction 정보를 가진 DataSet을 Map 정보로 바꾼다.
	 * @param dsList
	 * @param datasetName
	 */
	public void setTranInfoMap(DataSetList dsList){
		tranInfoMap = new DataSetMap();
		DataSet dsTransInfo = dsList.get(NexacroConstant.TRAN_INFO_DATASET_NAME);
		if (dsTransInfo != null) {
			
			for (int i = 0; i < dsTransInfo.getRowCount(); i++) {
				Map tranInfoRow = new HashMap<String,String>();
				for (int j = 0; j < dsTransInfo.getColumnCount(); j++) {
/*					log.debug(i+".setTranInfoMap :{"+dsTransInfo.getString(i, 0)+", "+ dsTransInfo.getString(i, 1)+"}");*/
					tranInfoRow.put(dsTransInfo.getColumn(j).getName(), dsTransInfo.getString(i,j));
				}
				tranInfoMap.add(tranInfoRow);
				
			}
		}else{
			log.debug("Error No Have "+NexacroConstant.TRAN_INFO_DATASET_NAME+" dataset"+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		}
		
	}
	
	/**
	 * n개의 input DataSet을 Map에 넣는다
	 * Map의 key 값은 inputset이름이 들어가며 value는 List객체가 들어간다.
	 *     List 객체는 Map(column,value)를 가진다. 
	 * @param dsList
	 */
	public void setInDataSetMap(DataSetList dsList){
		//Session Info
		DataSet dsUserInfo = dsList.get(NexacroConstant.SESSION_USER_DATASET_NAME);
		Map mapUserInfo = getDataSetMap(dsUserInfo, 0);
		
		//Paging Info
		DataSet dsPagingInfo = dsList.get(NexacroConstant.PAGING_DATASET_NAME);
		Map mapPagingInfo = getDataSetMap(dsPagingInfo, 0);
		
		inDataSetMap = new HashMap();
		
		int rowCount = tranInfoMap.size();
		String [] inDataSetName = new String[rowCount];
		
		
		for (int i = 0; i < rowCount; i++) {
			inDataSetName[i] = (String) tranInfoMap.getMapValue(i, "strInDatasets");//TODO strInDatasets 상수로 변경하기
		}
		
		for (String str1 : inDataSetName) {
			log.debug("inDataSetName dsName="+str1);
		}
		
		for (String strDatasetName : inDataSetName) {
			if (strDatasetName!= null){
				DataSet dataset = dsList.get(strDatasetName);
				if (dataset!= null){
					DataSetMap datasetData = new DataSetMap();
					datasetData.convertDataSet2DataSetMap(dataset, mapUserInfo, mapPagingInfo);
					inDataSetMap.put(strDatasetName, datasetData);
				}
			}
		}
	}
	
	/**
	 * 
	 * @param dsList
	 * @param dsName
	 * @return
	 */
	/*public List<Map> getListFromDataSet(DataSetList dsList, String dsName){
		List <Map> list = new ArrayList<Map>();
		DataSet ds = dsList.get(dsName);
		Map <String, Object> map = null;
		for ( int j = 0; j < ds.getRowCount(); j ++ ){		//Dataset의 record 반복
			map = new HashMap<String, Object>();
			for (int k = 0; k < ds.getColumnCount(); k++) {
				Object obj = ds.getObject(j, k);
				if (obj != null){
					map.put(ds.getColumn(k).getName(), ds.getObject(j, k));
				}else {
					log.debug("data is null~!!!!!!!!!!!!!!!!!!!!!!!!!");
				}
				
			}
			String rowType = ds.getRowTypeName(j);
			map.put(XPlatformConstant.DATASET_ROW_TYPE,rowType);
			list.add(map);
		}
		
		//log.debug("             delete="+ds.getRemovedRowCount());
		int removeRowCount = ds.getRemovedRowCount();
		for (int i = 0; i < removeRowCount; i++) {
			map = new HashMap<String, Object>();
			map.put(XPlatformConstant.DATASET_ROW_TYPE, DataSet.ROW_TYPE_NAME_DELETED);
			for (int j = 0; j < ds.getColumnCount(); j++) {
				map.put(ds.getColumn(j).getName(), StringUtils.stripToEmpty(ds.getRemovedStringData(i, j)));
			}
			list.add(map);
		}
		return list;
	}*/
		
	/**
	 * dataset 이름을 parsing 한다.
	 * 
	 * @param str list of dataset name
	 * @param type 0 :왼쪽 1:오른쪽 
	 * @return
	 */
	public List<String> getDataSetName(String str,int type){
		List <String> dataSetName = new ArrayList<String>();
		StringTokenizer sToken = new StringTokenizer(str, " ");
		while (	sToken.hasMoreElements()){
			String str1 = sToken.nextToken();
			StringTokenizer sToken1 = new StringTokenizer(str1, "=");
			String dsName = null ;
			if (type == 0){
			
				dsName = sToken1.nextToken();
			
			log.debug("dsName7777777 : " + dsName);
				
			}else if (type == 1){
				sToken1.nextToken();
				dsName = sToken1.nextToken();
				log.debug("dsName8888888888888 : " + dsName);
			}
			if (dsName!= null && dsName.trim().length() >0 )
				dataSetName.add(dsName);
		}
		return dataSetName;
	}
	
	
	public DataSetMap getTranInfoMap() {
		return tranInfoMap;
	}

	public Map<String, DataSetMap> getInDataSetMap() {
		return inDataSetMap;
	}
	
	public Map<String, DataSetMap> getOutDataSetMap() {
		if (outDataSetMap == null)
			outDataSetMap = new HashMap();
		return outDataSetMap;
	}
	
	public Map<String, Object> getInVariableMap() {
		return inVariableMap;
	}
	
	public void setInVariableMap(String key, String value) {
		inVariableMap.put(key, value);
	}
	
	public Map<String, Object> getOutVariableMap() {
		if (outVariableMap == null)
			outVariableMap = new HashMap();
		return outVariableMap;
	}

	private void printMap(Map <String,String>map){
		Set<String> keySet = map.keySet();
		Iterator <String> iter = keySet.iterator();
		while (iter.hasNext()) {
			String key = iter.next();
			String value = map.get(key);
			log.debug("printMap {"+key +" , "+value+"}");
		}
	}
}