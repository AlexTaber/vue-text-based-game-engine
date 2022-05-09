import { useStore } from "../engine/state/store";

const store = useStore("Game", {
  playerName: "Bob",
  petGunner: false,
  solvedMurder: false,
  incorrectAccusation: undefined as string | undefined,
});

export function useGameStore() {
  return {
    playerName: store.playerName,
    petGunner: store.petGunner,
    solvedMurder: store.solvedMurder,
    incorrectAccusation: store.incorrectAccusation,
  };
}
