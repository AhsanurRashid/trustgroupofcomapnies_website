import { create } from 'zustand'

const useScrollSectionStore = create((set) => ({
  sectionName: '',
  
  setSectionName: (sectionName) => set(() => ({
    sectionName: sectionName
  }))
}))