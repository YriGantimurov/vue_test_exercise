<template>
  <div class="bg-neutral-100">
    <div class="w-1/2 mx-auto py-3 min-h-screen">
      <FormHeader :add-record="addRecord" />
      <FormHint />
      <!-- Form -->
      <form
        @submit.prevent=""
        class="mt-3 grid grid-cols-[1fr_100px_1fr_1fr_min-content] items-center gap-1.5"
      >
        <!-- Form table header -->
        <p class="text-xs text-neutral-600">Метки</p>
        <p class="text-xs text-neutral-600">Тип записи</p>
        <p class="text-xs text-neutral-600">Логин</p>
        <p class="text-xs text-neutral-600">Пароль</p>
        <p></p>

        <!-- Form records -->
        <template :key="record.id" v-for="(record, index) in records">
          <formRecord v-model="records[index]" :removeRecord="removeRecord" />
        </template>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useFormStore } from '@/stores/form'
import formRecord from './FormRecord.vue'
import FormHint from '@/components/Form/FormHint.vue'
import type { FormRecord } from '@/interfaces/form'
import { getFormData } from '@/utilities/formLocalStorage'
import FormHeader from './FormHeader.vue'

const formStore = useFormStore()
const records = ref<FormRecord[]>([])

const addRecord = (record: FormRecord) => {
  records.value.push(record)
}
const removeRecord = (id: string) => {
  records.value = records.value.filter((record) => record.id !== id)
}

onMounted(() => {
  formStore.addRecords(getFormData())
  records.value = records.value.concat(formStore.records)
})
</script>
