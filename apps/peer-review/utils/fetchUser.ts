import { ReviewAssignment } from '../app/pr/[pr]/page'

export interface User {
  affiliation: Affiliation
  authId?: any
  authString?: any
  billingAddress?: any
  biography?: any
  country?: any
  dateLastLogin: string
  dateRegistered: string
  dateValidated?: any
  disabled: boolean
  disabledReason?: any
  email: string
  familyName: Affiliation
  fullName: string
  givenName: Affiliation
  gossip?: any
  groups: Group[]
  id: number
  interests: Interest[]
  mailingAddress?: any
  mustChangePassword: boolean
  orcid: string
  phone?: any
  signature?: any
  url?: any
  userName: string
}

interface Interest {
  id: number
  interest: string
}

interface Group {
  id: number
  name: Name
  abbrev: Name
  roleId: number
  showTitle: boolean
  permitSelfRegistration: boolean
  permitMetadataEdit: boolean
  recommendOnly: boolean
}

interface Name {
  ar_IQ: string
  ca_ES: string
  cs_CZ: string
  da_DK: string
  de_DE: string
  en_US: string
  es_ES: string
  eu_ES: string
  fa_IR: string
  fi_FI: string
  fr_CA: string
  fr_FR: string
  hi_IN: string
  hr_HR: string
  hu_HU: string
  id_ID: string
  it_IT: string
  ku_IQ: string
  nb_NO: string
  nl_NL: string
  pl_PL: string
  pt_BR: string
  pt_PT: string
  ro_RO: string
  ru_RU: string
  sl_SI: string
  'sr_RS@cyrillic': string
  'sr_RS@latin': string
  sv_SE: string
  tr_TR: string
  uk_UA: string
  vi_VN: string
  zh_CN: string
}

interface Affiliation {
  en_US: string
}

export async function fetchUser({ user }: { user: ReviewAssignment['reviewerId'] }) {
  const res = await fetch(`${process.env.OJS_URL}/users/${user}?apiToken=${process.env.OJS_TOKEN}`)
  return await res.json()
}
