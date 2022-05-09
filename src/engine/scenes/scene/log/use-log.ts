import { getCurrentInstance, inject, provide, onBeforeUnmount } from 'vue';
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

  const { addLog, removeLog } = useScenesStore();

  addLog(sceneName, {
    id,
    component: {
      slot: component!.slots.default,
      emit: component!.emit,
      props: component!.props,
    },
    textItems: [],
    type: "log",
    style: params,
    margin: params.margin,
    link: params.link,
  });

  onBeforeUnmount(() => removeLog(sceneName, id));

  function getParams() {
    const props = { ...component?.props };
    Object.keys(props).forEach(key => props[key] === undefined ? delete props[key] : {});
    return { ...paramsInput, ...props };
  }

  return id;
}
