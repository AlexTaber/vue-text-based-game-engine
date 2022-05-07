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

export type SceneTextSpacingSize = "large" | "small" | "none";

export type SceneTextSpeed = "instant" | "fast" | "slow";

export type SceneTextColor = "default" | "primary" | "secondary" | "info" | "danger";

export interface LogParams {
  defaultStyle?: SceneStyle;
  margin?: SceneTextSpacing;
}
