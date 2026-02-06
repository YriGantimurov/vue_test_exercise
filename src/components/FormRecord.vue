<template>
  <textarea
    v-model="localRecord.tags"
    rows="1"
    class="overflow-y-scroll scrollbar-hidden p-1.5 text-xs resize-none border border-neutral-200 rounded-md w-full"
  ></textarea>
  <select
    v-model="localRecord.recordType"
    class="text-xs border-neutral-200 rounded-md border h-full p-1.5"
  >
    <option value="LDAP" class="text-xs">LDAP</option>
    <option value="Локальная" class="text-xs">Локальная</option>
  </select>

  <input
    v-model="localRecord.login"
    :class="`text-xs p-1.5 border-neutral-200 rounded-md border w-full ${record.recordType === 'LDAP' && 'col-span-2'}`"
  />
  <input
    v-if="record.recordType === 'Локальная'"
    v-model="localRecord.password"
    class="text-xs p-1.5 border-neutral-200 rounded-md border w-full"
  />
  <button class="cursor-pointer" @click="formStore.removeRecord(record.id)">
    <IconHOC icon-filename="trash-bin-icon.svg" size="4" color="fill-neutral-950 " />
  </button>
</template>

<script setup lang="ts">
import type { formRecordWithId } from '@/interfaces/form'
import IconHOC from './IconHOC.vue'
import { useFormStore } from '@/stores/form'

const { record } = defineProps<{
  record: formRecordWithId
}>()
const formStore = useFormStore()
const localRecord = formStore.records.find(
  (storeRecord) => storeRecord.id === record.id,
) as formRecordWithId
</script>
