<template>
  <!-- Tags input -->
  <textarea
    v-model="tagsInput"
    @blur="validateAndUpdateRecord()"
    maxlength="50"
    rows="1"
    :name="record.id + '-tags'"
    class="overflow-y-scroll scrollbar-hidden p-1.5 text-xs resize-none border rounded-md w-full border-neutral-200"
  ></textarea>

  <!-- Record type select -->
  <select
    v-model="record.recordType"
    @change="validateAndUpdateRecord()"
    :name="record.id + '-type'"
    class="text-xs border-neutral-200 rounded-md border h-full p-1.5"
  >
    <option value="LDAP" class="text-xs">LDAP</option>
    <option value="Локальная" class="text-xs">Локальная</option>
  </select>

  <!-- Login input -->
  <input
    v-model="record.login"
    @blur="validateAndUpdateRecord()"
    maxlength="100"
    :name="record.id + '-login'"
    :class="`text-xs p-1.5 rounded-md border w-full 
      ${record.recordType === 'LDAP' && 'col-span-2'} 
      ${recordValidity.login ? 'border-neutral-200' : 'border-red-300'}`"
  />

  <!-- Password input -->
  <PasswordInput
    v-model="record.password"
    class="w-full"
    :is-password-valid="recordValidity.password"
    :record-type="record.recordType"
    :record-id="record.id"
    :validate-and-update-record="validateAndUpdateRecord"
  />

  <!-- Delete button -->
  <button
    class="cursor-pointer"
    @click="
      () => {
        removeRecord(record.id)
        formStore.removeRecord(record.id)
        setFormData(formStore.records)
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
import type { FormRecord, TagData } from '@/interfaces/form'
import PasswordInput from './PasswordInput.vue'
import { setFormData } from '@/utilities/formLocalStorage'

defineProps<{
  removeRecord: (id: string) => void
}>()
const formStore = useFormStore()
const recordValidity = ref<RecordValidity>({
  login: true,
  password: true,
})
const record = defineModel<FormRecord>({ default: {} })
const tagsInput = ref<string | null>(null)

const validateRecord = () => {
  // validate login
  recordValidity.value.login = record.value.login !== null && record.value.login !== ''

  // validate password
  recordValidity.value.password =
    record.value.recordType === 'LDAP' ||
    (record.value.recordType === 'Локальная' &&
      record.value.password !== null &&
      record.value.password !== '')
}

const validateAndUpdateRecord = () => {
  validateRecord()
  formStore.removeRecord(record.value.id)
  if (recordValidity.value.password && recordValidity.value.login) {
    // Format data before saving
    const password = record.value.recordType === 'LDAP' ? null : record.value.password
    const tags = tagsToArray(tagsInput.value)

    // Save into pinia store
    formStore.addRecord({ ...record.value, tags, password })
  }
  // Sychronize pinia store and localStorage
  setFormData(formStore.records)
}

const tagsToString = (tags: TagData[] | null) => {
  if (tags === null) return null
  const array = tags.map((tag) => tag.text)
  return array.join('; ')
}

const tagsToArray = (tags: string | null) => {
  if (tags === null) return null
  const array: TagData[] = tags
    .split(';')
    .map((tag) => {
      const text = tag.trim()
      // Returns value only if text isn't empty
      if (text !== '')
        return {
          text: text,
        }
    })
    .filter((tag) => tag !== undefined)
  return array
}

tagsInput.value = tagsToString(record.value.tags)
</script>
