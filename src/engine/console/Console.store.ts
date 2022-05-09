import { nextTick, watch } from "vue";
import type { SceneLog, SceneText } from "../scenes/state/scene.model";
import { useScenesStore } from "../scenes/state/scenes.store";
import { useEntityStore } from "../state/entity-store";
import type { ID } from "../state/entity-store";
import { delay } from "../utils/delay";
import { useLogTextItemsFactory } from "../scenes/scene/log/log-text-items.factory";
import { useEngineStore } from "../Engine.store";

const store = useEntityStore("Console", {
  entities: [] as SceneLog[],
  activeItemId: undefined as ID | undefined,
  characterIndex: -1,
});

export function useConsoleStore() {
  const {
    active: activeScene,
    activeId: activeSceneId,
  } = useScenesStore();

  const { devMode } = useEngineStore();

  let lastItem: SceneText | undefined = undefined;

  watch(activeSceneId, onSetActive);

  const onLogSubmit = async () => {
    onNextLog();
  };

  async function onSetActive() {
    await nextTick();

    if (activeScene.value) {
      store.patch({ entities: [] });
      onNextLog();
    }
  }

  function onNextLog() {
    const logs = activeScene.value?.logs || [];
    const nextLogIndex = getNextLogIndex(logs);
    const nextLog = logs[nextLogIndex];
    nextLog ? setNextLog(nextLog) : endScene();
  }

  function getNextLogIndex(logs: SceneLog[]) {
    if (store.active.value?.link && store.active.value?.component.props.if !== false) {
      return logs.findIndex(l => l.id === store.active.value?.link);
    } else {
      return logs.findIndex(l => l.id === store.active.value?.id) + 1;
    }
  }

  function setNextLog(log: SceneLog) {
    store.add({ ...log, textItems: log.type === "log" ? [] : undefined });
    store.setActive(log.id);

    if (log.component.props.if === false) {
      onNextLog();
    } else if (log.type === "log") {
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

  async function setNextTextItem(log: SceneLog, item: SceneText) {
    await delay(getPauseLength(lastItem));

    store.active.value?.textItems!.push({ ...item, content: "", });
    store.patch({ activeItemId: item.id, characterIndex: -1 });
    lastItem = item;
    onNextCharacter(log, item);
  }

  function onNextCharacter(log: SceneLog, item: SceneText) {
    const nextChar = item.content[store.$state.characterIndex + 1];
    nextChar ? setNextChar(log, item, nextChar) : onNextTextItem(log);
  }

  async function setNextChar(log: SceneLog, item: SceneText, nextChar: string) {
    const activeItem = store.active.value?.textItems!.find(i => i.id === store.$state.activeItemId);
    const speed = getTextSpeed(item);
    if (speed === 0) {
      activeItem!.content = item.content;
      store.$state.characterIndex = item.content.length - 1;
      onNextCharacter(log, item);
    } else {
      activeItem!.content += nextChar;
      store.characterIndex.value ++;
      await delay(speed);
      onNextCharacter(log, item);
    }
  }

  function getTextSpeed(item: SceneText) {
    const map = {
      instant: 0,
      fast: 10,
      medium: 20,
      slow: 300,
    }

    const speed = devMode.value ? "instant" : item.style.speed;
    return map[speed || "medium"];
  }

  function getPauseLength(item: SceneText | undefined) {
    const map = {
      long: 1000,
      medium: 400,
      short: 100,
      none: 0,
    }

    const pause = devMode.value ? "none" : item?.style.pause;
    return map[pause || "medium"];
  }

  function endScene() {
    activeScene.value?.emit("finish");
  }

  return {
    logs: store.entities,
    onLogSubmit,
  }
}
