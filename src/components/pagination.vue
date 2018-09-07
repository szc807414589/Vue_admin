<template>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20, 50, 100, 200]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableTotals">
      </el-pagination>
    </div>
</template>
<script>

  export default {
    name: 'pagination',
    data() {
      return {
        //表格总页数
        tableTotals: 0,
        //默认每页数据量
        Limit: 20,
        Offset: 0,
        //默认高亮行数据id
        highlightId: -1,
        //查询的页码
        page: 1,
        //当前页码
        currentPage: 1,
      }
    },
    created() {

    },
    methods: {
      changeSize() {
        this._data.tpageSize = this.pageSize;
      },
      handleSizeChange(size) { //一页多少条
        console.log(this);
        this.Limit = size;
        this.Offset = size * (this.currentPage - 1) || 0;
        //        this.submitForm();
        this.$emit('submitForm')
      },
      handleCurrentChange(currentPage) { //页数
        this.Offset = this.Limit * (currentPage - 1) || 0
        //        this.submitForm();
        this.$emit('submitForm')
      },
      selectionChange(selections) {
        this.$emit("selectionChange", selections);
      },
      searchclick() {//点击搜索

      }
    }
  }
</script>
<style scoped>

</style>
