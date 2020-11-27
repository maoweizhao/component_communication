<template>
<div class='son2'>
  <h3>son2子组件</h3>
  <button @click="emitData" class="button">点击向父组件发送值</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      son2msg: '子组件son2的值'
    }
  },
  methods: {
    // 这个事件目的是为了出发$emit,你直接把$emit写在生命周期钩子里也是可以的
    emitData () {
      this.$emit('receiveData', this.son2msg)
    }
  }
//   created: function () {
//     this.$emit('receiveData', this.son2msg)
//   }
}
</script>

<style lang="less" scoped>
.son2 {
    margin: 0 auto;
    width: 200px;
    height: 200px;
    background:blue;
}
</style>
