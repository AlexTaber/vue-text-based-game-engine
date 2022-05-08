import { useEngineStore } from "../engine/Engine.store";
import { useStore } from "../engine/state/store";

const engineStore = useEngineStore();

const store = useStore("Game", {
  playerName: "Bob",
});

export function useGameStore() {
  return {
    devMode: engineStore.devMode,
    playerName: store.playerName,
  };
}
