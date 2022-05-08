import { PropType, Slot } from "vue";
import { ID } from "../../state/entity-store";

export interface Scene {
  name: string;
  logs: SceneLog[];
  emit: (e: "finish") => void;
}

export interface SceneLog {
  id: ID;
  type: SceneLogType;
  component: {
    slot?: Slot,
    emit?: (e: "submit", v: string) => void,
    props: { if: boolean },
  },
  textItems?: SceneText[];
  options?: SceneSelectOption[];
  style?: SceneStyle;
  margin?: SceneTextSpacing;
  link?: string;
}

export type SceneLogType = "log" | "input" | "select";

export interface SceneText {
  id: ID;
  content: string;
  style: SceneStyle;
}

export interface SceneSelectOption {
  id: ID;
  value: string;
  content: string;
}

export interface SceneStyle {
  size?: SceneTextSize;
  color?: SceneTextColor;
  bounce?: boolean;
  glitch?: boolean;
  speed?: SceneTextSpeed;
  pause?: ScenePauseLength;
}

export interface SceneTextSpacing {
  top?: SceneTextSpacingSize;
  bottom?: SceneTextSpacingSize;
  left?: SceneTextSpacingSize;
  right?: SceneTextSpacingSize;
}

export type SceneTextSize = "xLarge" |"large" | "small" | "xSmall";

export type SceneTextSpacingSize = "large" | "small" | "none";

export type SceneTextSpeed = "instant" | "fast" | "medium" | "slow";

export type ScenePauseLength = "long" | "medium" | "short" | "none";

export type SceneTextColor = "default" | "primary" | "secondary" | "info" | "success" | "danger" | "muted";

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
  pause: {
    type: String as PropType<ScenePauseLength>,
    default: undefined,
  },
  bounce: Boolean,
  glitch: Boolean,
  if: Boolean,
}

export const logProps = {
  ...textProps,
  id: {
    type: String,
    default: undefined,
  },
  margin: {
    type: Object as PropType<SceneTextSpacing>,
    default: undefined
  },
  link: {
    type: String,
    default: undefined,
  },
  if: {
    type: Boolean,
    default: undefined,
  },
}
