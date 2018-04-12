<template>
  　　
  <el-menu router :default-active="$route.path" @select="" unique-opened background-color="#545c64" text-color="#fff"
           active-text-color="#ffd04b">
    　　　　
    <template v-for="(item , index) in routes" v-if="item.menuShow">
      　　
      <el-submenu :index="item.path" v-if="item.hasChild">
        <template slot="title">{{item.menuName}}</template>
        　　
        <el-menu-item v-for="(itemChild , index) in item.children" :index="itemChild.path" :key="index">
          　　{{itemChild.menuName}}
          　　
        </el-menu-item>
      </el-submenu>
      　　　　　　　
      <el-menu-item :index="item.path" v-else>
        {{item.menuName}}
        　　
      </el-menu-item>
      　　　　
    </template>
    　　
  </el-menu>
</template>
<script>
  export default {
    name: 'tpl',
    data() {
      return {
        routes: [
          {
            path: '/',
          },
          {
            path: '/staff',
            menuName: '员工/福粒',
            menuShow: true,
            hasChild: true,
            children: [
              {
                path: 'staffList',
                menuName: '员工列表'
              },
              {
                path: 'batchCreateStaff',
                menuName: '批量创建用户'
              },
              {
                path: 'batchGrantWelfare',
                menuName: '批量发放福粒'
              }
            ]
          },
          {
            path: '/commodity',
            menuName: '商品管理',
            menuShow: true,
            hasChild: true,
            children: [
              {
                path: 'commodityList',
                menuName: '商品列表'
              },
              {
                path: 'commodityClass',
                menuName: '商品分类',
              },
              {
                path: 'cityGroup',
                menuName: '城市群'
              },
              {
                path: 'supplier',
                menuName: '供应商'
              },
              {
                path: 'areaManage',
                menuName: '专区管理'
              }
            ]
          },
          {
            path: '/email',
            menuName: '邮件',
            menuShow: true,
            hasChild: false,
          },
          {
            path: '/system',
            menuName: '系统管理',
            menuShow: true,
            hasChild: true,
            children: [
              {
                path: 'personInfo',
                menuName: '个人资料'
              },
              {
                path: 'changePassword',
                menuName: '修改密码'
              },
              {
                path: 'adminList',
                menuName: '管理员列表'
              },
              {
                path: 'roleManage',
                menuName: '角色管理'
              },
              {
                path: 'adminRecharge',
                menuName: '管理员充值'
              },
              {
                path: 'rechargeHistory',
                menuName: '充值记录'
              }
            ]
          }
        ]
      }
    }
  }
</script>
