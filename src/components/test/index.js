import test from './test.vue'
import Vue from 'vue'

const install = function (Vue) {
    Vue.component(test.name, test)
}

export { test }
export default {
    install
}

Vue.use(install)