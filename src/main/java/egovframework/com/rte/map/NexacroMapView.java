package egovframework.com.rte.map;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.view.AbstractView;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.Variable;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;

import egovframework.com.rte.nexacro.ConvertDataType;
import egovframework.com.rte.nexacro.NexacroConstant;




/**
 * Map 형태의 DTO 들을 XPlatform Data에 맞게 변경하는 View
 * 
 * @author yimoc@tobesoft.com
 * 
 */
public class NexacroMapView extends AbstractView { 

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Override
	protected void renderMergedOutputModel(Map model,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		logger.debug("XPlatformView.renderMergedOutPutModel() start%%%");
		PlatformData platformData = new PlatformData();
		VariableList outVariableList = new VariableList();
		DataSetList outDatasetList = new DataSetList();

		setResult(model, outVariableList);
		setOutVariableMap(model, outVariableList);
		setOutDataSetMap(model, outDatasetList);

		platformData.setVariableList(outVariableList);
		platformData.setDataSetList(outDatasetList);

		logger.debug(platformData.saveXml());
		HttpSession session = request.getSession();
		Date t = new Date();
		SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				
		//최초 생성시간 --> 브라우저 기준. 브라우저가 닫히기전까진 계속 유지됨
		//톰캣 구동과 상관없이 브라우저 별로 할당되는 순간이 최초생성시간
		//But 최초생성시간과 관계없이 톰캣재구동시 세션이 갱신되는듯?
		log.debug("세션 아이디 : "+session.getId());
		t.setTime(session.getCreationTime());
		log.debug("최초 생성 시간 : "+sf.format(t));
		//마지막 접근 시간
		t.setTime(session.getLastAccessedTime());
		log.debug("마지막 접근 시간 : "+sf.format(t));
		//총 유지시간
		log.debug("총 유지 시간 : "+session.getMaxInactiveInterval()/60);
		/** XML output 객체(PlatformResponse) 만들기 **/
		HttpPlatformResponse hPlatformRsp = new HttpPlatformResponse(response);
		//hPlatformRsp.setCharset(PlatformType.DEFAULT_CHAR_SET);
		hPlatformRsp.setCharset("UTF-8");
		hPlatformRsp.setData(platformData);
		hPlatformRsp.sendData();
	}

	/**
	 * 결과 값을 셋팅한다.
	 * 
	 * @param model
	 * @param variabeList
	 */
	private void setResult(Map<String, Object> model, VariableList variabeList) {
		variabeList.add(NexacroConstant.ERROR_CODE,
				(String) model.get(NexacroConstant.ERROR_CODE));
		variabeList.add(NexacroConstant.ERROR_MSG,
				(String) model.get(NexacroConstant.ERROR_MSG));
	}

	public void setOutVariableMap(Map<String, Object> model, VariableList variabeList) {
		Map<String, Object> map = (Map<String, Object>) model .get(NexacroConstant.OUT_VARIABLES_ATT_NAME);

		if (map == null)
			return;
		Set<String> keySet = map.keySet();
		Iterator<String> iter = keySet.iterator();
		while (iter.hasNext()) {
			String key = iter.next();
			Object value = map.get(key);
			Variable var = makeVariable(key, value);
			variabeList.add(var);
		}
	}

	protected Variable makeVariable(String name, Object value) {
		Variable var = new Variable(name);
		int dataType = ConvertDataType.getPlatformDataType(value);
		var.setType(dataType);
		var.set(value);
		return var;
	}

	/*
	 * Map<String, List<Map>>
	 */
	public void setOutDataSetMap(Map<String, Object> model, DataSetList dataSetList) {	
		// 여러개의 Datast으로 이루어져있다.
		Map <String, DataSetMap> map = (Map <String, DataSetMap>) model.get(NexacroConstant.OUT_DATASET_ATT_NAME);
		if (map == null)
			return;

		Set keySet = map.keySet();
		Iterator<String> iter = keySet.iterator();
		while (iter.hasNext()) {
			// 하나의 DataSet으로 이루어진 정보(List)를 꺼낸다.
			String dsName = iter.next();
			//DataSetMap dsMap = new DataSetMap();
			DataSetMap dsMap= map.get(dsName);
			//Chk 컬럼 0 으로 셋팅
			for(int a=0; a<dsMap.size(); a++){
				dsMap.get(a).put("CHK", "0");
			}
			DataSet ds = new DataSet(dsName);
			setDataSet(dsMap, ds);
			dataSetList.add(ds);
		}
		//log.debug("@@NexacroMapView 클래스 setOutDataSetMap 메소드 ");
	}

	/**
	 * List 형태의 Map 정보를 이용하여 하나의 Dataset의 데이터를 세팅한다.
	 * 
	 * @param datasetInfo
	 * @param ds
	 */
	private void setDataSet(DataSetMap datasetInfo, DataSet ds) {
		int rowIndex = 0;
		for (int i = 0; i < datasetInfo.size(); i++) {
			Set keySet = datasetInfo.getKeySet(i);
			if(keySet.contains(NexacroConstant.ONLY_METADATA_RETURN)){
				Iterator<String> iter2 = keySet.iterator();
				while (iter2.hasNext()) {
					String key = iter2.next();
					if(!key.equals(NexacroConstant.ONLY_METADATA_RETURN)){
						int value = (Integer)datasetInfo.getMapValue(i, key);
						if (ds.getColumn(key) == null) {
							ds.setChangeStructureWithData(true);
							ds.addColumn(key, ConvertDataType.getPlatformDataTypeFromSqlType(value));
						}
					}
				}				
				
			}else{
				rowIndex = ds.newRow();
				Iterator<String> iter2 = keySet.iterator();
				
				String typeName = null;
				
				while (iter2.hasNext()) {
					String key = iter2.next();
					Object value = datasetInfo.getMapValue(i, key);
					if (ds.getColumn(key) == null) {
						ds.setChangeStructureWithData(true);
						ds.addColumn(key, ConvertDataType.getPlatformDataType(value));
					}
					
					typeName = ConvertDataType.getDataType(value);
					if (typeName.equals(Boolean.class.getName())) {
						if((value.toString().toUpperCase()).equals("TRUE"))
							value = 1;
						else
							value = 0;
					}
					
					ds.set(rowIndex, key, value);
				}
			}
		}
	}
}