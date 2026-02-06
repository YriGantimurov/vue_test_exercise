<template>
  <div class="bg-neutral-100">
    <div class="w-1/2 mx-auto py-3 min-h-screen">
      <!-- Header -->
      <div class="flex gap-3 items-center">
        <p class="text-2xl text-neutral-950 font-medium">Учётные записи</p>
        <button
          class="border rounded-md cursor-pointer p-1"
          @click="
            addLocalRecord({
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
      <FormHint />
      <!-- Form -->
      <form
        @submit.prevent=""
        class="mt-3 grid grid-cols-[1fr_100px_1fr_1fr_min-content] items-center gap-1.5"
      >
        <!-- Form header -->
        <p class="text-xs text-neutral-600">Метки</p>
        <p class="text-xs text-neutral-600">Тип записи</p>
        <p class="text-xs text-neutral-600">Логин</p>
        <p class="text-xs text-neutral-600">Пароль</p>
        <p></p>

        <!-- Form records -->
        <template :key="record.id" v-for="(record, index) in localRecords">
          <FormRecord v-model="localRecords[index]" :removeLocalRecord="removeLocalRecord" />
        </template>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFormStore } from '@/stores/form'
import FormRecord from './FormRecord.vue'
import IconHOC from '@/components/IconHOC.vue'
import FormHint from '@/components/Form/FormHint.vue'
import createUUID from '@/utilities/createUUID'
import type { formRecordWithId } from '@/interfaces/form'

const formStore = useFormStore()
const localRecords = ref<formRecordWithId[]>([])
const addLocalRecord = (record: formRecordWithId) => {
  localRecords.value.push(record)
}
const removeLocalRecord = (id: string) => {
  localRecords.value = localRecords.value.filter((record) => record.id !== id)
}

localRecords.value = localRecords.value.concat(formStore.records)
</script>
