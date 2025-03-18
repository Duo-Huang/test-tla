import CryptoJS from 'crypto-js'
// import bar from './bar'
// 这里的导入决定了顶层await会不会出bug （前提是store/index.ts中有import， 如果没有的话，你可以在这里尝试import react等等，也会出bug， 总之就是两个文件你多试试同时import 包，或者一边import，另一边不import， 效果不一样， 这里仅以目前的store/index.ts的代码为例）

// 已测试出bug的情况
// 1. import CryptoJS 并使用

// 测试无bug情况
//1. 导入bar并使用


class Foo {

    constructor() {
        console.log('foo')
    }

    get() {
        // return react
        return CryptoJS
        // return _
        // return bar
    }
}

const foo = new Foo()

export default foo