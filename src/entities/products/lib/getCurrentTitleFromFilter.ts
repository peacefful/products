import type { TFilter, TFilterValues } from '../model'

export const getCurrentTitleFromFilter = (filter: TFilter): TFilterValues | undefined => {
  return filter.filterValues.find((filterValue) => filterValue.value === filter.currentValue)
}
