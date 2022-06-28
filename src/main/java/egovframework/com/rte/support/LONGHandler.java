package egovframework.com.rte.support;

import java.io.StringReader;
import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LONGHandler implements TypeHandler{

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Override
    public void setParameter(PreparedStatement ps, int i, Object parameter, JdbcType jdbcType)
           throws SQLException {
        String s = (String) parameter;
        StringReader reader = new StringReader(s);
        ps.setCharacterStream(i, reader, s.length());
    }
 
    @Override
    public Object getResult(ResultSet rs, String columnName) throws SQLException {
        log.debug("===================================== LOG ===============================");
    	log.debug("rs : "+rs.toString());
        log.debug("columnName : "+columnName);
        log.debug("===================================== LOG ===============================");
        return rs.getString(columnName);
    }
 
    @Override
    public Object getResult(CallableStatement cs, int columnIndex) throws SQLException {
        return cs.getString(columnIndex);
    }
	
    @Override
    public Object getResult(ResultSet rs, int i) throws SQLException {
        return rs.getInt(i);
    }
}
