// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import renderLoop from './views/cell.vue'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component(renderLoop, renderLoop)
Vue.component('tb-heading', {
  render: function(createElement) {
    console.log(this)
    if (this.items.length) {
      return createElement('ul', this.items.map(function(item){
        return createElement('li', {domPropsInnerHTML:item.name, style: {color:'red'}}, item.name);
      }))
    } else {
      return createElement('p', 'No items found.');
    }
  },
  
  props: {
    items: {
      type: Array,
      default: function() {
        return [
          {
            name: 'kongzhi1'
          },
          {
            name: 'kongzhi2'
          }
        ]
      }
    }
  }
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
