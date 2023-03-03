<template>
  <div id="app">
    <Menu v-show="routesString != '/login'" />
    <router-view />
  </div>
</template>
<script>
import Menu from './components/Menu.vue';
export default {
  data() {
    // 路由
    return {
      routesString: "/login"
    }
  },
  mounted() {
    // 获取当前路由
    this.routesString = this.$route.path;
    console.log(this.routesString)
  },
  components: { Menu }
}
</script>
<style lang="scss">
#app {
  display: flex
}

@import './animation.css';
@import './index.css';
</style>
