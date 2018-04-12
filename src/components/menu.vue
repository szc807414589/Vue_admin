<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">

        <menudemo :routes="routes"></menudemo>

      </el-col>
    </el-row>

  </div>
</template>

<script>

  export default {
    name: 'tpl',
    data() {
      return {
        routes: [
          {
            'id': '1',
            'menuName': '基础管理',
            'path': '1',
            'show':false,
            'children': [
              {
                'menuName': '用户管理',
                'path': 'home',
                'children': []
              },
              {
                'menuName': '角色管理',
                'path': '1-2',
                'children': [
                  {
                    'menuName': '管理员',
                    'path': '1-2-1',
                    'children': []
                  },
                  {
                    'menuName': 'CEO',
                    'path': '1-2-2',
                    'children': []
                  },
                  {
                    'menuName': 'CFO',
                    'path': '1-2-3',
                    'children': []
                  },
                  {
                    'menuName': 'COO',
                    'path': '1-2-4',
                    'children': []
                  },
                  {
                    'menuName': '普通人',
                    'path': '1-2-5',
                    'children': []
                  }
                ]
              },
              {
                'menuName': '权限管理',
                'path': 'feedback',
                'children': []
              }
            ]
          },
          {
            'id': '2',
            'menuName': '商品管理',
            'path': '20',
            "children": []
          },
          {
            'id': '3',
            'menuName': '订单管理',
            'path': '30',
            'children': [
              {
                'menuName': '订单列表',
                'path': '30-1',
                'children': []
              },
              {
                'menuName': '退货列表2',
                'path': '30-2',
                'children': []
              }
            ]
          },
          {
            'id': '4',
            'menuName': '商家管理',
            'path': 'two',
            'children': []
          }
        ],
        opend: false
      }
    },
    created() {

    },
    methods: {},
    components: {
      menudemo: {
        name: 'children',
        template:
          `<el-menu class="el-menu-vertical-demo" default-active="20"
                    router :default-active="$route.path" unique-opened>

            <template v-for="(item,index) in routes">

              <el-submenu v-if="item.children && item.children.length > 0" :index="item.path">

                <template slot="title">
                  {{item.menuName}}
                </template>

                <!--<el-menu-item v-for="( child , index ) in item.children || []" :key="index" :index="child.path">
                  {{child.menuName}}
                </el-menu-item>-->

                <children :routes = 'item.children'></children>

              </el-submenu>


              <el-menu-item v-else :index="item.path">
                <span slot="title">{{item.menuName}}</span>
              </el-menu-item>

            </template>

          </el-menu>
          `,
        props: ['routes'],
        data() {
          return {}
        }
      }
    }
  }
</script>
<style>
  .tac .el-menu--inline .el-menu-item{
    padding-left: 45px!important;
 }
</style>
