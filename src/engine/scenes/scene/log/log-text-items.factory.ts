import { RendererElement, VNode } from "vue";
import { generateUUID } from "../../../utils/generate-uuid";
import { getTextFromNode } from "../../../utils/get-text-from-node";
import { SceneLog, SceneText } from "../../state/scene.model";

export function useLogTextItemsFactory(log: SceneLog) {
  function get(): SceneText[] {
    const nodes = log.slot?.() || [];

    return nodes.map(
      node => typeof node.children === "string" ? getTextItemFromTextNode(node) : getTextItemFromComponentNode(node)
    );
  }

  function getTextItemFromTextNode(node: VNode) {
    return {
      id: generateUUID(),
      content: getTextFromNode(node) || "",
      style: log.style || {},
    };
  }

  function getTextItemFromComponentNode(node: VNode) {
    return {
      id: generateUUID(),
      content: getTextFromNode((node.children as RendererElement).default()[0]) || "",
      style: {
        ...log.style,
        ...node.props,
      },
    };
  }

  return {
    get
  };
}
