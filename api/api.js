//  公共的方法
import Vue from 'vue'
    const baseUrl = "https://v3pro.houjiemeishi.com/index.php?store_id=1&store_type=2"; // 请求地址
    // const $ajax = {
    // 	get: function({
    // 		url,
    // 		param,
    // 		header
    // 	}) {
    // 		return new Promise(function(resolve, reject) {
				
    // 			uni.request({
    // 				url: baseUrl + url,
    // 				data: param,
    // 				method: "GET",
    // 				success: function(res) {
    // 					if (res.statusCode !== 200) {
    // 						reject(res);
    // 					} else {
    // 						resolve(res);
    // 					}
    // 				},
    // 				fail: function(err) {
    // 					reject(err);
    // 				}
    // 			})
    // 		})
    // 	},
    // 	post: function({
    // 		url,
    // 		data,
    // 		header
    // 	}) {
    // 		return new Promise(function(resolve, reject) {
				// console.log(url)
    // 			uni.request({
    // 				url: baseUrl + url,
    // 				data: data,
    // 				method: "POST",
    // 				header: {
    // 					'Content-Type': 'application/x-www-form-urlencoded'
    // 				},
    // 				success: function(res) {
    // 					if (res.statusCode !== 200) {
    // 						reject(res)
    // 					} else {
    // 						resolve(res);
    // 					}
    // 				},
    // 				fail: function(err) {
    // 					reject(err)
    // 				}
    // 			})
    // 		})
    // 	},
    // 	postJSON: function({
    // 		url,
    // 		data,
    // 		header
    // 	}) {
    // 		return new Promise(function(resolve, reject) {
    // 			uni.request({
    // 				url: baseUrl + url,
    // 				data: data,
    // 				method: "POST",
    // 				header: {
    // 					'Content-Type': 'application/json;charset=UTF-8'
    // 				},
    // 				success: function(res) {
    // 					if (res.statusCode !== 200) {
    // 						reject(res)
    // 					} else {
    // 						resolve(res);
    // 					}
    // 				},
    // 				fail: function(err) {
    // 					reject(err)
    // 				}
    // 			})
    // 		})
    // 	},
    // 	upImg: function({
    // 		url,
    // 		imgUrl
    // 	}) {
    // 		return new Promise(function(resolve, reject) {
    // 			uni.uploadFile({
    // 				url: "baseUrl" + url,
    // 				filePath: imgUrl,
    // 				name: 'file',
    // 				success: function(uploadFileRes) {
    // 					resolve(uploadFileRes);
    // 				},

    // 				fail: function(err) {
    // 					reject(err)
    // 				}
    // 			});
    // 		})
    // 	}
    // }
	
	
	class Request {
	    constructor() {
	        this.URI = uni.getStorageSync('url') || ''
	    }
	
	    request(Parma) {
	        //log('当前请求参数', Parma)
	        return new Promise((resolve, reject) => {
	            // 请求拦截
	            if (typeof this.request.use === 'function') {
	                this.request.use(Parma)
	            }
	
	            uni.request({
	                url: baseUrl,
	                method: Parma.method || 'GET',
	                data: {
	                    access_id: Vue.prototype.$store.state.access_id || uni.getStorageSync('access_id'),
	                    language:'',
	                    ...Parma.data
	                } || {},
	                header: Parma.header || {
	                    'content-type': 'application/x-www-form-urlencoded'
	                },
	                success: (res) => {
	                    if (this.response(res)) {
	                        //log('请求成功', res.data)
	                        resolve(res.data)
	                    } else {
	                        //log('接口报错', res.data, 'error')    
	                    }
	                },
	                fail: (err) => {
	                    // TODO:错误处理
	                    //log('接口报错', err, 'error')
	                    reject(err)
	                }
	            })
	        })
	    }
	
	    uploadimg(filePath, extData) {
	        return new Promise((resolve, reject) => {
	            let data = {
	                module: 'app',
	                action: 'mch',
	                m: 'uploadImgs'
	            }
	
	            data = {...data, ...extData }
	
	            let access_id = Vue.prototype.$store.state.access_id || uni.getStorageSync('access_id')
	            if (access_id) {
	                data.access_id = access_id;
	            }
	
	            uni.uploadFile({
	                url: baseUrl,
	                filePath: filePath,
	                name: 'image',
	                // #ifdef MP-ALIPAY
	                fileType: 'image',
	                // #endif
	                formData: data,
	                success: (res) => {
	                    let Data = JSON.parse(res.data)
	                    if (Data.code == 200) {
	                        resolve(Data)
	                    } else {
	                        reject(Data)
	                    }
	                }
	            })
	
	        })
	    }
	
	    response(res) {
	        return true;
	        let {
	            statusCode
	        } = res
	
			// console.log(res.data)
	        
	        if (typeof res.data !== 'object') {
	            
	            console.log('如果不是支付接口，可能请求出错了')
	            console.log(res)
	            // return false
	        }
	        
	        // 响应拦截
	        if (typeof this.response.use === 'function') {
	            this.response.use(res)
	        }
	
	
	        
	        
	        if (statusCode === 200) {
	            return true
	        }
	        
	        return false
	    }
	
	}
	
    export default Request;
