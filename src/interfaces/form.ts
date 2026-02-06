export interface formRecord {
  tags: string | null
  recordType: 'Локальная' | 'LDAP'
  login: string | null
  password: string | null
}

export interface formRecordWithId extends formRecord {
  id: string
}
