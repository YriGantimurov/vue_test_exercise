import type { FormRecord } from '@/interfaces/form'

const getFormData = (): FormRecord[] => {
  return JSON.parse(localStorage.getItem('formData') ?? '')
}

const setFormData = (formData: FormRecord[]) => {
  return localStorage.setItem('formData', JSON.stringify(formData))
}

export { getFormData, setFormData }
