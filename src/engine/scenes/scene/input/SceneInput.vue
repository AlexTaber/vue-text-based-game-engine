<template></template>

<script setup lang="ts">
import { inject, onUnmounted } from 'vue';
import { generateUUID } from '../../../utils/generate-uuid';
import { useScenesStore } from '../../state/scenes.store';

const props = withDefaults(defineProps<{
  condition?: boolean;
  hide?: boolean;
}>(), { condition: undefined });

const emit = defineEmits<{
  (e: "init"): void;
  (e: "submit", v: string): void;
}>();

const sceneName = inject("sceneName") as string;

const { addLog, removeLog } = useScenesStore();

const id = generateUUID();

addLog(sceneName, {
  id,
  type: "input",
  component: {
    emit,
    props,
  },
});

onUnmounted(() => removeLog(sceneName, id));
</script>
