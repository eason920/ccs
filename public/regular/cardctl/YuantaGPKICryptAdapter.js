
// Generate at 2022-05-16 14:16:12
var ServiSignErrorCode = 61001;

String.prototype.replaceAll = function(search, replacement) {
    var target = this
    return target.split(search).join(replacement)
}

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(searchString, position) {
		position = position || 0
		return this.indexOf(searchString, position) === position
	}
	String.prototype.endsWith = function(pattern) {
		var d = this.length - pattern.length
		return d >= 0 && this.lastIndexOf(pattern) === d
	}
}

function getYuantaGPKICryptAdapterObj() {
	
	//如有任何參數問題，請參考第 10, 11點
	//https://redmine.changingtec.com/redmine/projects/servisign/wiki/%E5%95%8F%E9%A1%8C%E8%88%87%E8%A7%A3%E7%AD%94

	//底層元件 Adapter 名稱
	var LibName = "YuantaServiSign"
	//底層元件 Adapter 所在位置
	var LibDir = ""
	//Path ID
	var PathID = "80E4364F8CC0481888B054197BF8F058"

	//最低 ServiSign 版本 0.0.0.0 = 預設不開啟
	var minServiSignVersion = "0.0.0.0"
	//最低元件版本 0.0.0.0 = 預設不開啟
	var minLibVersion = "0.0.0.0"

	//最低不需更新安裝包版本
	var MinimalInstallerVersion = ""
	var MinimalInstallerVersion_Mac = "1.0.22.0516"
	var MinimalInstallerVersion_Linux = ""
	//JS 模板版本號 ServiSign 主程式會做相容性版本確認
	var JSVersion = "1.0.20.0423"

	//Tab 以分頁做為轉換模式，行為模式與 ActiveX 元件相同
	var ServiSignTabMode_Tab = 			0x0
	//Browser 模式則是以瀏覽器為單位，整個瀏覽器關掉才會釋放元件
	var ServiSignTabMode_Browser = 		0x1

	var ServiSignTabMode = ServiSignTabMode_Tab

	//預設不使用 cookie 儲存 Try port 的結果
	var useCookieTryPort = false
	
	//路徑保護
	//DataObj.pfxpath_servisignflag = true
    //DataObj.pfxpath = pfxpath.replace(/\\/g, "*")
	
	//開啟元件 UI 置頂功能
	//DataObj.topuidetect = true
	//開啟全系統 UI 置頂功能
	//DataObj.topuialldetect = true
	//開啟非同步功能
	//DataObj.asynchronously = true
	
	//資料斜線保護功能
	//DataObj.XXXXX_ServiSignSlashFlag = true
	//DataObj.XXXXX = inputXXXXXX.replaceAll("\\", "==ServiSignSlash==")
	//資料 Base64 保護功能
	//DataObj.XXXXX_ServiSignBase64Flag = true
	//DataObj.XXXXX = Base64Encode(XXXXX)
	//使用主線程呼叫 API
	//DataObj.ServiSignMainThread = true
	//變數保護功能
	//目前已經針對 pin, pw 跟 pass 等關鍵字顯示時自動遮蔽內容
	//如果想要額外遮蔽可在此調整:D
	//DataObj.XXXXX_ServiSignHide = true
	//回傳時可以隱藏 log  
	//DataObj.hide_result = true

	
	function ServiSignConnectError() {
		//ServiSign_RTN_CONNECTION_ERROR
		ServiSignErrorCode = 61006
	}
	function ServiSignLoadComponentError() {
		//Handing load component error
    }
	function ServiSignDisconnectError() {
		//Handing disconnect error
		ServiSignErrorCode = 61015
    }
    
    var VersionCompare_Error = 			0x00
	var VersionCompare_Bigger =			0x01
	var VersionCompare_Smaller = 		0x02
	var VersionCompare_Same = 			0x03

	function ServiSignLog(LogMessage) {
    	
	}
	function Sleep(milliseconds) {
		var start = new Date().getTime()
		for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds){
				break
			}
		}
	}
	function Base64Encode(input) {
		return encodeURIComponent(window.btoa(unescape(encodeURIComponent(input))))
	}
	function Base64Decode(input) {
		if(input == undefined) return ""
		return decodeURIComponent(escape(window.atob(input)))
	}
	function FixArray(inputArray) {
		ServiSignLog("FixArray: " + inputArray)
		var array = inputArray.split(";")

		// while(array.indexOf("") != -1){
		// 	var EmptyIndex = array.indexOf("")
		// 	array.splice(EmptyIndex, 1)
		// }
		
		array.toArray = function(){
			return this
		}
		array.splice(-1, 1);
		return array
	}
	function KeepAlive(DataObj) {
		var temp = ""
		DataObj.KeepAlive = true
		DataObj.topuidetect = true
		DataObj.ServiSignMainThread = true
		do{
			temp = ServiSignObj.Send(DataObj)
		}while(temp == "heartbeat")
		return temp
	}
	function isServiSignErrorCode(input) {
		var ErrorCode = parseInt(input) || 0
		return (61000 < ErrorCode && ErrorCode < 61999)
	}
	function getCookie(CookieName) {
		var TargetName = CookieName + "="
		var CookieArray = document.cookie.split(';')
		for (var i = 0; i < CookieArray.length; i++) {
			var CookieElement = CookieArray[i]
			while (CookieElement.charAt(0) == ' ') {
				CookieElement = CookieElement.substring(1)
			}
			if (CookieElement.indexOf(TargetName) == 0) {
				return CookieElement.substring(TargetName.length, CookieElement.length)
			}
		}
		return ""
	}
	function VersionCompare(VersionA, VersionB) {
		var iVersionA = parseInt(VersionA.replaceAll(",","").replaceAll(".","").replaceAll(" ","")) || 0
		var iVersionB = parseInt(VersionB.replaceAll(",","").replaceAll(".","").replaceAll(" ","")) || 0
		
		if(iVersionA == 0 || iVersionB == 0) return VersionCompare_Error
		if(iVersionA > iVersionB) return VersionCompare_Bigger
		if(iVersionA < iVersionB) return VersionCompare_Smaller
		return VersionCompare_Same
	}
	function BrowserDetection() {
		var sBrowser, sUsrAg = navigator.userAgent

		if(sUsrAg.indexOf("Edge") > -1){
			sBrowser = "Edge"
		} else if(sUsrAg.indexOf("Chrome") > -1) {
			sBrowser = "Chrome"
		} else if (sUsrAg.indexOf("Safari") > -1) {
			sBrowser = "Safari"
		} else if (sUsrAg.indexOf("Opera") > -1) {
			sBrowser = "Opera"
		} else if (sUsrAg.indexOf("Firefox") > -1) {
			sBrowser = "Firefox"
		} else if (sUsrAg.indexOf("MSIE") > -1 || sUsrAg.indexOf("Trident/7.0") > -1) {
			sBrowser = "Internet Explorer"
		} else {
			sBrowser = "unknown"
		}
		
		return sBrowser
	}
	function detectOS() {
		// https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js
		var userAgent = window.navigator.userAgent,
			platform = window.navigator.platform,
			macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
			windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
			os = null;
	  
		if (macosPlatforms.indexOf(platform) !== -1) {
		  	os = 'Mac'
		}
		else if (windowsPlatforms.indexOf(platform) !== -1) {
		  	os = 'Windows'
		}
		else if (!os && /Linux/.test(platform)) {
		  	os = 'Linux'
		}
	  
		return os
	}
	function verifyURL(input){
		
		if(input.indexOf("alert(") >= 0){
			return ""
		}

		if(input.indexOf('https://localhost:') != 0 && input.indexOf('https://127.0.0.1:') != 0){
			return ""
		}

		return encodeURI(input)
	}

	// https://github.com/ricmoo/aes-js
// 	var key_exchange = new CG_key_exchange()
	var iv = [169, 195, 229, 121, 17, 13, 137, 122, 194, 158, 71, 31, 245, 165, 190, 254]
	var share_secret = undefined
	var aesCbc = undefined

	function encrypt(msg){

		if(share_secret == undefined){
			return Base64Encode(msg)
		}
		
		aesCbc = new aesjs.ModeOfOperation.cbc(share_secret, iv)

		while(msg.length % 16 != 0){
			msg += '\0'
		}
		var textBytes = aesjs.utils.utf8.toBytes(msg)
		var encryptedBytes = aesCbc.encrypt(textBytes)

		var encrypted_hex = aesjs.utils.hex.fromBytes(encryptedBytes)

		return Base64Encode(encrypted_hex)
	}

	function decrypt(msg){

		var encryptedBytes = aesjs.utils.hex.toBytes(msg)
		var aesCbc = new aesjs.ModeOfOperation.cbc(share_secret, iv)
		var decryptedBytes = aesCbc.decrypt(encryptedBytes)
		var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes)
		
		decryptedText = decryptedText.substring(decryptedText.search("{"), decryptedText.search("}") + 1);
		return decryptedText
	}
	
	function getServiSignObj() {
		var portList = [56421, 56521, 56621]
        var InstallerName = "YuantaServiSignMacSetup"
		
		var Url_Part1_DNS = 'https://localhost:'
		var Url_Part1_IP = 'https://127.0.0.1:'
		var SessionID =""
		var ServiSignUrl = ""

		var realServiSignVersion = ""
		var realLibVersion = ""
		var realInstallerVersion = ""
		var CurrenOSMinimalInstallerVersion = null
		
		var needUpdate = false
		var Browser = ""
		var OS = null

		var ServiSignObjResultObj = undefined

		var CallbackFunction = []
		var CallbackFunctionIndex = 0
		var isCloseAsynchronously = false

		var ServiSignObj = 
		{
			clearServiSignCallback : function(){
				ServiSignLog("CallbackFunction empty")
				CallbackFunction = []
				CallbackFunctionIndex = 0
			},
			setServiSignCallback : function(InputFunction){
				if(typeof InputFunction != "function"){
					CallbackFunction.splice(CallbackFunctionIndex + 1, 0, function(){return ;})
				}
				else{
					CallbackFunction.splice(CallbackFunctionIndex + 1, 0, InputFunction)
				}
			},
			sendData : function(url, DataObj){
				var XMLHttpRequestAsynchronously = (CallbackFunction.length != 0)
				var xhr = new XMLHttpRequest()
				
				try{
					if(verifyURL(url) == ""){
						return undefined
					}
					xhr.open('MagicMethodA|POST|MagicMethodB'.split('|')[1], verifyURL(url), XMLHttpRequestAsynchronously)
				}
				catch(err) {
					return undefined
				}
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
				var onLoadHandler = function(event){
					try {
						response_text = this.responseText
						if(!response_text.startsWith('{') || !response_text.endsWith('}')){
							response_text = decrypt(response_text)
						}
						ServiSignObjResultObj = JSON.parse(response_text)
					}
					catch(err) {
						console.log(err)
						return undefined
					}

					if(XMLHttpRequestAsynchronously){
						CallbackFunction[CallbackFunctionIndex++](Base64Decode(ServiSignObjResultObj.result), this.ServiSignUrl);
						
						if(CallbackFunctionIndex == CallbackFunction.length){
							ServiSignObj.clearServiSignCallback();
						}
					}
				}
				xhr.onload = onLoadHandler

				DataObj.comname = LibName
				DataObj.libdir = LibDir
				if(ServiSignTabMode == ServiSignTabMode_Tab){
					DataObj.sessionid = SessionID
				}
				else if(ServiSignTabMode == ServiSignTabMode_Browser){
					DataObj.sessionid = Browser
				}
				DataObj.ServiSignTabMode = ServiSignTabMode
				DataObj.ServiSignBrowser = Browser
				DataObj.JSVersion = JSVersion
				DataObj.minlibversion = minLibVersion
				DataObj.minserverversion = minServiSignVersion
				DataObj.InstallerName = InstallerName
				DataObj.PathID = PathID
				DataObj.ServiSignJSGenTime = "2022-05-16 14:16:12"
				
				// For new version form 20190416
				DataObj.AdapterJsonKeyCheck = true				

				var readyDataObj = "Parameter=" + encrypt(JSON.stringify(DataObj))
								
				try {
					xhr.send(readyDataObj)
				}
				catch(err) {
					var header = xhr.getResponseHeader("via")
					if (header) {
						ServiSignErrorCode = 61014
					}
					else{
						ServiSignDisconnectError()
					}
					return undefined
				}
				return ServiSignObjResultObj
			},
			TryPort : function() {
				var resultObj
				var DataObj = new Object()
				var ErrorCode = 0

				OS = detectOS()
				Browser = BrowserDetection()

				ServiSignLog(OS)
				ServiSignLog(Browser)

				DataObj.functionname = "ServiSignEcho"
				// if(useCookieTryPort){
				// 	ServiSignUrl = getCookie("ServiSignUrl")
				// }
				// else{
				// 	ServiSignUrl = ""
				// }
				ServiSignUrl = ""

// 				key_exchange.init()
// 				DataObj.public_key_hex = key_exchange.public_key_hex

				if(ServiSignUrl == "" || ServiSignUrl == "fail") {
					var EchoSuccess = false
					for (var i = 0; i < portList.length; i++) {
						var url
						if(OS == "Mac"){
							url = Url_Part1_DNS + (portList[i] - 2000)
						}
						else{
							url = Url_Part1_DNS + portList[i]
						}

						ServiSignLog("Echo URL: " + url)

						resultObj = this.sendData(url, DataObj)
						if(resultObj != undefined){
							
							ErrorCode = Base64Decode(resultObj.result)
				
							if(ErrorCode != "" && ErrorCode != "0") {
								ServiSignLog("Error code: " + ErrorCode)
								ServiSignErrorCode = parseInt(ErrorCode)
								if(ServiSignErrorCode == 61908){
									return false
								}
								continue
							}
							ServiSignUrl = url
							EchoSuccess = true
							break
						}
						if(ServiSignErrorCode == 61014){
							// 使用了 Proxy
							// if(useCookieTryPort){
							// 	document.cookie = "ServiSignUrl=fail"
							// }
							ServiSignLog("Using proxy")
							return false
						}
					}
					if(!EchoSuccess){
						for (var i = 0; i < portList.length; i++) {
							var url
							if(OS == "Mac"){
								url = Url_Part1_IP + (portList[i] - 2000)
							}
							else{
								url = Url_Part1_IP + portList[i]
							}

							ServiSignLog("Echo URL: " + url)

							resultObj = this.sendData(url, DataObj)
							if(resultObj != undefined){
								
								ErrorCode = Base64Decode(resultObj.result)
					
								if(ErrorCode != "" && ErrorCode != "0") {
									ServiSignLog("Error code: " + ErrorCode)
									if(ErrorCode == 61908){
										return false
									}
									continue
								}
								ServiSignUrl = url
								break
							}
							if(ServiSignErrorCode == 61014){
								// 使用了 Proxy
								// if(useCookieTryPort){
								// 	document.cookie = "ServiSignUrl=fail"
								// }
								ServiSignLog("Using proxy")
								return false
							}
						}
					}
				}
				else{
					ServiSignLog("Echo URL: " + url)
					resultObj = this.sendData(ServiSignUrl, DataObj)
				}

				if(resultObj == undefined){
					// if(useCookieTryPort){
					// 	document.cookie = "ServiSignUrl=fail"
					// }
					ServiSignConnectError()
					return false
				}
				
				ServiSignErrorCode = parseInt(ErrorCode) || 0
				if(ServiSignErrorCode == 0){
					// if(useCookieTryPort){
					// 	document.cookie = "ServiSignUrl=" + ServiSignUrl
					// }
				}
				else{
					// if(useCookieTryPort){
					// 	document.cookie = "ServiSignUrl=fail"
					// }
					return false
				}
				
				realServiSignVersion = Base64Decode(resultObj.ServerVersion)
				realLibVersion = Base64Decode(resultObj.LibVersion)
				realInstallerVersion = Base64Decode(resultObj.InstallerVersion)
				
				if(SessionID == "") {
					SessionID = Base64Decode(resultObj.SessionID)
				}

				if(OS == "Windows"){
					CurrenOSMinimalInstallerVersion = MinimalInstallerVersion
				}
				else if(OS == "Mac"){
					CurrenOSMinimalInstallerVersion = MinimalInstallerVersion_Mac
				}
				else if(OS == "Linux"){
					CurrenOSMinimalInstallerVersion = MinimalInstallerVersion_Linux
				}
				
				needUpdate = (VersionCompare(CurrenOSMinimalInstallerVersion, realInstallerVersion) == VersionCompare_Bigger || VersionCompare(CurrenOSMinimalInstallerVersion, realInstallerVersion) == VersionCompare_Error)

				public_key_hex = Base64Decode(resultObj.public_key_hex)

//				console.log('recv public_key_hex ' + public_key_hex)

				try {
// 					key_exchange.compute_share_secret(public_key_hex)
// 					share_secret = key_exchange.share_secret
				}
				catch(err) {}
				

				ServiSignErrorCode = 0
				return true
			},
			Send : function(DataObj) {
				DataObj.comname = LibName
				var resultObj = this.sendData(ServiSignUrl, DataObj)
				try {
					return Base64Decode(resultObj.result)
				}
				catch(err) {
					return ""
				}
			},
			getCGServiSignVersion : function() {
				return realServiSignVersion
			},
			getLibVersion : function() {
				return realLibVersion
			},
			getInstallerVersion : function() {
				return realInstallerVersion
			},
			getMinimalInstallerVersion : function() {
				return CurrenOSMinimalInstallerVersion
			},
			ServiSigninit : function() {
				var XMLHttpRequestSupported = typeof new XMLHttpRequest().responseType === 'string'
				
				if(!XMLHttpRequestSupported) {
					alert("This Browser does NOT support XMLHttpRequest")
					return false
				}
				return this.TryPort()
			},
			ServiSignRelease : function() {
				if(ServiSignErrorCode != 0){
					return
				}

				var empty_func = function() { return undefined; };
				this.setServiSignCallback(empty_func)

				var DataObj = new Object()
				DataObj.functionname = "ServiSignRelease"
				DataObj.minlibversion = minLibVersion
				this.Send(DataObj)

				realServiSignVersion = ""
				realLibVersion = ""
				realInstallerVersion = ""
				CurrenOSMinimalInstallerVersion = null
				
				SessionID = ""
				needUpdate = false
				ServiSignErrorCode = 0
			},
			ServiSignForceRelease : function() {
				var DataObj = new Object()
				DataObj.functionname = "ServiSignForceRelease"
				DataObj.minlibversion = minLibVersion
				this.Send(DataObj)

				realServiSignVersion = ""
				realLibVersion = ""
				realInstallerVersion = ""
				CurrenOSMinimalInstallerVersion = null
				
				SessionID = ""
				needUpdate = false
				ServiSignErrorCode = 0
			},
			needUpdateInstaller : function() {
				return needUpdate
			},
			setServiSignValue : function(channel, domain_list, timeout, value){
				var DataObj = new Object()
				DataObj.functionname = "setServiSignValue"
				DataObj.channel = channel
				DataObj.domain_list = domain_list
				DataObj.timeout = timeout
				DataObj.value = value
				DataObj.value_ServiSignHide = true
				return this.Send(DataObj)
			},
			getServiSignValue : function(channel){
				var DataObj = new Object()
				DataObj.functionname = "getServiSignValue"
				DataObj.channel = channel
				DataObj.hide_result = true
				return this.Send(DataObj)
			}
		}
		return ServiSignObj
	}
	var ServiSignObj = getServiSignObj()
	var ServiSignInterface = 
	{
		GetServiSignVersion : function() {
			return ServiSignObj.getCGServiSignVersion()
		},
		GetLibVersion : function() {
			return ServiSignObj.getLibVersion()
		},
		GetInstallerVersion : function() {
			return ServiSignObj.getInstallerVersion()
		},
		GetMinimalInstallerVersion : function() {
			return ServiSignObj.getMinimalInstallerVersion()
		},
		SetServiSignCallback : function(InputFunction) {
			ServiSignObj.setServiSignCallback(InputFunction)
		},
		NeedUpdateInstaller : function() {
			return ServiSignObj.needUpdateInstaller()
		},
		ServiSignForceRelease : function() {
			return ServiSignObj.ServiSignForceRelease()
		},
		SetServiSignValue : function(channel, domain_list, timeout, value){
			return ServiSignObj.setServiSignValue(channel, domain_list, timeout, value)
		},
		GetServiSignValue : function(channel){
			return ServiSignObj.getServiSignValue(channel)
		},
		ServiSignCheckUpdate : function(){
			//if (ServiSignErrorCode != 0) { return }
			
			var DataObj = new Object()
			DataObj.functionname = "ServiSignCheckUpdate"
			DataObj.minlibversion = minLibVersion
			
			return ServiSignObj.Send(DataObj)
		},
		GetFakeErrorCode : function(){
			return 0;
		},
		GetVersion : function(){
			var DataObj = new Object()
			DataObj.functionname = "GetVersion"
			DataObj.ServiSignFunctionIndex = 0

			return ServiSignObj.Send(DataObj)
		},
		get_lastError : function(){
			var DataObj = new Object()
			DataObj.functionname = "get_lastError"
			DataObj.ServiSignFunctionIndex = 1

			return parseInt(ServiSignObj.Send(DataObj))
		},
		GPKI_DetectCard : function(iFlags){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_DetectCard"
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 2

			return parseInt(ServiSignObj.Send(DataObj))
		},
		GPKI_VerifyPIN : function(cstrPIN, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_VerifyPIN"
			DataObj.cstrPIN_ServiSignBase64Flag = true
			DataObj.cstrPIN = Base64Encode(cstrPIN)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 3

			return KeepAlive(DataObj)
		},
		GPKI_SetReaderSlot : function(iFlags, slot){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_SetReaderSlot"
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.slot_ServiSignBase64Flag = true
			DataObj.slot = Base64Encode(slot)
			DataObj.ServiSignFunctionIndex = 4

			return parseInt(ServiSignObj.Send(DataObj))
		},
		GPKI_GetSlotCount : function(){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_GetSlotCount"
			DataObj.ServiSignFunctionIndex = 5

			return parseInt(ServiSignObj.Send(DataObj))
		},
		GPKI_GetErrorPINCount : function(){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_GetErrorPINCount"
			DataObj.ServiSignFunctionIndex = 6

			return parseInt(ServiSignObj.Send(DataObj))
		},
		GPKI_GetSerialNumber : function(){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_GetSerialNumber"
			DataObj.ServiSignFunctionIndex = 7

			return ServiSignObj.Send(DataObj)
		},
		GPKI_SignData : function(cstrOptPIN, cstrData, cstrsigncodepage, iFlags, iHashFlag){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_SignData"
			DataObj.cstrOptPIN_ServiSignBase64Flag = true
			DataObj.cstrOptPIN = Base64Encode(cstrOptPIN)
			DataObj.cstrData_ServiSignBase64Flag = true
			DataObj.cstrData = Base64Encode(cstrData)
			DataObj.cstrsigncodepage_ServiSignBase64Flag = true
			DataObj.cstrsigncodepage = Base64Encode(cstrsigncodepage)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.iHashFlag_ServiSignBase64Flag = true
			DataObj.iHashFlag = Base64Encode(iHashFlag)
			DataObj.ServiSignFunctionIndex = 8

			return KeepAlive(DataObj)
		},
		GPKI_GetCachedCert : function(){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_GetCachedCert"
			DataObj.ServiSignFunctionIndex = 9

			return ServiSignObj.Send(DataObj)
		},
		GPKI_EnumCerts : function(iFlags){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_EnumCerts"
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 10

			return KeepAlive(DataObj)
		},
		CAPICertGetSubject : function(cstrCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "CAPICertGetSubject"
			DataObj.cstrCert_ServiSignBase64Flag = true
			DataObj.cstrCert = Base64Encode(cstrCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 11

			return ServiSignObj.Send(DataObj)
		},
		CAPICertGetSerialNumber : function(cstrCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "CAPICertGetSerialNumber"
			DataObj.cstrCert_ServiSignBase64Flag = true
			DataObj.cstrCert = Base64Encode(cstrCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 12

			return ServiSignObj.Send(DataObj)
		},
		CAPICertGetNotBefore : function(cstrCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "CAPICertGetNotBefore"
			DataObj.cstrCert_ServiSignBase64Flag = true
			DataObj.cstrCert = Base64Encode(cstrCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 13

			return ServiSignObj.Send(DataObj)
		},
		CAPICertGetNotAfter : function(cstrCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "CAPICertGetNotAfter"
			DataObj.cstrCert_ServiSignBase64Flag = true
			DataObj.cstrCert = Base64Encode(cstrCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 14

			return ServiSignObj.Send(DataObj)
		},
		CAPICertGetIssuer : function(cstrCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "CAPICertGetIssuer"
			DataObj.cstrCert_ServiSignBase64Flag = true
			DataObj.cstrCert = Base64Encode(cstrCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 15

			return ServiSignObj.Send(DataObj)
		},
		CAPICertGetPublicKey : function(cstrCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "CAPICertGetPublicKey"
			DataObj.cstrCert_ServiSignBase64Flag = true
			DataObj.cstrCert = Base64Encode(cstrCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 16

			return ServiSignObj.Send(DataObj)
		},
		CAPICertGetVersion : function(cstrCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "CAPICertGetVersion"
			DataObj.cstrCert_ServiSignBase64Flag = true
			DataObj.cstrCert = Base64Encode(cstrCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 17

			return ServiSignObj.Send(DataObj)
		},
		GPKI_GetTailOfCitizenID : function(bCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_GetTailOfCitizenID"
			DataObj.bCert_ServiSignBase64Flag = true
			DataObj.bCert = Base64Encode(bCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 18

			return ServiSignObj.Send(DataObj)
		},
		GPKI_PureSign : function(cstrOptPIN, cstrData, cstrsigncodepage, iFlags, iHashFlag){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_PureSign"
			DataObj.cstrOptPIN_ServiSignBase64Flag = true
			DataObj.cstrOptPIN = Base64Encode(cstrOptPIN)
			DataObj.cstrData_ServiSignBase64Flag = true
			DataObj.cstrData = Base64Encode(cstrData)
			DataObj.cstrsigncodepage_ServiSignBase64Flag = true
			DataObj.cstrsigncodepage = Base64Encode(cstrsigncodepage)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.iHashFlag_ServiSignBase64Flag = true
			DataObj.iHashFlag = Base64Encode(iHashFlag)
			DataObj.ServiSignFunctionIndex = 19

			return KeepAlive(DataObj)
		},
		GPKI_GetCertType : function(cstrCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_GetCertType"
			DataObj.cstrCert_ServiSignBase64Flag = true
			DataObj.cstrCert = Base64Encode(cstrCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 20

			return parseInt(ServiSignObj.Send(DataObj))
		},
		GPKI_Base64Encode : function(cstrsrcData, cstrcodePage){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_Base64Encode"
			DataObj.cstrsrcData_ServiSignBase64Flag = true
			DataObj.cstrsrcData = Base64Encode(cstrsrcData)
			DataObj.cstrcodePage_ServiSignBase64Flag = true
			DataObj.cstrcodePage = Base64Encode(cstrcodePage)
			DataObj.ServiSignFunctionIndex = 21

			return ServiSignObj.Send(DataObj)
		},
		GPKI_Base64Decode : function(cstrbase64String, cstroutCodePage){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_Base64Decode"
			DataObj.cstrbase64String_ServiSignBase64Flag = true
			DataObj.cstrbase64String = Base64Encode(cstrbase64String)
			DataObj.cstroutCodePage_ServiSignBase64Flag = true
			DataObj.cstroutCodePage = Base64Encode(cstroutCodePage)
			DataObj.ServiSignFunctionIndex = 22

			return ServiSignObj.Send(DataObj)
		},
		GPKI_SignDataInit : function(sOptPIN, lFlags){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_SignDataInit"
			DataObj.sOptPIN_ServiSignBase64Flag = true
			DataObj.sOptPIN = Base64Encode(sOptPIN)
			DataObj.lFlags_ServiSignBase64Flag = true
			DataObj.lFlags = Base64Encode(lFlags)
			DataObj.ServiSignFunctionIndex = 23

			return KeepAlive(DataObj)
		},
		GPKI_SignDataUpdate : function(cstrData, cstrsigncodepage, iFlags, iHashFlag){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_SignDataUpdate"
			DataObj.cstrData_ServiSignBase64Flag = true
			DataObj.cstrData = Base64Encode(cstrData)
			DataObj.cstrsigncodepage_ServiSignBase64Flag = true
			DataObj.cstrsigncodepage = Base64Encode(cstrsigncodepage)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.iHashFlag_ServiSignBase64Flag = true
			DataObj.iHashFlag = Base64Encode(iHashFlag)
			DataObj.ServiSignFunctionIndex = 24

			return KeepAlive(DataObj)
		},
		GPKI_SignDataFinal : function(lFlags){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_SignDataFinal"
			DataObj.lFlags_ServiSignBase64Flag = true
			DataObj.lFlags = Base64Encode(lFlags)
			DataObj.ServiSignFunctionIndex = 25

			return KeepAlive(DataObj)
		},
		GPKI_GetCertTypeOID : function(cstrCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_GetCertTypeOID"
			DataObj.cstrCert_ServiSignBase64Flag = true
			DataObj.cstrCert = Base64Encode(cstrCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 26

			return ServiSignObj.Send(DataObj)
		},
		GPKI_GetOrganizationID : function(cstrCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_GetOrganizationID"
			DataObj.cstrCert_ServiSignBase64Flag = true
			DataObj.cstrCert = Base64Encode(cstrCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 27

			return ServiSignObj.Send(DataObj)
		},
		GPKI_GetCardHolderRank : function(cstrCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_GetCardHolderRank"
			DataObj.cstrCert_ServiSignBase64Flag = true
			DataObj.cstrCert = Base64Encode(cstrCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 28

			return ServiSignObj.Send(DataObj)
		},
		GPKI_GetEntityOID : function(cstrCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "GPKI_GetEntityOID"
			DataObj.cstrCert_ServiSignBase64Flag = true
			DataObj.cstrCert = Base64Encode(cstrCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 29

			return ServiSignObj.Send(DataObj)
		},
		CryptSignatureGetAlgorithm : function(bSignature, iFlags, index){
			var DataObj = new Object()
			DataObj.functionname = "CryptSignatureGetAlgorithm"
			DataObj.bSignature_ServiSignBase64Flag = true
			DataObj.bSignature = Base64Encode(bSignature)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.index_ServiSignBase64Flag = true
			DataObj.index = Base64Encode(index)
			DataObj.ServiSignFunctionIndex = 30

			return ServiSignObj.Send(DataObj)
		},
		CryptCertGetSignatureAlgorithm : function(cert, iFlags, index){
			var DataObj = new Object()
			DataObj.functionname = "CryptCertGetSignatureAlgorithm"
			DataObj.cert_ServiSignBase64Flag = true
			DataObj.cert = Base64Encode(cert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.index_ServiSignBase64Flag = true
			DataObj.index = Base64Encode(index)
			DataObj.ServiSignFunctionIndex = 31

			return ServiSignObj.Send(DataObj)
		},
		CryptCertGetExtension : function(bCert, iFlags){
			var DataObj = new Object()
			DataObj.functionname = "CryptCertGetExtension"
			DataObj.bCert_ServiSignBase64Flag = true
			DataObj.bCert = Base64Encode(bCert)
			DataObj.iFlags_ServiSignBase64Flag = true
			DataObj.iFlags = Base64Encode(iFlags)
			DataObj.ServiSignFunctionIndex = 32

			return ServiSignObj.Send(DataObj)
		}
	}

	window.addEventListener("beforeunload", function (e) {
		if(ServiSignTabMode == ServiSignTabMode_Tab){
			ServiSignObj.ServiSignRelease()
		}
		else if(ServiSignTabMode == ServiSignTabMode_Browser){
			//Do nothing
		}
	})
	if(!ServiSignObj.ServiSigninit()){
		ServiSignLoadComponentError()
		return undefined
	}
	
	return ServiSignInterface
}

function ServiSign_GetErrorCode(){
	return ServiSignErrorCode
}
