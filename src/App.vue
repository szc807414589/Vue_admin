<template>
  <div id="app">

    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>

  </div>

</template>

<script>
  import Vue from 'vue'
  import header from 'components/header.vue'
  import menu from 'components/menu.vue'

  export default {
    name: 'app',
    data: function () {
      return {

      }
    },
  }
</script>

<style>

</style>

