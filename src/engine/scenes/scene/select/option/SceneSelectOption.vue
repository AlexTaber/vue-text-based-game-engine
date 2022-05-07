<template></template>

<script setup lang="ts">
import { getCurrentInstance, inject } from 'vue';
import { ID } from '../../../../state/entity-store';
import { generateUUID } from '../../../../utils/generate-uuid';
import { getTextFromNode } from '../../../../utils/get-text-from-node';
import { useScenesStore } from '../../../state/scenes.store';

const component = getCurrentInstance();

const props = defineProps<{ value: string }>();

const sceneName = inject<string>("sceneName");
const logId = inject<ID>("logId");

const { addLogOption } = useScenesStore();

addLogOption(sceneName!, logId!, {
  id: generateUUID(),
  value: props.value,
  content: getTextFromNode(component!.slots.default!()[0]) || "",
});
</script>
