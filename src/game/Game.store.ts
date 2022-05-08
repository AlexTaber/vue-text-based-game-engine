import { useEngineStore } from "../engine/Engine.store";

const engineStore = useEngineStore();

export function useGameStore() {
  return {
    devMode: engineStore.devMode,
  };
}
