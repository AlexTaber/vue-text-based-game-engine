import { getCurrentInstance, inject, provide } from 'vue';
import type { RendererElement, VNode } from 'vue';
import { generateUUID } from '../../utils/generate-uuid';
import { getTextFromNode } from '../../utils/get-text-from-node';
import { useScenesStore } from '../state/scenes.store';
import { SceneStyle, SceneTextSpacing } from '../state/scene.model';

interface LogParams extends SceneStyle {
  margin?: SceneTextSpacing;
};

export function useLog(paramsInput?: LogParams) {
  const context = getCurrentInstance();

  const params = getParams();

  const sceneName = inject("sceneName") as string;

  const id = generateUUID();

  provide("logId", id);

  const { addLog, addTextItemToLog } = useScenesStore();

  addLog(sceneName, { id, textItems: [], type: "log", margin: params.margin });

  setTextItems();

  function getParams() {
    const props = { ...context?.props };
    Object.keys(props).forEach(key => props[key] === undefined ? delete props[key] : {});
    return { ...paramsInput, ...props };
  }

  function setTextItems() {
    const nodes = context?.slots.default?.() || [];

    nodes.forEach(
      node => typeof node.children === "string" ? setTextItemFromTextNode(node) : setTextItemFromComponentNode(node)
    );
  }

  function setTextItemFromTextNode(node: VNode) {
    addTextItemToLog(sceneName, id, {
      id: generateUUID(),
      content: getTextFromNode(node) || "",
      style: { ...params },
    });
  }

  function setTextItemFromComponentNode(node: VNode) {
    addTextItemToLog(sceneName, id, {
      id: generateUUID(),
      content: getTextFromNode((node.children as RendererElement).default()[0]) || "",
      style: {
        ...params,
        ...node.props,
      },
    });
  }

  return id;
}
