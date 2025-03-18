import _ from 'lodash'
// 这里也可以修改其他import或者删掉，对结果都有影响

const useStore = {
    getState: () => {
        return {
            count: 0,
        }
    },
}



console.log('loading lazyModule', _)
const module = await import('@/utils/lazyModule');

console.log('module value is :', module.default)

export default useStore 