import { getCurrentInstance, inject, PropType, provide } from 'vue';
import type { RendererElement, VNode } from 'vue';
import { generateUUID } from '../../utils/generate-uuid';
import { getTextFromNode } from '../../utils/get-text-from-node';
import { useScenesStore } from '../state/scenes.store';
import { SceneStyle, SceneTextSpacing } from '../state/scene.model';

interface LogParams {
  defaultStyle?: SceneStyle;
  margin?: SceneTextSpacing;
};

export const logProps = {
  defaultStyle: {
    type: Object as PropType<SceneStyle>,
    default: undefined
  },
  margin: {
    type: Object as PropType<SceneTextSpacing>,
    default: undefined
  },
}

export function useLog(paramsInput?: LogParams) {
  const context = getCurrentInstance();

  const params = { ...paramsInput, ...context?.props };

  const sceneName = inject("sceneName") as string;

  const id = generateUUID();

  provide("logId", id);

  const { addLog, addTextItemToLog } = useScenesStore();

  addLog(sceneName, { id, textItems: [], margin: params.margin });

  setTextItems();

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
      style: { ...params?.defaultStyle },
    });
  }

  function setTextItemFromComponentNode(node: VNode) {
    addTextItemToLog(sceneName, id, {
      id: generateUUID(),
      content: getTextFromNode((node.children as RendererElement).default()[0]) || "",
      style: {
        ...params?.defaultStyle,
        ...node.props,
      },
    });
  }

  return id;
}
