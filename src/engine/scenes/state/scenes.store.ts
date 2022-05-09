import { computed } from "vue";
import { ID, useEntityStore } from "../../state/entity-store";
import { arrayAdd, arrayLast, arrayRemoveItemByProperty, arrayUpdateItemByProperty } from "../../state/utils";
import { Scene, SceneLog, SceneSelectOption } from "./scene.model";

const store = useEntityStore("Scenes", {
  entities: [] as Scene[],
  history: [] as string[],
}, { idKey: "name", debug: true });

export function useScenesStore() {
  const activeId = computed(() => store.active.value?.name);

  const setActive = (name: string) => {
    store.history.value.push(name);
    store.setActive(name);
  };

  const setPreviousScene = () => {
    store.history.value.pop();
    store.setActive(arrayLast(store.history.value));
  }

  const addLog = (sceneName: string, log: SceneLog) => {
    const scene = store.findById(sceneName);
    store.update(sceneName, { logs: arrayAdd(scene?.logs || [], log) });
  }

  const removeLog = (sceneName: string, logId: ID) => {
    const scene = store.findById(sceneName);
    store.update(sceneName, { logs: arrayRemoveItemByProperty(scene?.logs || [], "id", logId) });
  }

  const addLogOption = (sceneName: string, logId: ID, option: SceneSelectOption) => {
    const currentLogs = store.findById(sceneName)?.logs || [];
    const log = currentLogs.find(l => l.id === logId);

    store.update(sceneName, {
      logs: arrayUpdateItemByProperty(currentLogs, "id", logId, { options: arrayAdd(log?.options || [], option) }),
    });
  }

  return {
    scenes: store.entities,
    active: store.active,
    activeId,
    add: store.add,
    remove: store.remove,
    findById: store.findById,
    setPreviousScene,
    setActive,
    addLog,
    addLogOption,
    removeLog,
  }
}
