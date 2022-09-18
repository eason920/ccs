var PKIObj = null;
var OS_Flag = navigator.userAgent;
var isWin32 = false;
var isWin64 = false;
var isMacOS = false;
var ieSleepTime = 3200;
var minInstallerVer = "1.0.22.0517";

if(window.navigator.platform=="Win32"){
	isWin32 = true;
	if((OS_Flag.indexOf("MSIE")>0) || (OS_Flag.indexOf("Trident/7.0") > 0 && OS_Flag.indexOf("rv:11.0"))){
		cggpkicrypt = getYuantaCGGPKICryptSVIAdapterObj();
	}else{
		cggpkicrypt = getYuantaCGGPKICryptSVIAdapterObj();
	}
}else if(window.navigator.platform=="Win64"){
	isWin64 = true;
	cggpkicrypt = getYuantaCGGPKICryptSVIAdapterObj();
}else if(navigator.appVersion.indexOf("Mac")!=-1){
	isMacOS = true;
	cggpkicrypt = getYuantaGPKICryptAdapterObj();
}

checkServiSignStatus();

function checkServiSignStatus(){
	if(cggpkicrypt != undefined){
		getInstallerVersion();
	}else{
		var ServiSignRtn = parseInt(ServiSign_GetErrorCode());
		alert("YuantaServiSign載入失敗，" + getGPKIErrDesc(ServiSignRtn));
	}
}

function getInstallerVersion(){
	var minVersion = minInstallerVer;
	var myVersion = cggpkicrypt.GetInstallerVersion();
	
	minVersion = parseInt(minVersion.replaceAll(",","").replaceAll(".","").replaceAll(" ","")) || 0;
	myVersion = parseInt(myVersion.replaceAll(",","").replaceAll(".","").replaceAll(" ","")) || 0;
	
	if(myVersion < minVersion){
		alert("元件版本不符，為保障您的資訊安全，我們加強了元件的安全機制，請您移除舊有元件，並將元件更新到最新版本，感謝您的協助。");
		return false;
	}
}


function DetectGPKICard(){
	var cardType = cggpkicrypt.GPKI_DetectCard(0);
	
	if(getGPKIErrCode()!=0){
		var desc = getGPKIErrDesc(getGPKIErrCode());
		alert(desc);
		return false;
	}else{
		return true;
	}
	
}

function GPKISignData(custid){
	
	if((OS_Flag.indexOf("MSIE")>0) || (OS_Flag.indexOf("Trident/7.0") > 0 && OS_Flag.indexOf("rv:11.0"))){
		setSleep(ieSleepTime);
	}
	var CG_ALGOR_SHA256 = 0x00000004;
	var SignData = cggpkicrypt.GPKI_SignData("", custid, "MS950", 0, CG_ALGOR_SHA256);
	return SignData;
	
}

function setSleep(sleepTime){
	var start = new Date().getTime();
	while(true){
		if(new Date().getTime() - start > sleepTime){
			break;
		}
	}
};

function getGPKIErrCode(){
	var rtn = cggpkicrypt.get_lastError();
	return rtn;
}

function getGPKIErrDesc(code){
	
	var desc = "";
	
	switch(code){
	case 0:
		desc = "成功。";
		break;
	case 5070:
		desc = "操作取消。";
		break;
	case 5071:
		desc = "密碼錯誤。";
		break;
	case 5073:
		desc = "一般錯誤。";
		break;
	case 5074:
		desc = "裝置無法使用。";
		break;
	case 5902:
		desc = "找不到檔案。";
		break;
	case 9039:
		desc = "密碼錯誤。";
		break;
	case 9040:
		desc = "密碼不合法。";
		break;
	case 9041:
		desc = "密碼長度不正確。";
		break;
	case 9043:
		desc = "卡片已鎖定。";
		break;
	case 9056:
		desc = "卡片不存在。";
		break;
	case 9057:
		desc = "Token無法辨識，請確認插入正確的自然人憑證卡片。";
		break;
	case 61001:
		desc = "未正常啟動YuantaServiSign主程式，請重新啟動元件。";
		break;
	case 61002:
		desc = "記憶體空間不足，請重新開機。";
		break;
	case 61003:
		desc = "字元轉換錯誤。如需進一步說明，請於服務時間內電洽客服專線02-21821988、0800688168，由專人為您服務。";
		break;
	case 61004:
		desc = "字元轉換錯誤。如需進一步說明，請於服務時間內電洽客服專線02-21821988、0800688168，由專人為您服務。"; 
		break;
	case 61005:
		desc = "參數錯誤。如需進一步說明，請於服務時間內電洽客服專線02-21821988、0800688168，由專人為您服務。";
		break;
	case 61006:
		desc = "您沒有完成 [ 元大銀行 SuperATM]ServiSign元件下載(或允許啟用)，因此無法使用本系統!!請完成元件下載及啟用後，再重新執行一次，謝謝。";
		break;
	case 61008:
		desc = "系統連線有誤，請於網際網路選項》進階》勾選「使用TLS1.1」「使用TLS1.2」，完成設定後，請重啟瀏覽器";
		break;
	case 61009:
		desc = "您沒有完成 [ 元大銀行 SuperATM]ServiSign元件下載(或允許啟用)，因此無法使用本系統!!請完成元件下載及啟用後，再重新執行一次，謝謝。";
		break;
	case 61010:
		desc = "元件執行中，請中斷交易或重新啟動元件。";
		break;
	case 61011:
		desc = "系統執行有誤，請重新安裝元件或重開機。"; 
		break;
	case 61012:
		desc = "無法識別連線。如需進一步說明，請於服務時間內電洽客服專線02-21821988、0800688168，由專人為您服務。";
		break;
	case 61013:
		desc = "呼叫方法有誤。如需進一步說明，請於服務時間內電洽客服專線02-21821988、0800688168，由專人為您服務。";
		break;
	case 61014:
		desc = "呼叫方法有誤。如需進一步說明，請於服務時間內電洽客服專線02-21821988、0800688168，由專人為您服務。";
		break;
	case 61102:
		desc = "呼叫方法有誤。如需進一步說明，請於服務時間內電洽客服專線02-21821988、0800688168，由專人為您服務。";
		break;
	case 61103:
		desc = "呼叫方法有誤。如需進一步說明，請於服務時間內電洽客服專線02-21821988、0800688168，由專人為您服務。";
		break;
	case 61104:
		desc = "呼叫方法有誤。如需進一步說明，請於服務時間內電洽客服專線02-21821988、0800688168，由專人為您服務。";
		break;
	case 61105:
		desc = "元件執行有誤，請重新啟動元件。";
		break;
	case 61201:
		desc = "元件版本有誤，請重新安裝元件。";
		break;
	case 61202:
		desc = "元件版本有誤，請重新安裝元件。";
		break;
	case 61203:
		desc = "元件版本有誤，請重新安裝元件。";
		break;
	case 61204:
		desc = "元件版本有誤，請重新安裝元件。";
		break;
	case 61902:
		desc = "Adapter檔案有誤。如需進一步說明，請於服務時間內電洽客服專線02-21821988、0800688168，由專人為您服務。";
		break;
	case 61904:
		desc = "系統連線有誤。如需進一步說明，請於服務時間內電洽客服專線02-21821988、0800688168，由專人為您服務。";
		break;
	case 61905:
		desc = "元件執行有誤，請重新啟動元件。";
		break;
	case 61906:
		desc = "元件執行有誤，請重新啟動元件。";
		break;
	case 61908:
		desc = "元件執行有誤，請重新啟動元件。";
		break;
	default:
		desc = "驗證失敗，如需進一步說明，請於服務時間內電洽客服專線02-21821988、0800688168，由專人為您服務。";
		break;
	}
	
	return desc + "(Code: " + code + ")";
}


