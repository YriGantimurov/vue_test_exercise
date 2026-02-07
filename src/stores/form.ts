import type { FormRecord } from '@/interfaces/form'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => {
    return {
      records: [] as FormRecord[],
    }
  },
  actions: {
    addRecord(record: FormRecord) {
      this.records.push(record)
    },
    addRecords(records: FormRecord[]) {
      records.forEach((record) => this.addRecord(record))
    },
    removeRecord(id: string) {
      this.records = this.records.filter((record) => record.id !== id)
    },
  },
})
