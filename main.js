import Vue from 'vue'
import App from './App'

export default new Vue({
  el: '#app',
  render: createElement => {
    return createElement(App)
  }
})
