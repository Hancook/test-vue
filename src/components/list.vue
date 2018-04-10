<template>
  <div>
    {{data.list}}
  <el-table :data="data.slice((currentPage-1)*pagesize, currentPage*pagesize)"
   stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      align="center"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
            prop="date"
            align="center"
            label="日期"
            width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      label="内容"
      width="180">
    </el-table-column>
    <el-table-column
            prop="id"
            align="center"
            label="操作">
      <template slot-scope="scope">
       <router-link  :to=" 'edit/' + data[scope.$index].id">
          <el-button size="small">编辑</el-button>
        </router-link>
        <el-button
                size="small"
                type="danger"
                @click="deleteRow(scope.$index, data)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="5"
            layout="sizes, prev, pager, next"
            :page-sizes="[2, 5, 10, 20]"
            :total="data.length">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    handleSizeChange: function (size) {
      this.pagesize = size
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
    }
  },
  data () {
    return {
      currentPage: 1,
      pagesize: 5,
      data: [{
        id: '00',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '01',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '03',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '02',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        id: '00',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '01',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '03',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '02',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>
