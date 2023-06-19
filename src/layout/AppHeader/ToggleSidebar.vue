<template>
  <i
    :class="collapseIcon"
    @click="handleCollapse"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const collapseIcon = computed(() => {
  return 'el-icon-s-fold'
})

const handleCollapse = () => {
}
</script>

<style lang="scss" scoped></style>
