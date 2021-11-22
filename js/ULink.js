var mpscheme = "meipian://main.app.new/meipian?path=meipian%253A%252F%252Farticle%252Fdetail%253Fmask_id%253D3h5c9hhy%2526cb_create_at%253D1618909940%2526cb_expire_time%253D1800%2526client_type%253D2%2526type%253Dwechat%2526source%253Dh5wx_article_top&_sdk_=umeng&um_tc=f46a890aa43c404b95565ea58e9c3e2d&_valid_user_id_=4-c2afd3a446004288a60db5e802ec6c71&_linkid_=usr10s8s5q7tfvhb&source=h5wx_article_top&_bizType_=ushare"
var data = ULink.getUriDecodeParams();
console.log("thisData", data)
var tm = parseInt(data.timeout);
tm = 300
var lazy = (data.lazy === 'true' ? true : false);
if(Object.is(tm,NaN)){
  tm = undefined;
}
var auto = (data.auto === 'true' ? true : false);
var tip = data.tip;
var tipitem ;
var clp;
if(data.clp === 'true'){
   clp = true;
}else if(data.clp === 'false'){
   clp = false;
}else if(data.clp === 'function'){
   clp = function(clptoken){
	 return mpscheme + '&umclp='+clptoken;
   }
}
// 
function proxyOpenDownloadfn(defaultAction, cctx) {
  if (data.popup === 'true') {
	defaultAction();
  } else {
	if (cctx.solution.type === 'scheme') {
	  if(ULink.isWechat || ULink.isQQ){
		defaultAction();
	  }else{
		location.href = cctx.solution.downloadUrl
	  }
	}
  }
}
// 
if(tip === 'default'){
  tipitem = tip;
}else if(tip === 'function'){
  tipitem = function(ctx){
	return `<div style="position:fixed;left:0;top:0;background:rgba(255,0,255,0.5);width:100%;height:100%;z-index:19910324;">${ctx.solution.downloadUrl}</div>`;
  }
}
// 
if(data.env === 'pre'){
  ULink.setGateway('https://pre-c.umsns.com');
}
if(data.new === 'true'){
  console.log(auto,'auto********')
	ULink({
	  id:data.linkid || 'usr1kuam94r60g5p',
	  data:data,
	  selector:'#btnTest1',
	  timeout:tm,
	  useOpenInBrowerTips:tipitem || 'default',
	  lazy:lazy,
	  auto:auto,
	  useClipboard:clp,
	  proxyOpenDownload: proxyOpenDownloadfn,
	  onready:function (ctx){
		console.log('ready', ctx);
	  }
  })
}else{
  setTimeout(function () {
	ULink.tracker.setMetaInfo({
	  nickname: 'smk',
	  trackurl: location.href
	});
	ULink.tracker.enter({ page_name: document.title, page: location.href }, function () {
	  ULink.tracker.getNextTrackCode(function (data) {
		console.log("新的追踪码:", data)
	  })
	  ULink.start({
		id: data.linkid || 'usr1kuam94r60g5p', // 
		// data: {
		// 	test_name: 'test_smk',
		// 	shareUin: checkUrl("shareUin"),
		// 	shareRoomId: checkUrl("shareRoomId"),
		// 	shareTime: checkUrl("shareTime"),
		// 	shareUid: checkUrl("shareUid"),
		// 	shareMac: checkUrl("shareMac"),
		// 	multipleType: checkUrl("multipleType"),
		// 	punchCardDays: checkUrl("punchCardDays"),	// dance
		// 	singerStar: checkUrl("singerStar")	// sing
		// },
		data: GetRequest(),
		useClipboard:clp,
		useOpenInBrowerTips: tipitem || 'default'
	  }).ready(function (ctx) {
		console.log('ready', ctx);
		var option = {
			action: 'click', proxyOpenDownload: proxyOpenDownloadfn, timeout: tm
		}
		if(auto){
		  console.log('auto---------',auto)
		  ctx.wakeup(Object.assign({},option,{action:'load'}))
		}
		let count = 0;
		document.getElementById('btnTest1').onclick = function (e) {
		  ctx.wakeup(option);
		  count = ++count === 3 ? 0 : count
		  if(count === 0){
			  document.getElementById('bgImg').src = 'images/dance.png'
		  } else if(count === 1) {
			  document.getElementById('bgImg').src = 'images/chat.png'
		  } else if(count === 2) {
			  document.getElementById('bgImg').src = 'images/sing.png'
		  }
		};
		// console.log(checkUrl("toApp"))
	  });
	});
  }, 500)
}
// url编码
function checkUrl (searchStr) {
	function getQueryString (name) {
	  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
	  var r = window.location.search.substr(1).match(reg)
	  // var s = '123456sds&toApp=true&_sdk_=umeng&_linkid_=usr1k2fdpj2kgdd1&_bizType_=ushare&'
	  // var r = s.match(reg)
	  if (r != null) return unescape(r[2])
	  return ''
	}
	return encodeURIComponent(getQueryString(searchStr))
}
// 获取url后拼接的所有参数
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