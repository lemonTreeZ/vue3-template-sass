<template>
  <h1>商品列表</h1>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.demo-table-expand {
  font-size: 0;
  :deep(label) {
    width: 90px;
    color: #99a9bf;
  }
  :deep(.el-form-item) {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
}

</style>
