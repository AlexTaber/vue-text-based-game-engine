import { getCurrentInstance, inject, provide, ComponentInternalInstance, computed } from 'vue';
import { generateUUID } from '../../../utils/generate-uuid';
import { useScenesStore } from '../../state/scenes.store';
import { SceneStyle, SceneTextSpacing } from '../../state/scene.model';

interface LogParams extends SceneStyle {
  margin?: SceneTextSpacing;
  link?: string;
};

export function useLog(paramsInput?: LogParams) {
  const component = getCurrentInstance();

  const params = getParams();

  const sceneName = inject("sceneName") as string;

  const id = component?.props.id as string || generateUUID();

  provide("logId", id);

  const { addLog } = useScenesStore();

  addLog(sceneName, {
    id,
    component: {
      slot: component!.slots.default,
      emit: component!.emit,
      props: component!.props as { if: boolean },
    },
    textItems: [],
    type: "log",
    style: params,
    margin: params.margin,
    link: params.link,
  });

  function getParams() {
    const props = { ...component?.props };
    Object.keys(props).forEach(key => props[key] === undefined ? delete props[key] : {});
    return { ...paramsInput, ...props };
  }

  return id;
}
