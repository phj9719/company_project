<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
<style>
	#timer{
		font-size: 9;
		font-family: antialias,Malgun Gothic;
	}
</style>
<script type="text/javascript">
    var bPaused = false ;
    var timerID = 0;

    var total_time_left = 0 ;
    var total_time_gone = 0 ;

    var bDeciSECS = false ;

    var time_slice = 1000 ;
    var timeCOEFF = 1 ;
    var h = 0, m = 0 , s = 0, centSECS ;
    var renewFlag = false;
    
    function Start(Time){
    	var m;
        var s;
        m = Time.substring(0,2);
        s = Time.substring(3,Time.length);
       if ( bDeciSECS )
       {   
          total_time_left *= 10 ;
          time_slice = 100 ;
          timeCOEFF = 10 ;
       }
       else
       {   
          time_slice = 1000 ;
          timeCOEFF = 1 ;
       }
       
       total_time_left = 0;
       total_time_left += m * 60 * timeCOEFF ;
       total_time_left += s * timeCOEFF ;
       
       time = total_time_left ;
       
            var hDISPLAY = parseInt( time / ( 3600 * timeCOEFF ) ) ; hDISPLAY = hDISPLAY.toFixed( 0 );
            time = time - ( ( 3600 * timeCOEFF ) * hDISPLAY ) ;
            
            mDISPLAY = parseInt( time / ( 60 * timeCOEFF ) ) ; mDISPLAY = mDISPLAY.toFixed( 0 );
            time = time - ( ( 60 * timeCOEFF ) * mDISPLAY ) ;

            sDISPLAY = time ;

       mDISPLAY = ( mDISPLAY < 10 ) ? "0" + mDISPLAY : mDISPLAY ;
       sDISPLAY = ( sDISPLAY < 10 ) ? "0" + sDISPLAY : sDISPLAY ;

       document.getElementById('timer').innerHTML = '로그아웃까지 남은시간 : '+mDISPLAY+':'+sDISPLAY;

       total_time_gone = 0 ;

       if ( total_time_left > 0 )
       {   
           timerID  = setTimeout( "UpdateTimer()", time_slice );
        
       }
    }
    
    function UpdateTimer()
    {
       if ( !bPaused )
       {
    	   document.getElementById('timer').innerHTML = '로그아웃까지 남은시간 : '+FormatTimeFromSeconds( total_time_left );
           total_time_left-- ;
           if(total_time_left < 600 && renewFlag == false){
        	   if(confirm("로그아웃까지 10분 남았습니다. 연장하시겠습니까?")){
        		   renewFlag = true;
        		   callNexacro("KEEPSESSION");
        	   }else{
        		   renewFlag = true;   
        	   }
           }
           if(total_time_left == 0){
        	   callNexacro("ENDSESSION");
           }
       }
       
       if ( total_time_left >= 0 ) timerID = setTimeout("UpdateTimer()", time_slice );
       else Stop();
    }
    
    function FormatTimeFromSeconds( time )
    {
            m = parseInt( time / ( 60 * timeCOEFF ) ) ; m = m.toFixed( 0 );
            time = time - ( ( 60 * timeCOEFF ) * m ) ;
            
        if ( bDeciSECS )
        {
            s = parseInt( time / ( timeCOEFF ) ) ;
            time = time - ( ( timeCOEFF ) * s ) ;

            centSECS = time ;
        }
        else s = time ;

        m = ( m < 10 ) ? "0" + m : m ;
        s = ( s < 10 ) ? "0" + s : s ;
        centSECS = centSECS + "0" ;

        return m + ":" + s + ( ( bDeciSECS ) ? ":"+centSECS : "" );
    }
    
    function callNexacro(userdata)
    {
    	var wb = window.NEXACROWEBBROWSER;
    	if ( wb )
    	{
    		// HTML
    		wb.on_fire_onusernotify(wb, userdata);
    	}
    	else
    	{
    		// Runtime
    		window.document.title = userdata;
    	}
    }
    
    function Stop()
    {
       if( timerID ) {
          clearTimeout( timerID );
          timerID  = 0;
       }
    }
</script>


<div id="timer"></div>
</body>
</html>