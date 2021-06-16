<template>
  <el-container>
    <el-aside width="200px">
      <RouterList :routers="$router.options.routes" />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  height: calc(100vh - 120px);
  background-color: #e9eef3;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
