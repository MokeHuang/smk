const baseUrl = ''

const request = (url = '', data = {}, method = 'GET', header) => {
    return new Promise((resolve, reject) => {
        uni.request({
            method: method,
            url: baseUrl + url,
            data: data,
            header: header || {'content-type': 'application/x-www-form-urlencoded'}, // multipart/form-data(文件) //application/json(大段json)
            dataType: 'json',
        }).then((response) => {
            let [error, res] = response;
            resolve(res.data);
        }).catch(error => {
            let [err, res] = error;
            reject(err)
        })
    });
}

// async function request (url = '', data = {}, method = 'GET', header) {
//     var [error, res] = await uni.request({
//         method: method,
// 		url: baseUrl + url,
// 		data: data,
// 		header: header || {'content-type': 'application/x-www-form-urlencoded'}, // multipart/form-data(文件) //application/json(大段json)
// 		dataType: 'json',
//     });
// 	return res.data;
// }


export default request
