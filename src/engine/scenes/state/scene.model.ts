import { PropType } from "vue";
import { ID } from "../../state/entity-store";

export interface Scene {
  name: string;
  logs: SceneLog[];
  nextScene?: string;
}

export interface SceneLog {
  id: ID;
  textItems: SceneText[];
  margin?: SceneTextSpacing;
}

export interface SceneText {
  id: ID;
  content: string;
  style: SceneStyle;
}

export interface SceneStyle {
  size?: SceneTextSize;
  color?: SceneTextColor;
  bounce?: boolean;
  glitch?: boolean;
  speed?: SceneTextSpeed;
}

export interface SceneTextSpacing {
  top?: SceneTextSpacingSize;
  bottom?: SceneTextSpacingSize;
  left?: SceneTextSpacingSize;
  right?: SceneTextSpacingSize;
}

export type SceneTextSize = "xLarge" |"large" | "small" | "xSmall";

export type SceneTextSpacingSize = "large" | "small" | "none";

export type SceneTextSpeed = "instant" | "fast" | "slow";

export type SceneTextColor = "default" | "primary" | "secondary" | "info" | "danger";

export const textProps = {
  size: {
    type: String as PropType<SceneTextSize>,
    default: undefined
  },
  color: {
    type: String as PropType<SceneTextColor>,
    default: undefined
  },
  speed: {
    type: String as PropType<SceneTextSpeed>,
    default: undefined,
  },
  bounce: Boolean,
  glitch: Boolean,
}

export const logProps = {
  ...textProps,
  margin: {
    type: Object as PropType<SceneTextSpacing>,
    default: undefined
  },
}
