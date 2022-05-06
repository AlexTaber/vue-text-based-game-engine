/* eslint-disable @typescript-eslint/no-explicit-any */
import { MockEntityStore } from "./legacy/__mocks__/mock-entity-store";
import { MockStore } from "./legacy/__mocks__/mock-store";
import { registry } from "./legacy/__mocks__/registry";

export const useMockStore = <T = any>(name: string) => {
  return registry[name as keyof typeof registry] as MockStore<T>;
};

export const useMockEntityStore = <T = any, S = any>(name: string) => {
  return registry[name as keyof typeof registry] as MockEntityStore<T, S>;
};
