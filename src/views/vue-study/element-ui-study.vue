<template>
  <div style="margin: 70px auto;width: 800px;">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="国家">
        <el-select v-model="form.country" placeholder="请选择">
          <el-option label="中国" value="china"></el-option>
          <el-option label="巴西" value="brazil"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.birthday"
              formatter="yyyy年MM月dd日"
              value-format="yyyy-MM-dd"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="已婚">
        <el-switch v-model="form.maritalStatus"></el-switch>
      </el-form-item>
      <el-form-item label="爱好">
        <el-checkbox-group v-model="form.hobby">
          <el-checkbox label="JavaScript" name="type" :value="1"></el-checkbox>
          <el-checkbox label="Java" name="type" :value="2"></el-checkbox>
          <el-checkbox label="League Of Legends" name="type" :value="3"></el-checkbox>
          <el-checkbox label="Cross Fire" name="type" :value="4"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="Male" :value="1"></el-radio>
          <el-radio label="Female" :value="2"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="个人介绍">
        <el-input type="textarea" v-model="form.introduceDesc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as Objects from "@/utils/Objects.js";
import * as HttpUtils from "@/utils/HttpUtils.js";
import moment from "moment";

export default {
  data() {
    return {
      form: {
        name: "",
        country: "",
        birthday: "",
        maritalStatus: false,
        hobby: [],
        sex: "",
        introduceDesc: ""
      }
    };
  },
  methods: {
    // 提交表单
    onSubmit() {
      //   this.form.birthday;

      console.log(this.form.birthday);
      console.log(moment(this.form.birthday).format("YYYY-MM-DD"));

      HttpUtils.post(
        {
          token: "abcdefg"
        },
        "http://localhost:8180/vue-study/add",
        this.form
      );
    }
  },
  created: function() {
    // Objects.isNull Test
    console.log("Empty str: " + Objects.isNull(""));
    console.log("null: " + Objects.isNull(null));
    console.log("undefined: " + Objects.isNull(undefined));
    console.log("0: " + Objects.isNull(0));
    console.log("false: " + Objects.isNull(false));

    console.log("Blank str: " + Objects.isNull("   "));
    console.log("[]: " + Objects.isNull([]));
    console.log("{}: " + Objects.isNull({}));
    console.log("function: " + Objects.isNull(function() {}));
  }
};
</script>

<style>
</style>