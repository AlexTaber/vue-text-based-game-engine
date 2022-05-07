import { ID, useEntityStore } from "../../state/entity-store";
import { arrayAdd, arrayUpdateItemByProperty } from "../../state/utils";
import { Scene, SceneLog, SceneText } from "./scene.model";

const store = useEntityStore("Scenes", {
  entities: [] as Scene[],
}, { idKey: "name" });

export function useScenesStore() {
  const addLog = (sceneName: string, log: SceneLog) => {
    const scene = store.findById(sceneName);
    store.update(sceneName, { logs: arrayAdd(scene?.logs || [], log) });
  }

  const addTextItemToLog = (sceneName: string, logId: ID, item: SceneText) => {
    const currentLogs = store.findById(sceneName)?.logs || [];
    const log = currentLogs.find(l => l.id === logId);

    store.update(sceneName, {
      logs: arrayUpdateItemByProperty(currentLogs, "id", logId, { textItems: arrayAdd(log?.textItems || [], item)}),
    });
  }

  return {
    scenes: store.entities,
    active: store.active,
    setActive: store.setActive,
    add: store.add,
    findById: store.findById,
    addLog,
    addTextItemToLog,
  }
}
