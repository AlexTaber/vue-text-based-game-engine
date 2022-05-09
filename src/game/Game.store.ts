import { useStore } from "../engine/state/store";

const store = useStore("Game", {
  playerName: "Bob",
  petGunner: false,
});

export function useGameStore() {
  return {
    playerName: store.playerName,
    petGunner: store.petGunner,
  };
}
