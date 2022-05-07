import { nextTick, watch } from "vue";
import type { SceneLog, SceneText } from "../scenes/state/scene.model";
import { useScenesStore } from "../scenes/state/scenes.store";
import { useEntityStore } from "../state/entity-store";
import type { ID } from "../state/entity-store";
import { delay } from "../utils/delay";
import { useLogTextItemsFactory } from "../scenes/scene/log/log-text-items.factory";

const store = useEntityStore("Console", {
  entities: [] as SceneLog[],
  activeItemId: undefined as ID | undefined,
  characterIndex: -1,
});

export function useConsoleStore() {
  const {
    active: activeScene,
    activeId: activeSceneId,
    setActive: setActiveScene,
  } = useScenesStore();

  watch(activeSceneId, onSetActive);

  const onLogSubmit = async () => {
    await nextTick();
    onNextLog();
  };

  function onSetActive() {
    if (activeScene.value) {
      store.patch({ entities: [] });
      onNextLog();
    }
  }

  function onNextLog() {
    const logs = activeScene.value?.logs || [];
    const nextLogIndex = logs.findIndex(l => l.id === store.active.value?.id) + 1;
    const nextLog = logs[nextLogIndex];
    nextLog ? setNextLog(nextLog) : endScene();
  }

  async function setNextLog(log: SceneLog) {
    await delay(400);
    store.add({ ...log, textItems: log.slot ? [] : undefined });
    store.setActive(log.id);

    if (log.slot) {
      const textItemsFactory = useLogTextItemsFactory(log);
      log.textItems = textItemsFactory.get();
      onNextTextItem(log);
    }
  }

  function onNextTextItem(log: SceneLog) {
    const nextItemIndex = log.textItems!.findIndex(i => i.id === store.$state.activeItemId) + 1;
    const nextItem = log.textItems![nextItemIndex];
    nextItem ? setNextTextItem(log, nextItem) : onNextLog();
  }

  function setNextTextItem(log: SceneLog, item: SceneText) {
    store.active.value?.textItems!.push({ ...item, content: "", });
    store.patch({ activeItemId: item.id, characterIndex: -1 });
    onNextCharacter(log, item);
  }

  function onNextCharacter(log: SceneLog, item: SceneText) {
    const nextChar = item.content[store.$state.characterIndex + 1];
    nextChar ? setNextChar(log, item, nextChar) : onNextTextItem(log);
  }

  async function setNextChar(log: SceneLog, item: SceneText, nextChar: string) {
    const activeItem = store.active.value?.textItems!.find(i => i.id === store.$state.activeItemId);
    activeItem!.content += nextChar;
    store.characterIndex.value ++;
    await delay(getTextSpeed(item));
    onNextCharacter(log, item);
  }

  function getTextSpeed(item: SceneText) {
    const map = {
      instant: 0,
      fast: 10,
      medium: 25,
      slow: 100,
    }

    return map[item.style.speed || "medium"];
  }

  function endScene() {
    setActiveScene(activeScene.value?.nextScene);
  }

  return {
    logs: store.entities,
    onLogSubmit,
  }
}
