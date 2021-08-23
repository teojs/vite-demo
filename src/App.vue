<template>
  <router-view />
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.$router.isReady().then(() => {
      // App.vue在首次渲染会拿不到参数，可以用这个方式
      console.log(this.$route.query.test)
    })
  },
}
</script>

<style lang="less">
@import url('@/styles/index.less');
</style>
