import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const count = createModel<RootModel>()({
  state: 0,
  reducers: {
    increment(state, payload: number) {
      return state + payload;
    },
  },
  effects: {
    
  }
});
