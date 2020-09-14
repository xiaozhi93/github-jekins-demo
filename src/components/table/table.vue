<template>
  <div class="el-table-pro">
    <el-table style="width: 100%" v-bind="$attrs" :border="border" @current-change="onChange">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    1111
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// import { Table, TableColumn } from "element-ui";
export default {
  name: "pm-table-pro",
  inheritAttrs: false,
  // components: {
  //   [Table.name]: Table,
  //   [TableColumn.name]: TableColumn,
  // },
  props: {
    border: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    };
  },
  created() {
    console.log(this.$attrs)
  },
  methods: {
    onChange(currentRow, oldCurrentRow) {
      this.$emit('onChange', currentRow, oldCurrentRow);
    },
  },
};
</script>
<style>
.el-table-pro {
  padding: 30px;
}
</style>