<!--

    Vue 是单页面, 页面跳转只是把不同的组件渲染到当前页.


    Summary: 每个Vue组件(xx.vue)的结构分为三大部分

    1. <template>视图层(展示)</template>
    2. <script>行为层(功能)</script>
    3. <style>表示层(样式)</style>
-->

<!-- 1. 视图层[注: 每个tmplate下必须有一个<div>作为根标签, 否则会报错]-->
<template>
  <div id="app">
    <!-- router-view label: 渲染组件内容的位置 -->
    <router-view></router-view>
  </div>
</template>

<!-- 2.行为层 -->
<script>
</script>

<!-- 3.样式层  -->
<style>
</style>
