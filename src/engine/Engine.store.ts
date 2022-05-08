import { useStore } from "./state/store";

const store = useStore("Engine", {
  devMode: false,
});

export const useEngineStore = () => store;
