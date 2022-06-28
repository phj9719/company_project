package egovframework.com.common.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;

@Repository("commonDao")
public class CommonDaoImpl extends EgovAbstractMapper implements CommonDao {

	@Override
    public String getString(String sqlId, Map<String, Object> paramMap) {
		return selectOne(sqlId, paramMap); 
	}
	
	@Override
    public String getString(String sqlId, String param) {
		return selectOne(sqlId, param);
	}

	@Override
    public Map<String, Object> getMap(String sqlId, Map<String, Object> paramMap) {
		return selectOne(sqlId, paramMap);
	}

	@Override
    public List<Map<String, Object>> getList(String sqlId, Map<String, Object> paramMap) {
		return selectList(sqlId, paramMap);
	}

	@Override
    public List<Map<String, Object>> getList(String sqlId, String param) {
		return selectList(sqlId, param);
	}
	
	@Override
    public List<Map<String, Object>> getList(String sqlId) {
		return selectList(sqlId);
	}

	@Override
    public int getInt(String sqlId, Map<String, Object> paramMap) {
		return selectOne(sqlId, paramMap);
	}
	
	@Override
    public double getDouble(String sqlId, Map<String, Object> paramMap) {
		return selectOne(sqlId, paramMap);
	}
	
	@Override
    public int insertData(String sqlId, Map<String, Object> paramMap) {
		return insert(sqlId, paramMap);
	}
	
	@Override
    public int updateData(String sqlId, Map<String, Object> paramMap) {
		return update(sqlId, paramMap);
	}

	@Override
    public int deleteData(String sqlId, Map<String, Object> paramMap) {
		return delete(sqlId, paramMap);
	}

	@Override
	public List<Map<String, Object>> cursor(String queryId, Map<String, Object> map) {
		// TODO Auto-generated method stub
		return null;
	}

}