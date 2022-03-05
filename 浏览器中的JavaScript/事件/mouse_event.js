const box = document.getElementById('mouse');


box.addEventListener('dblclick', e => {
    // 双击事件同时也会触发两次单击事件
    // console.log('双击', e)  
})

box.addEventListener('mousedown', e => {
    // 鼠标按下，单击和双击都会触发
    // console.log('mousedown')
})

box.addEventListener('mouseenter', e => {
    // 鼠标进入元素范围触发，如果初始化时鼠标在元素范围内不会触发，但鼠标开始移动后会触发一次
    // console.log('enter')
})
box.addEventListener('mouseleave', e => {
    // 鼠标离开元素范围触发
    // 初始化时不在范围内不会触发
    // console.log('leave')
})

box.addEventListener('mousemove', e => {
    // console.log('move')
})
box.addEventListener('mouseout', e => {
    // 类似于 mouseleave
    // console.log('out')
})

box.addEventListener('mouseover', e => {
    // 类似于 mouseenter
    // console.log('over')
})

box.addEventListener('mouseup', e => {
    // 鼠标松开，单击和双击都会触发
    // console.log('up')
})
box.addEventListener('mousewheel', e => {
    console.log(e)
    if (e.deltaY !== 0 && 1 / e.deltaY < 0) {
        // 向下
        // console.log(e)
    }
    if (e.deltaY !== 0 && 1 / e.deltaY > 0) {
        // 向上
    }

})


window.addEventListener('click', () => {
    // 这是一个捕获事件，无论如何会先执行我
    console.log('window')
}, true)


box.addEventListener('click', (e) => {
    e.stopPropagation() // 阻止冒泡
    console.log('单击', e)
}, true)