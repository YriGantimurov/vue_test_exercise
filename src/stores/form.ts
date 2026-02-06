import type { formRecord, formRecordWithId } from '@/interfaces/form'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('player', {
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
    addRecord(record: formRecord) {
      const newRecord = { ...record, id: crypto.randomUUID() }
      this.records.push(newRecord)
    },
    removeRecord(id: string) {
      this.records = this.records.filter((record) => record.id !== id)
    },
  },
})
