<template>
  <el-icon @click="handleCollapse"><Fold v-show="store.isCollapse"/><Expand v-show="store.isCollapse === false"/></el-icon>
</template>

<script lang="ts" setup>
import { useAlertsStore } from '@/store/index'
import { Expand, Fold } from '@element-plus/icons'
const store = useAlertsStore()

const handleCollapse = () => {
  store.chageCollapse()
}
</script>

<style lang="scss" scoped></style>
