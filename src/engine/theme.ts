import { SceneTextColor } from "./scenes/state/scene.model";
import { useStore } from "./state/store";

export type Theme = Record<SceneTextColor, string>;

const store = useStore("Theme", {
  theme: {
    default: "white",
    primary: "#ea36af",
    secondary: "blue",
    danger: "red",
    info: "yellow",
  } as Theme,
});

export function useTheme() {
  const getColor = (key: SceneTextColor | undefined) =>
    store.$state.theme[key || "default"];

  return {
    theme: store.theme,
    setTheme: store.setter("theme"),
    getColor,
  }
}
