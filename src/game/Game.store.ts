import { useStore } from "../engine/state/store";

const store = useStore("Game", {
  playerName: "Bob",
  petGunner: false,
  solvedMurder: false,
  incorrectAccusation: undefined as string | undefined,
  danIInteractions: 0,
});

export const useGameStore = () => store;
