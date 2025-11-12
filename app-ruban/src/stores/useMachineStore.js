import { create } from "zustand";

const initialState = {
  tape: ["_", "_", "_", "_", "_", "_"],
  head: 0,
  mode: "MOVE",
};

export const useMachineStore = create((set) => ({
  ...initialState,
  step: () =>
    set((state) => ({
      head: state.head < state.tape.length ? state.head + 1 : state.head,
      mode: state.head < state.tape.length - 1 ? "MOVE" : "STOP",
      tape:
        state.head < state.tape.length
          ? state.tape.map((cell, index) => (index === state.head ? "1" : cell))
          : state.tape,
    })),
  reset: () => set((state) => ({ ...initialState })),
}));
