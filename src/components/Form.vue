<template>
  <div class="flex bg-neutral-100">
    <div class="w-1/2 mx-auto min-h-screen py-3">
      <!-- Header -->
      <div class="flex gap-3 items-center">
        <p class="text-2xl text-neutral-950 font-medium">Учётные записи</p>
        <button>
          <IconHOC icon-filename="user-plus-icon.svg" size="4" color="fill-neutral-950 " />
        </button>
      </div>
      <!-- Form hint -->
      <div class="px-3 py-2 rounded-xl bg-neutral-200 flex items-center gap-1 mt-3">
        <IconHOC icon-filename="question-circle-icon.svg" size="3" color="fill-neutral-950 " />
        <p class="text-xs text-neutral-950">
          Для указания нескольких меток для одной пары логин/пароль используйте разделитель "<span
            class="font-bold"
            >;</span
          >"
        </p>
      </div>
      <!-- Form -->
      <div
        class="mt-3 grid grid-cols-[max-content_100px_auto_auto_min-content] items-center gap-1.5"
      >
        <!-- Form header -->
        <p class="text-xs text-neutral-600">Метки</p>
        <p class="text-xs text-neutral-600">Тип записи</p>
        <p class="text-xs text-neutral-600">Логин</p>
        <p class="text-xs text-neutral-600">Пароль</p>
        <p></p>
        <textarea
          rows="1"
          class="p-1.5 text-xs resize-none border border-neutral-200 rounded-md"
        ></textarea>
        <select class="text-xs border-neutral-200 rounded-md border h-full p-1.5">
          <option class="text-xs">LDAP</option>
          <option class="text-xs">Локальная</option>
        </select>
        <input class="text-xs p-1.5 border-neutral-200 rounded-md border" />
        <input class="text-xs p-1.5 border-neutral-200 rounded-md border" />
        <IconHOC icon-filename="trash-bin-icon.svg" size="4" color="fill-neutral-950 " />
        <textarea
          rows="1"
          class="p-1.5 text-xs resize-none border border-neutral-200 rounded-md"
        ></textarea>
        <select class="text-xs border-neutral-200 rounded-md border h-full p-1.5">
          <option class="text-xs">LDAP</option>
          <option class="text-xs">Локальная</option>
        </select>
        <input class="text-xs p-1.5 border-neutral-200 rounded-md border col-span-2" />
        <IconHOC icon-filename="trash-bin-icon.svg" size="4" color="fill-neutral-950 " />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconHOC from './IconHOC.vue'
</script>
