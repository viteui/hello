import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './components'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')




// function pathToCamelCase(path) {
//   // 将路径字符串按照斜杠/字符分割成一个数组
//   const parts = path.split('/');
  
//   // 对于每个数组元素，使用字符串方法将其转换为驼峰式的名称
//   const camelCaseParts = parts.map(part => {
//     return part.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
//   });
  
//   // 将每个驼峰式的名称重新组合成一个路径字符串
//   return camelCaseParts.join('');
// }

function pathToCamelCase(path) {
  return path.replace(/\/(.)/g, (_, c) => c.toUpperCase());
}



console.log(pathToCamelCase("/sd/sd/sd"))