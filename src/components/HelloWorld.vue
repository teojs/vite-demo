<template>
  <div class="helloworld">
    <h1>{{ msg }}</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="less">
.helloworld {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 40px;
  }
  p {
    width: 750px;
    font-size: 24px;
    text-align: center;
  }
}
</style>
