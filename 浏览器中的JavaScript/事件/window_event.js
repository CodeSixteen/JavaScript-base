// 全局事件
window.onload = (e) => {
    console.log('文档状态' + document.readyState)
}

window.onerror = (msg, url, column) => {
    // 全局错误监听
    // msg 错误信息
    // url 发生错误的文件路径
    // column 发生错误的位置：第几行
    // 参考：https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror
    console.log(msg, url, column)
}

window.onoffline = (e) => {
    // 网络链接断开
    console.log(navigator.connection)
}
window.ononline = (e) => {
    // 网络重新连接
    console.log(navigator.connection)
}

// 获取网络状态
/**
 * downlink: 10
 * effectiveType: "4g"
 * onchange: null
 * rtt: 150
 * saveData: false
 */
console.log(navigator.connection)

window.addEventListener('hashchange', e => {
    console.log(document.URL)
})

window.addEventListener('popstate', e => {

    console.log(e)
}, {
    once: true,
    capture: true
})