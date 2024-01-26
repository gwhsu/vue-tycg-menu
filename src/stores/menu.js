import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menu: null,
    showFullVideo: false,
  }),
})
