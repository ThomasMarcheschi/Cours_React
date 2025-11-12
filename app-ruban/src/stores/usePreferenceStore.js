import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePreferenceStore = create(
  persist(
    (set) => ({
      preference: "1",
      togglePreference: () =>
        set((state) => ({
          preference: state.preference === "1" ? "2" : "1",
        })),
    }),
    {
      name: "preference-storage", // nom sous lequel l'état sera sauvegardé (localStorage)
    }
  )
);
