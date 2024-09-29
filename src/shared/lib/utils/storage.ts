export const storage = {
  getData: (name: string) => {
    return localStorage.getItem(name)
  },
  setData: (key: string, value: string) => {
    localStorage.setItem(key, value)
  },
  clearData: () => {
    localStorage.clear()
  }
}
