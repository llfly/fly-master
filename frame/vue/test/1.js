// 这是我们的 Model
var exampleData = {
  name: 'aaa.js'
}

// 创建一个 Vue 实例或 "ViewModel"
// 它连接 View 与 Model
var exampleVM = new Vue({
  el: '#example-1',
  data: exampleData
})


// var data = { a: 1 }
// var vm = new Vue({
//   data: data
// })

// console.log(vm.a === data.a); // -> true

// // 设置属性也会影响到原始数据
// vm.a = 2
// console.log(data.a); // -> 2

// // ... 反之亦然
// data.a = 3
// console.log(vm.a); // -> 3


var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})
console.log(vm.$els);


vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true

// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
  // 这个回调将在 `vm.a`  改变后调用
})








