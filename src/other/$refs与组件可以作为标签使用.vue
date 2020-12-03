<template>
  <div class="container">
    <div class="header">
      <el-tabs v-model="active" @tab-click="handleClick">
        <el-tab-pane label="未完成" name="unfinished">
           <!--3. 使用组件(headTable, HeadTable...等等写法都可以引用到import的组件)-->
          <head-table ref="headTable"></head-table> // 4. ref 将 import的组件注册到$refs中, 并命名为headTable
        </el-tab-pane>
        <el-tab-pane label="已完成" name="finished">
          <head-table ref="headTable"></head-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

  // 1. 引入组件
  import HeadTable from "./dcfmcommoninspectionhead"

  export default {

    data() {
      return {
        active: "unfinished"
      }
    },
    // 2. 导入引入组件
    components: {
      HeadTable,
    },
    created() {
    },
    methods: {
      handleClick(tab) {
        let status = tab.name == "unfinished" ? 1 : tab.name == "finished" ? 3 : 0;
        this.$nextTick(() => {
          // 4. 通过this.$refs的形式, 调用注册过的import组件
          this.$refs.headTable.init(status)
        })
      },
    }
  }
</script>
