<template>
  <div>
    <el-row>

      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-input
            placeholder="请输入内容"
            v-model="UserId"
            clearable>
          </el-input>
        </div>
      </el-col>

      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <el-date-picker
            v-model="TimeValue"
            type="datetimerange"
            align="right"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="TimeValue">
          </el-date-picker>
        </div>
      </el-col>


      <el-col :span="2" :offset="10">
        <div class="grid-content bg-purple-light">
          <el-button @click="submitForm" type="primary">search</el-button>
        </div>
      </el-col>

    </el-row>


    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="Id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="Account"
        label="账号">
      </el-table-column>
      <el-table-column
        prop="UserName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="Content"
        label="平台">
      </el-table-column>
      <el-table-column
        prop="CreateTime"
        label="时间">
      </el-table-column>
    </el-table>

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

  </div>


</template>
<script>
  import Vue from 'vue'
  import moment from 'moment'
  import {getFeedBackRecord} from '../api/api'

  export default {
    data() {
      return {
        loading2: true,
        //表格数据
        tableData: [],
        //表格总页数
        tableTotals: 0,
        //接口
        UserId: '',
        //默认每页数据量
        Limit: 20,
        Offset: 0,
        //默认高亮行数据id
        highlightId: -1,
        //查询的页码
        page: 1,
        //当前页码
        currentPage: 1,

        TimeValue: [this.global.MomentSubtract3Days, this.global.MomentNow]


      }
    },
    methods: {
      //获取数据
      submitForm() {
        var me = this;
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });

        getFeedBackRecord({
          'UserId': Number(me.UserId) || 0,
          'BeginTime': me.FormaTime(me.TimeValue[0]),
          'EndTime': me.FormaTime(me.TimeValue[1]),
          'Limit': me.Limit,
          'Offset': me.Offset
        })
        .then(function (res) {
          loading.close();
          me.tableData = res.data.Rows;
          me.tableTotals = res.data.Total;
        })
        .catch(function (err) {
          loading.close()
        })
      },
      changeSize() {
        this._data.tpageSize = this.pageSize;
      },
      handleSizeChange(size) { //一页多少条
        console.log(this);
        this.Limit = size;
        this.Offset = size * (this.currentPage - 1) || 0;
        this.submitForm();
      },
      handleCurrentChange(currentPage) { //页数
        this.Offset = this.Limit * (currentPage - 1) || 0
        this.submitForm();
      },
      selectionChange(selections) {
        this.$emit("selectionChange", selections);
      },
      searchclick() {//点击搜索

      }
    },
    beforeMount() {
      this.submitForm();
    }

  }

</script>

<style scoped>

</style>
