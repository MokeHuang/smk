function ajax(option){
    var Method = option.method || "GET"
    var data = option.data || {}
    var url = option.url
    var async = option.async || true;

    // 1.创建ajax对象
    var xhr = new XMLHttpRequest()

    var query = [],
        queryData;
    for(var key in data){
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    }
    queryData = query.join('&');

    if(Method.toLocaleUpperCase() === 'GET'){
        url = url + '?' + queryData
    }
    // 2.建立连接
    xhr.open(Method, url, async)

    // 3.发送请求
    if(Method.toLocaleUpperCase() === 'POST'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=utf-8');
        xhr.send(queryData);
    } else {
        xhr.send();
    }

    // 4.监听返回数据
    xhr.onreadystatechange=function(){
        // xhr.readyState === 4 意味这服务器返回数据
        // xhr.status == 200 服务器返回正确的数据
        if( xhr.readyState === 4 && xhr.status == 200 ){

            var res =  JSON.parse(xhr.responseText)
            option.success(res)
        }
    }
}
