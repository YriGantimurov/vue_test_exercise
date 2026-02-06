<template>
  <div
    v-if="localRecord.recordType === 'Локальная'"
    :class="`flex rounded-md border w-full pr-1.5
      ${isPasswordValid ? 'border-neutral-200' : 'border-red-300'}`"
  >
    <input
      v-model="passwordModel"
      @blur="validateAndUpdateRecord()"
      :type="isPasswordVisible ? 'text' : 'password'"
      class="text-xs p-1.5 w-full"
    />
    <button @click="isPasswordVisible = !isPasswordVisible" class="cursor-pointer">
      <IconHOC
        :icon-filename="`${isPasswordVisible ? 'eye-icon.svg' : 'eye-closed-icon.svg'}`"
        size="4"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { formRecordWithId } from '@/interfaces/form'
import { ref } from 'vue'
import IconHOC from '../IconHOC.vue'

const { isPasswordValid, localRecord, validateAndUpdateRecord } = defineProps<{
  isPasswordValid: boolean
  localRecord: formRecordWithId
  validateAndUpdateRecord: () => void
}>()
const passwordModel = defineModel()
const isPasswordVisible = ref<boolean>(false)
</script>
