<template>
  <div class="flex gap-3 items-center">
    <p class="text-2xl text-neutral-950 font-medium">Учётные записи</p>
    <button
      class="border border-neutral-200 rounded-md cursor-pointer p-1 transition-colors hover:bg-neutral-200"
      @click="
        addRecord({
          tags: null,
          recordType: 'Локальная',
          login: null,
          password: null,
          id: createUUID(),
        })
      "
    >
      <IconHOC icon-filename="user-plus-icon.svg" size="4" color="fill-neutral-950 " />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { FormRecord } from '@/interfaces/form'
import createUUID from '@/utilities/createUUID'
import IconHOC from '../IconHOC.vue'

defineProps<{ addRecord: (record: FormRecord) => void }>()
</script>
