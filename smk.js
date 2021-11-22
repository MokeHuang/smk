/*
// 常用的一些命令
sudo ufw status		//查看防火墙的状态
sudo ufw enable          //开启防火墙
sudo ufw allow 22        //开放22端口
sudo ufw delete allow 21           //关闭21端口
sudo ufw allow 8001/tcp            //指定开放8001的tcp协议
sudo ufw delete allow 8001/tcp        //关闭21端口
sudo ufw reload           //重启ufw防火墙
sudo netstat -tunlp | grep 22            //查看22端口信息
sudo ufw disable          //关闭防火墙
sudo ufw default deny        //拒接所有外来访问，本机能正常访问外部
sudo ufw allow from 192.168.121.1   // 指定ip为192.168.121.1的计算机操作所有端口
sudo ufw delete allow from 192.168.121.1	// 关闭指定ip为192.168.121.1的计算机操作所有端口
sudo ufw allow from 192.168.121.2 to any port 3306 	// 开放指定ip为192.168.121.2的计算机访问本机的3306端口
sudo ufw delete allow from 192.168.121.2 to any port 3306	// 关闭指定ip为192.168.121.2的计算机对本机的3306端口的操作


启动服务
npm i -g serve
cd dist
serve

*/












// 获取url后的参数 三种方法

/**
 * 正则获取指定URL参数
 * @param {Object} searchStr
 */
function checkUrl (searchStr) {
	function getQueryString (name) {
	  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
	  var r = window.location.search.substr(1).match(reg)
	  if (r != null) return unescape(r[2])
	  return null
	}
	return encodeURIComponent(getQueryString(searchStr))
}

/**
 * 获取URL后拼接的所有参数
 * @return {object}
 */
function GetRequest() { 
   var url = location.search; //获取url中"?"符后的字串 
   // var url = '?shareUin=123456&shareRoomId=1&shareTime=2&shareUid=3&shareMac=4&multipleType=5&punchCardDays=6'
   var theRequest = new Object(); 
   if (url.indexOf("?") != -1) { 
      var str = url.substr(1); 
      strs = str.split("&"); 
      for(var i = 0; i < strs.length; i ++) { 
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
      } 
   } 
   return theRequest; 
}

/**
 * 获取指定的URL参数值
 * URL:http://www.quwan.com/index?name=tyler
 * 参数：paramName URL参数
 * 调用方法:getParam("name")
 * 返回值:tyler
 */
function getParam(paramName) {
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}
