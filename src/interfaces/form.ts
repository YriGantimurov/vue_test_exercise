export type RecordType = 'Локальная' | 'LDAP'

export interface TagData {
  text: string
}

export interface FormRecord {
  tags: TagData[] | null
  recordType: RecordType
  login: string | null
  password: string | null
  id: string
}
