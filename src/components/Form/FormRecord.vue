<template>
  <!-- Tags input -->
  <textarea
    v-model="localRecord.tags"
    @blur="validateAndUpdateRecord()"
    rows="1"
    class="overflow-y-scroll scrollbar-hidden p-1.5 text-xs resize-none border rounded-md w-full border-neutral-200"
  ></textarea>

  <!-- Record type select -->
  <select
    v-model="localRecord.recordType"
    @change="validateAndUpdateRecord()"
    class="text-xs border-neutral-200 rounded-md border h-full p-1.5"
  >
    <option value="LDAP" class="text-xs">LDAP</option>
    <option value="Локальная" class="text-xs">Локальная</option>
  </select>

  <!-- Login input -->
  <input
    v-model="localRecord.login"
    @blur="validateAndUpdateRecord()"
    :class="`text-xs p-1.5 rounded-md border w-full 
      ${localRecord.recordType === 'LDAP' && 'col-span-2'} 
      ${recordValidity.login ? 'border-neutral-200' : 'border-red-300'}`"
  />

  <!-- Password input -->
  <PasswordInput
    v-model="localRecord.password"
    class="w-full"
    :is-password-valid="recordValidity.password"
    :local-record="localRecord"
    :validate-and-update-record="validateAndUpdateRecord"
  />

  <!-- Delete button -->
  <button
    class="cursor-pointer"
    @click="
      () => {
        removeLocalRecord(localRecord.id)
        formStore.removeRecord(localRecord.id)
      }
    "
  >
    <IconHOC icon-filename="trash-bin-icon.svg" size="4" color="fill-neutral-950 " />
  </button>
</template>

<script setup lang="ts">
interface RecordValidity {
  login: boolean
  password: boolean
}
import { ref } from 'vue'
import { useFormStore } from '@/stores/form'
import IconHOC from '@/components/IconHOC.vue'
import type { formRecordWithId } from '@/interfaces/form'
import PasswordInput from './PasswordInput.vue'

defineProps<{
  removeLocalRecord: (id: string) => void
}>()
const formStore = useFormStore()
const recordValidity = ref<RecordValidity>({
  login: true,
  password: true,
})
const localRecord = defineModel<formRecordWithId>({ default: {} })

const validateRecord = () => {
  recordValidity.value.login = localRecord.value.login !== null && localRecord.value.login !== ''
  recordValidity.value.password =
    localRecord.value.recordType === 'LDAP' ||
    (localRecord.value.recordType === 'Локальная' &&
      localRecord.value.password !== null &&
      localRecord.value.password !== '')
}

const validateAndUpdateRecord = () => {
  validateRecord()
  formStore.removeRecord(localRecord.value.id)
  if (recordValidity.value.password && recordValidity.value.login) {
    // Format data before saving
    const password = localRecord.value.recordType === 'LDAP' ? null : localRecord.value.password
    const tags = localRecord.value.tags === '' ? null : localRecord.value.tags
    formStore.addRecord({ ...localRecord.value, tags, password })
  }
}
</script>
