package egovframework.com.common.dao;

import java.util.List;
import java.util.Map;

public interface CommonDao {
	String getString(String sqlId, Map<String, Object> paramMap);
	String getString(String sqlId, String param);
    Map<String,Object> getMap(String sqlId, Map<String, Object> paramMap);
    List<Map<String,Object>> getList(String sqlId, Map<String, Object> paramMap);
    List<Map<String, Object>> getList(String sqlId, String param);
    List<Map<String, Object>> getList(String sqlId);
    int insertData(String sqlId, Map<String, Object> paramMap);
    int updateData(String sqlId, Map<String, Object> paramMap);
    int deleteData(String sqlId, Map<String, Object> paramMap);
    int getInt(String sqlId, Map<String, Object> paramMap);
    double getDouble(String sqlId, Map<String, Object> paramMap);
    List<Map<String, Object>> cursor(String queryId, Map<String, Object> map);
}