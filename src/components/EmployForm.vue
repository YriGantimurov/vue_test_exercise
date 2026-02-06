<template>
  <div class="bg-neutral-100">
    <div class="w-1/2 mx-auto py-3 min-h-screen">
      <!-- Header -->
      <div class="flex gap-3 items-center">
        <p class="text-2xl text-neutral-950 font-medium">Учётные записи</p>
        <button
          class="cursor-pointer"
          @click="
            formStore.addRecord({
              tags: null,
              recordType: 'Локальная',
              login: null,
              password: null,
            })
          "
        >
          <IconHOC icon-filename="user-plus-icon.svg" size="4" color="fill-neutral-950 " />
        </button>
      </div>
      <!-- Form hint -->
      <div
        class="px-3 py-2 rounded-xl bg-neutral-200 grid grid-cols-[min-content_auto] items-center gap-1 mt-3"
      >
        <IconHOC icon-filename="question-circle-icon.svg" size="3" color="fill-neutral-950 " />
        <p class="text-xs text-neutral-950">
          Для указания нескольких меток для одной пары логин/пароль используйте разделитель "<span
            class="font-bold"
            >;</span
          >"
        </p>
      </div>
      <!-- Form -->
      <div class="mt-3 grid grid-cols-[1fr_100px_1fr_1fr_min-content] items-center gap-1.5">
        <!-- Form header -->
        <p class="text-xs text-neutral-600">Метки</p>
        <p class="text-xs text-neutral-600">Тип записи</p>
        <p class="text-xs text-neutral-600">Логин</p>
        <p class="text-xs text-neutral-600">Пароль</p>
        <p></p>

        <FormRecord :key="record.id" v-for="record in formStore.records" :record="record" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormRecord from './FormRecord.vue'
import IconHOC from './IconHOC.vue'
import { useFormStore } from '@/stores/form'

const formStore = useFormStore()
</script>
