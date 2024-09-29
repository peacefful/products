import { type TFilterValues } from '../model'

export const FILTER_VALUES: TFilterValues[] = [
  { id: 1, title: 'По популярности', value: 'byPopularity' },
  { id: 2, title: 'Сначала подешевле', value: 'beforeCheaper' },
  { id: 3, title: 'Сначала подороже', value: 'beforeMoreExpensive' },
  { id: 4, title: 'Сначала новое', value: 'beforeNew' },
  { id: 5, title: 'По алфавиту', value: 'byAlphabet' }
]
