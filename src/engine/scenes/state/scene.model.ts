import { ID } from "../../state/entity-store";

export interface Scene {
  name: string;
  logs: SceneLog[];
  nextScene?: string;
}

export interface SceneLog {
  id: ID;
  textItems: SceneText[];
}

export interface SceneText {
  id: ID;
  content: string;
  style: SceneStyle;
}

export interface SceneStyle {
  color?: SceneTextColor;
  bounce?: boolean;
}

export type SceneTextColor = "default" | "primary" | "secondary" | "info" | "danger";
