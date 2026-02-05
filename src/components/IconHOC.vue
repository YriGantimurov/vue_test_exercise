<template>
  <svg :height="pxSize" :width="pxSize" :class="color">
    <use :width="pxSize" :height="pxSize" :href="`/assets/icons/${iconFilename}`"></use>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconFilename: string
  size: number | string
  color?: string
}>()

const pxSize = Number(props.size) * 4
</script>
