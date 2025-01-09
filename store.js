import { create } from "zustand";

const useStore = create((set) => ({
  utmData: {},
  setUtmData: (data) => set({ utmData: data }),
}));

export default useStore;
