<template>
  <el-form
    :model="dynamicValidateForm"
    ref="dynamicValidateForm"
    label-width="100px"
    class="demo-dynamic"
  >
    <el-form-item
      prop="email"
      label="邮箱"
      :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
    >
      <el-input v-model="dynamicValidateForm.email" style="width:270px;margin-right:10px"></el-input>
    </el-form-item>
    <el-form-item label="域名设置">
    <el-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :label="'域名' + index"
      :key="domain.key"
      :prop="'domains.' + index + '.value'"
      :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
    >
      <el-input v-model="domain.value" style="width:270px;margin-right:10px"></el-input>
      <el-button @click.prevent="removeDomain(domain)">删除</el-button>
    </el-form-item>
    </el-form-item>
    <el-form-item prop="domains"></el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="submitForm('dynamicValidateForm')"
      >提交</el-button>
      <el-button @click="addDomain">新增域名</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ],
        email: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      // 不能在表单项设置prop,比如label="域名设置" prop="domain",否则会报错
      // 因为数组重置了，没有值，新增的元素项就找不到了，报错
      // 数组中新增的后校验和重置，数组都重置了，后校验的数组项都没有校验报错，所以重置数组项的值，不能重置数组及不能设置数组的prop
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    }
  }
};
</script>