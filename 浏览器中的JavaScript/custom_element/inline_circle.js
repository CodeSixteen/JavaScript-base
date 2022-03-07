customElements.define('inline-circle', class InlineCircle extends HTMLElement {
    connectedCallback() {
        console.log('元素被插入到了文档中')
        this.style.display = 'inline-block'
        this.style.borderRadius = "50%";
        this.style.transform = 'translateY(10%)'
        if (!this.style.width) {
            this.style.width = '0.8em'
            this.style.height = '0.8em'
        }
    }

    static get observedAttributes() {
        return ['diameter', 'color', 'border']
    }

    // 属性变化的回调
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'diameter':
                this.style.width = newValue
                this.style.height = newValue
                break;
            case 'color':
                this.style.backgroundColor = newValue
                break;
            case 'border':
                this.style.border = newValue
                break;
        }
    }

    // 也可以定义元素的 JavaScript 属性,也就是通过 el.color 能获取到元素的属性
    get color() {
        return this.getAttribute('color')
    }
    set color(color) {
        this.setAttribute('color', color)
    }
})