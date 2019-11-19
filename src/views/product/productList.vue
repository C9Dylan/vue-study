<template>
  <div class="body">
      {{name}} <br/>
      {{list}}
  </div>
</template>

<script>
export default {
  name: 'productManageComponent',
  data () {
    return {
      sayHello: 'nihaoa',
      list: [
        "Book",
        "Skateborad",
        "Computer"
      ]
    }
  },
  /**
   * 就绪函数, 进入该组件时, 执行该函数
   */
  mounted () {
    this.welcome()
  },
  /**
   * 函数定义属性: 功能函数可以定义该对象类型属性中.
   */
  methods:{
    welcome() {
      alert("Welcome to product manage page");
    }
  }
}
</script>

<style>
</style>
