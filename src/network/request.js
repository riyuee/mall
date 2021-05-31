import axios from "axios"

export function request(config) {
        
        // 1、创建axios的实例
        const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/m5',
            timeout: 5000
        })

    // 请求拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => { console.log(err); })
    

        // 发送真正的网络请求
        return instance(config)
    
}

// export function request(config) {
//     return new Promise((resolve, reject) => {
        
//         // 1、创建axios的实例
//         const instance = axios.creat({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })

//         // 发送真正的网络请求 
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }
