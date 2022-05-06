import { useEntityStore } from "src/engine/state/entity-store";
import { Scene } from "./scene.model";

const store = useEntityStore("Scenes", {
  entities: [] as Scene[],
});

export function useScenesStore() {
  return {
    scenes: store.entities,
    actve: store.active,
    setActive: store.setActive,
  }
}
