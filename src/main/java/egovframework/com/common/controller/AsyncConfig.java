package egovframework.com.common.controller;

import java.util.concurrent.Executor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import egovframework.com.common.util.TransferUtil;

@Configuration
@EnableAsync
public class AsyncConfig {
	 private static int TASK_CORE_POOL_SIZE = 3;
	 private static int TASK_MAX_POOL_SIZE = 5;
	 private static int TASK_QUEUE_CAPACITY = 10;
	 private static String EXECUTOR_BEAN_NAME = "threadPoolTaskExecutor";

	 private static Logger log = LoggerFactory.getLogger(TransferUtil.class);
	 
	 @Bean(name="threadPoolTaskExecutor")
	 public Executor getAsyncExecutor() {
		ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
		executor.setCorePoolSize(TASK_CORE_POOL_SIZE);
	    executor.setMaxPoolSize(TASK_MAX_POOL_SIZE);
	    executor.setQueueCapacity(TASK_QUEUE_CAPACITY);
	    executor.setWaitForTasksToCompleteOnShutdown(true);
	    executor.setThreadNamePrefix("Async-");
	    executor.setBeanName(EXECUTOR_BEAN_NAME);
	    executor.initialize();
	    return executor;
	}

}
