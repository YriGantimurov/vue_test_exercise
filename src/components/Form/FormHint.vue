<template>
  <div
    class="px-3 py-2 rounded-xl bg-neutral-200 grid grid-cols-[min-content_auto] items-center gap-1 mt-3"
  >
    <IconHOC icon-filename="question-circle-icon.svg" size="4" color="fill-neutral-950 " />
    <p class="text-xs text-neutral-950">
      Для указания нескольких меток для одной пары логин/пароль используйте разделитель "<span
        class="font-bold"
        >;</span
      >"
    </p>
  </div>
</template>

<script setup lang="ts">
import IconHOC from '@/components/IconHOC.vue'
</script>
