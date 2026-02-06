import type { formRecord, formRecordWithId } from '@/interfaces/form'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => {
    return {
      records: [
        {
          tags: '2',
          recordType: 'Локальная',
          login: '2',
          password: null,
          id: crypto.randomUUID(),
        },
      ] as formRecordWithId[],
    }
  },
  actions: {
    addRecord(record: formRecordWithId) {
      this.records.push(record)
    },
    removeRecord(id: string) {
      this.records = this.records.filter((record) => record.id !== id)
    },
  },
})
