<template></template>

<script setup lang="ts">
import { getCurrentInstance, inject, provide } from 'vue';
import type { RendererElement, VNode } from 'vue';
import { generateUUID } from '../../../utils/generate-uuid';
import { getTextFromNode } from '../../../utils/get-text-from-node';
import { useScenesStore } from '../../state/scenes.store';

const sceneName = inject("sceneName") as string;

const id = generateUUID();

provide("logId", id);

const { addLog, addTextItemToLog } = useScenesStore();

addLog(sceneName, { id, textItems: [] });

setTextItems();

function setTextItems() {
  const context = getCurrentInstance();
  const nodes = context?.slots.default?.() || [];

  nodes.forEach(
    node => typeof node.children === "string" ? setTextItemFromTextNode(node) : setTextItemFromComponentNode(node)
  );
}

function setTextItemFromTextNode(node: VNode) {
  addTextItemToLog(sceneName, id, {
    id: generateUUID(),
    content: getTextFromNode(node) || "",
  });
}

function setTextItemFromComponentNode(node: VNode) {
  addTextItemToLog(sceneName, id, {
    id: generateUUID(),
    content: getTextFromNode((node.children as RendererElement).default()[0]) || "",
  });
}
</script>
