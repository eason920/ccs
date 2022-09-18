function ckMbrowser(){	 
	 var isNeedBlockLogin = false;
	  //以行動裝置進入
	      var u = navigator.userAgent; 
	      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android
	      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios    
	      var isLine = u.indexOf('Line') > -1;//Line
	      var isDotNet = u.indexOf('.NET') > -1; //.NET Component 
	      if(isAndroid){
	         //APP
	         if(u.indexOf('Version') > -1){
	        	 isNeedBlockLogin = true;    
	         //瀏覽器
	         }else{         
	        	 isNeedBlockLogin = false;         
	         }    
	      }else if(isiOS){
	         //瀏覽器
	         if(u.indexOf('Mobile') > -1 && u.indexOf('Safari') > -1){         
	        	 isNeedBlockLogin = false;      
	         //APP
	         }else{      
	        	 isNeedBlockLogin = true;     
	         }
	         //Line
	         if(isLine){
	        	 isNeedBlockLogin = true;  
	         }	         
	      }else if(isDotNet){
	          isNeedBlockLogin = true;
	      }	 
	if(isNeedBlockLogin){
			alert('為確保您的資訊安全，請使用行動裝置上的瀏覽器進行申辦作業。');
  			window.location.href='https://www.yuantabank.com.tw/bank/';
	}
}

function ckLine(){	
	var u = navigator.userAgent;
	if(u.indexOf('Line') > -1) return true
	return false;
}

function ckNbrowser(){
	try {
	    var u = navigator.userAgent; 
		if(u.indexOf("Safari")>-1){
			//Safari跳過檢核
		}else{
			var AnyProperty = window.external.AnyProperty; 
			if(AnyProperty!=undefined){
				//表示使用.NET Component 登入需阻擋
				alert('為確保您的資訊安全，請使用瀏覽器進行申辦作業。('+AnyProperty+")");
				window.location.href='https://www.yuantabank.com.tw/bank/';
			}	 
		}
	}catch(e) {
		alert('為確保您的資訊安全，請使用瀏覽器進行申辦作業。');
		window.location.href='https://www.yuantabank.com.tw/bank/';
	}		
	
}