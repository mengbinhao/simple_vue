class Observe {
    constructor(data) {
        this.$data = data
        this.walk()
    }

    walk() {
        Object.keys(this.$data).forEach(key => {
            this.defineReactive(this.$data, key, this.$data[key])
        })
    }

    defineReactive(data, key, val) {
        Object.defineProperty(data, key, {
            configurable: false,
            enumerable: true,
            get() {
                console.log('get')
                return val
            },
            set(newVal) {
                console.log('set')
                if (newVal === val) return
                val = newVal
            }
        })
    }
}