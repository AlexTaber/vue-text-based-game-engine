import { RendererElement, VNode } from "vue";
import { generateUUID } from "../../../utils/generate-uuid";
import { getTextFromNode } from "../../../utils/get-text-from-node";
import { SceneLog, ScenePauseLength, SceneText } from "../../state/scene.model";

export function useLogTextItemsFactory(log: SceneLog) {
  function get(): SceneText[] {
    const nodes = log.component.slot?.() || [];

    return nodes.map(
      (node, index) => typeof node.children === "string"
        ? getTextItemFromTextNode(node, index === nodes.length - 1)
        : getTextItemFromComponentNode(node, index === nodes.length - 1)
    );
  }

  function getTextItemFromTextNode(node: VNode, isLast: boolean) {
    return {
      id: generateUUID(),
      content: getTextFromNode(node) || "",
      style: {
        pause: (isLast ? "medium" : "none") as ScenePauseLength,
        ...log.style
      },
    };
  }

  function getTextItemFromComponentNode(node: VNode, isLast: boolean) {
    return {
      id: generateUUID(),
      content: getTextFromNode((node.children as RendererElement).default()[0]) || "",
      style: {
        pause: (isLast ? "medium" : "none") as ScenePauseLength,
        ...log.style,
        ...node.props,
      },
    };
  }

  return {
    get
  };
}
