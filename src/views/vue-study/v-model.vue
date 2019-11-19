<template>
    <!-- 
            你可以用 v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。
            它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。
            它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
     -->
    <div>
        <!-- input 双向绑定 -->
        输入姓名: <input v-model="form.name" type="text" placeholder="请输入姓名"/>
        <span>{{form.name == null ? '' : '姓名: ' + form.name}}</span>
    
        <br>

        选择性别: 
        <input v-model="form.sex" type="radio" value="male" />
        <input v-model="form.sex" type="radio" value="female"/>
        <span>选中性别: {{form.sex == 'male' ? '男' : form.sex == '' ? '' : '女'}}</span>

        <br>

        选择爱好:
        <input v-model="form.hobby" type="checkbox" value=1 />吃
        <input v-model="form.hobby" type="checkbox" value=2 />喝
        <input v-model="form.hobby" type="checkbox" value=3 />玩
        <input v-model="form.hobby" type="checkbox" value=4 />乐
        <span>选取爱好: {{form.hobby}}</span>

        <br>

        <!-- 多行文本框 双向绑定 -->
        个人介绍:
        <textarea v-model='form.introduce' rows="10" cols="20" placeholder="请输入介绍"></textarea>
        <br>
        介绍内容: {{form.introduce}}

        <br>

        <!-- 下拉框 双向绑定 -->
        婚姻状况:
        <!-- multiple: 多选下拉框 -->
        <!-- <select v-model="maritalStatus" multiple style="width: 50px;"> -->
        <select v-model="form.maritalStatus">
            <option value="1">未婚</option>
            <option value="2">已婚</option>
            <option value="3">离婚</option>
        </select>
        婚姻状况: {{form.maritalStatus}}

        <br>

        <button @click="add()">提交</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            // 提交的表单数据结构
            form: {
                name: '',
                sex: '',
                hobby: [],
                introduce: '',
                maritalStatus: null
            }
        }
    },
    methods: {
        add: function() {
            console.log(this.form.name)
            console.log(this.form.sex)
            console.log(this.form.hobby)
            console.log(this.form.name)
            console.log(this.form.introduce)
            console.log(this.form.maritalStatus)
        }
    }
}
</script>

<style>
</style>