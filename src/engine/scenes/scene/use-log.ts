import { getCurrentInstance, inject, provide } from 'vue';
import type { RendererElement, VNode } from 'vue';
import { generateUUID } from '../../utils/generate-uuid';
import { getTextFromNode } from '../../utils/get-text-from-node';
import { useScenesStore } from '../state/scenes.store';
import { SceneStyle, SceneTextColor } from '../state/scene.model';

interface LogParams {
  defaultStyle?: SceneStyle;
}

export function useLog(params?: LogParams) {
  const context = getCurrentInstance();

  const sceneName = inject("sceneName") as string;

  const id = generateUUID();

  provide("logId", id);

  const { addLog, addTextItemToLog } = useScenesStore();

  addLog(sceneName, { id, textItems: [] });

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
      style: {
        color: params?.defaultStyle?.color,
        bounce: params?.defaultStyle?.bounce,
      },
    });
  }

  function setTextItemFromComponentNode(node: VNode) {
    addTextItemToLog(sceneName, id, {
      id: generateUUID(),
      content: getTextFromNode((node.children as RendererElement).default()[0]) || "",
      style: {
        color: node.props?.color as SceneTextColor | undefined || params?.defaultStyle?.color,
        bounce: node.props?.bounce || params?.defaultStyle?.bounce,
      },
    });
  }

  return id;
}
