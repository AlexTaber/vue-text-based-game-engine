import { SceneTextColor } from "./scenes/state/scene.model";
import { useStore } from "./state/store";

export type Theme = Record<SceneTextColor, string>;

const store = useStore("Theme", {
  theme: {
    default: "white",
    primary: "magenta",
    secondary: "cyan",
    danger: "red",
    info: "yellow",
    success: "lime",
    muted: "darkgray",
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
