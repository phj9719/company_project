package egovframework.com.nu.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.VariableList;

import egovframework.com.common.dao.CommonDao;
import egovframework.com.common.exception.NexaServiceException;
import egovframework.com.common.util.DataSetUtil;
import egovframework.com.common.util.LanguageUtil;
import egovframework.com.common.util.UpdateMetadataUtil;
import egovframework.com.nu.service.NUC_PASSWORD_POPService;

@Service("NUC_PASSWORD_POPService")
public class NUC_PASSWORD_POPServiceImpl implements NUC_PASSWORD_POPService {
	
	@Resource(name="commonDao")
	private CommonDao commonDao;
	
	@Autowired
	private UpdateMetadataUtil updateMetadataUtil;
	
	@Resource(name="DataSetUtil")
	private DataSetUtil dataSetUtil;
	
	@Resource(name="LanguageUtil")
	private LanguageUtil languageUtil;
	
	@Autowired
	private PlatformTransactionManager transactionManager;

	private Logger log = LoggerFactory.getLogger(this.getClass().getName());

	@Override
	public void passChk(VariableList inVar, DataSetList inDataset, VariableList outVar,
			Map<String, List<Map<String, Object>>> outMap) throws Exception {
		TransactionDefinition transactionDefinition = new DefaultTransactionDefinition();
		TransactionStatus transactionStatus = transactionManager.getTransaction(transactionDefinition);
		
		try {
			String chkId = (String)inVar.getString("FAM_ID");
			
			Map<String, Object> rowMap = dataSetUtil.varToMap(inVar);
			
			String dbPass = commonDao.getString("NUC_PASSWORD_POP_PASS_CHK", rowMap);
			boolean pass = BCrypt.checkpw((String) inVar.getString("CUR_PASS"), dbPass);
			
			if(pass) {
				String newpwd = BCrypt.hashpw((String) inVar.getString("CHG_PASS"), BCrypt.gensalt());
				
				rowMap.put("CHG_PASS", newpwd);

				updateMetadataUtil.setAuditData(rowMap, inVar.getString("REG_PGM_ID"));

				commonDao.updateData("NUC_PASSWORD_POP_PASS_CHG",rowMap);
			} else {
				throw new NexaServiceException(languageUtil.getMessage(inVar, "000575"));	// 현재 비밀번호가 맞지 않습니다.
			}
			
			transactionManager.commit(transactionStatus);
		} catch (Exception e) {
			transactionManager.rollback(transactionStatus);
			log.debug("[log]ErrorException -> "+ e.getMessage());
			throw e;
		}

	}

}
