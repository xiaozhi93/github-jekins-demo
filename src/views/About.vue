<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-table-new :data="tableData" style="width: 100%">
      <el-table-column-new prop="date" label="日期" width="180">
      </el-table-column-new>
      <el-table-column-new prop="name" label="姓名" width="180">
      </el-table-column-new>
      <el-table-column-new prop="address" label="地址"> </el-table-column-new>
    </el-table-new>
  </div>
</template>
<script>
import ElTableNew from "@/components/table/src/table.vue";
import ElTableColumnNew from "@/components/table/src/table-column";
export default {
  components: {
    ElTableNew,
    ElTableColumnNew,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>
