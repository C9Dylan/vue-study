<!-- 1. 视图层 -->
<template>
    <div>
        <!-- {{}} : 文本取值 -->
        姓名: {{ this.nameEn }} <br>
        年龄: {{ this.age }}    <br>
        <!-- v-if / else if / else  -->
        性别:
        <span v-if="this.sex === 'male'">男</span>
        <span v-else-if="sex === 'female'">女</span>
        <span v-else>不详</span>

        <br>

        <!-- v-for -->
        <ul>
            <li v-for="(h, index) in hobby" :key="index">
                {{ h.description }}
            </li>
        </ul>


        <br>

        <!-- v-on: 为标签绑定指定的html事件 -->
        <button v-on:click="increaseAge()">increase age</button>   <br>
        <!-- v-on:click=''中的属性age不能使用this.age的形式 -->
        <button v-on:click="age -= 1">reduce age</button>          <br>
        <button v-on:click="clickFun()">点击</button>               <br>
        <!-- 简写方式: @事件名称 -->
        <button @click="clickAgainFun()">再点击</button>            <br>
        <span @focus="touchFun()">Touch</span>                     <br>
    </div>
</template>

<!-- 2.行为层 -->
<script>
    export default {
        data() {
            return {
                nameZh : "张三",
                nameEn : "kim",
                age : 20,
                sex : "male",
                hobby : [
                    { description : '吃' },
                    { description : '喝' },
                    { description : '玩' },
                    { description : '乐' }
                ]
            }
        },
        methods: {
            // 1. 简写
            clickFun() {
                alert('You click me!');
            },
            // 2. 这种写法好理解...
            clickAgainFun : function() {
                alert('You click me again!');
            },

            increaseAge() {
                this.age += 1;
            },

            touchFun() {
                alert("You touch me!");
            }
        }
    }
</script>

<!-- 3.样式层  -->
<style>
</style>