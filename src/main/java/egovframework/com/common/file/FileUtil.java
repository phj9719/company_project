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
package egovframework.com.common.file;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.nexacro17.xapi.data.DataSet;

import egovframework.com.common.constant.CommonConstant;
import egovframework.com.common.exception.NexaUserDefineException;
import egovframework.com.rte.nexacro.NexacroConstant;

@Component("FileUtil")
public class FileUtil {

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	public List blobToByte(List rowMaps){
		try{
			for(int a=0; a<rowMaps.size(); a++){
				Map rowMap = (Map) rowMaps.get(a);
				Blob blob = (Blob) rowMap.get("BLOB_FILE");
				if(blob != null){
					//log.debug("BLOB LENGTH : "+blob.length());
					ByteArrayOutputStream baos = returnBAOS(blob);
					rowMap.put("BLOB_FILE", baos.toByteArray());
				}
			}
		}catch(Exception e){
			e.printStackTrace();
			throw new NexaUserDefineException("blobtoByte ERROR : "+e);
		}
		return rowMaps;
	}
	
	public ByteArrayOutputStream returnBAOS(Blob oblob) throws Exception{
		try{
			InputStream instream = oblob.getBinaryStream();
			ByteArrayOutputStream baos = null;
			baos = new ByteArrayOutputStream();

//			int v_size = oblob.get.getBufferSize();
			byte v_data[] = new byte[1000];
			long v_length = oblob.length();
			int v_len = -1;
			    
			while((v_len = instream.read(v_data)) != -1 ){
				baos.write(v_data, 0, v_len); 
			}
			        
			return baos;
			
		}catch(Exception e){
			e.printStackTrace();
		    throw new Exception( "readBlob Exception : " + e.getMessage() );
		}
	}//returnBAOS
	
	public List<Map<String, Object>> getRowMaps(DataSet ds) {
		Map <String, Object> map = null;
		List<Map<String, Object>> rowMaps = new ArrayList<Map<String, Object>>();
		
		/*log.debug("dsName : "+ds.getName());
		log.debug("FIleUtil 78 Line ROWTYPE INSERTED : "+ds.ROW_TYPE_INSERTED);
		log.debug("FIleUtil 78 Line ROWTYPE NORAL : "+ds.ROW_TYPE_NORMAL);
		log.debug("FIleUtil 78 Line ROWTYPE UPDATE : "+ds.ROW_TYPE_UPDATED);
		log.debug("FIleUtil 78 Line ROWTYPE ROWCOUNT : "+ds.getRowCount());*/

		for ( int j = 0; j < ds.getRowCount(); j ++ ){
			log.debug("rowCount For loop "+j);
			map = new HashMap<String, Object>();
			for (int k = 0; k < ds.getColumnCount(); k++) {
				Object obj = ds.getObject(j, k);
				if (obj != null){
					map.put(ds.getColumn(k).getName(), ds.getObject(j, k));
				}
			}
			int rowType1 = ds.getRowType(j);
			map.put(NexacroConstant.DATASET_ROW_TYPE,new Integer(rowType1));
			rowMaps.add(map);
		}
			
		int removeRowCount = ds.getRemovedRowCount();
		for (int i = 0; i < removeRowCount; i++) {
			log.debug("removedrowCount For loop "+i);
			map = new HashMap<String, Object>();
				map.put(NexacroConstant.DATASET_ROW_TYPE, new Integer(DataSet.ROW_TYPE_DELETED));
			for (int j = 0; j < ds.getColumnCount(); j++) {
				map.put(ds.getColumn(j).getName(), StringUtils.stripToEmpty(ds.getRemovedStringData(i, j)));
			}
			rowMaps.add(map);
		}
		
		
		return rowMaps;
	}
	
	public void fileDelete(String fileRealName) {
		String path = "";
		String os = System.getProperty("os.name").toLowerCase();
		
		if (log.isInfoEnabled())
			log.info("OS : {}", os);
		
		if (os.contains("linux")) {
			path = CommonConstant.LINUX_FILE_DIR + fileRealName;
		} else if (os.contains("win")) {
			path = CommonConstant.FILE_ROOT_DIR + fileRealName;
		}
		
		if (log.isDebugEnabled())
			log.debug("file path : {}", path);
		
		File file = new File(path);
		
		if (file.exists()) {
			file.delete();
			if (log.isInfoEnabled()) {
				log.info("파일 삭제 완료");
			}
		} else {
			if (log.isInfoEnabled()) {
				log.info("{} \n경로에 파일 존재 안함.", path);
			}
		}
	}
}
