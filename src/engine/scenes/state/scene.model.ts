import { ID } from "src/engine/state/entity-store";

export interface Scene {
  id: ID;
  items: SceneItem[];
}

export interface SceneItem {
  id: ID;
}
