<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  routeInfo: {
    meta: {
      title: '首页',
    },
    sort: 1,
  },
}
</script>
