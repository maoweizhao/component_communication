<template>
<div class="son1">
    <h3>son1组件</h3>
    <!-- 组件中通过props来获取子父组件传来的值 -->
    <p>来自父组件的静态值：{{sta}}</p>
    <p>来自于父组件的动态值：{{msg}}</p>
    <p>来自于父组件的数组：</p>
    <p v-for="item in ary" :key="item.id"> {{item}}</p>
    <p>来自父组件的对象：</p>
    <p v-for="(item, key, index) in obj" :key="item.id">{{index}} {{key}} {{item}}</p>

    <p>从父组件接受过来的数组，处理后：{{reslut}}</p>
</div>
</template>

<script>
export default {
// 一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop
// 关于props，vue的文档真的非常详细
// https://vuejs.bootcss.com/guide/components-props.html
  props: ['sta', 'msg', 'ary', 'obj'],
  // 第二种写法
  //   props: {
  //     msg: String,
  //     ary: Array,
  //     obj: Object
  //   }

  // 注意单向数据流的问题,不可在子组件中随便更改，
  // 最好定义一个本地的 data property 并将这个 prop 用作其初始值
  data () {
    return {
      // 把从子组件获取的ary存放到container中再进行操作
      container: this.ary
    }
  },
  // 或则你可以定义一个计算属性来接受，处理好后再返回的
  computed: {
    reslut: function () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.ary.reverse()
    }
  }

}
</script>

<style lang="less" scoped>
.son1 {
    margin: 0 auto;
    width: 700px;
    height: 700px;
    background: pink;
}
</style>
