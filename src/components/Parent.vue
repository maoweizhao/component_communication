<template>
<div>
    <h1>父组件</h1>
    <!-- 父传子 -->
    <!-- v-bind、props -->
    <!-- 在父组件中使用子组件 通过v-bind绑定一个自定义属性的方式来实现父传子-->
    <Son1 sta='静态的值' :msg='message' :ary='arry' :obj='object'></Son1>
    <!-- 子传父 -->
    <!-- v-on、$emit -->
    <!-- 在子组件标签中添加事件监听，等待子组件触发 -->
    <!-- 注意！监听的是子组件的\$emit('receiveData')，在父组件中触发的是ReceiveData -->
    <p v-cloak>{{son2Message}}</p>
    <Son2 v-on:receiveData = "ReceiveData"></Son2>

</div>
</template>

<script>
import Son1 from '_c/Son1'
import Son2 from '_c/Son2'

export default {
  components: { Son1, Son2 },
  data () {
    return {
      message: '父组件的message',
      arry: ['F', 'a', 't', 'h', 'e', 'r'],
      object: {
        name: '你爸爸',
        age: '40',
        hobby: '看书'
      },
      son2Message: ''
    }
  },
  methods: {
    ReceiveData (data) {
      // 把son2传过来的值赋值给父组件中的data property
      this.son2Message = data
    }
  }
}
</script>

<style lang="less" scoped>
</style>
