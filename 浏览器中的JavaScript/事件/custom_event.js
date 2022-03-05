// 自定义事件
document.dispatchEvent(new CustomEvent('busy', { detail: false }))

document.addEventListener('busy', (e) => {
    console.log(e)
    if (e.detail) {
        // 做一些事情
    }
})

setTimeout(() => {
    document.dispatchEvent(new CustomEvent('busy', { detail: true }))
}, 5000)