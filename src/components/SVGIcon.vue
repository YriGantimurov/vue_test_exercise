<template>
  <svg :height="pxSize" :width="pxSize" :class="color">
    <!-- Trying to find icon on public folder -->
    <use :width="pxSize" :height="pxSize" :href="`${assetsFolderPath}/${iconFilename}`"></use>
  </svg>
</template>

<script setup lang="ts">
import ifImageExists from '@/utilities/ifImageExists'
import { onMounted } from 'vue'

const { iconFilename, size } = defineProps<{
  iconFilename: string
  size: number | string
  color?: string
}>()

const assetsFolderPath = '/assets/icons'

const pxSize = Number(size) * 4
onMounted(() => {
  // Console warning if file isn't exists
  ifImageExists(`http://localhost:5173/${assetsFolderPath}/${iconFilename}`).then((exists) => {
    if (!exists)
      console.warn(`File not found or not image: public${assetsFolderPath}/${iconFilename}`)
  })
})
</script>
