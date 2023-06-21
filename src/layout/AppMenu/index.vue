<template>
  <el-menu
    :unique-opened="false"
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bcc0c5"
    active-text-color="#2d8cf0"
    :collapse="store.isCollapse"
    router>
    <el-menu-item index="/">
      <el-icon><location /></el-icon>
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="products">
      <template #title>
        <el-icon><location /></el-icon>
        项目
      </template>
      <el-menu-item index="/products/product_list">
        <template #title>
          项目列表
        </template>
      </el-menu-item>
      <el-menu-item index="/products/product_classify">
        <template #title>
          项目分类
        </template>
      </el-menu-item>
      <el-menu-item index="/products/product_reply">
        <template #title>
          项目评论
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { useAlertsStore } from '@/store/index'
const store = useAlertsStore()
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
