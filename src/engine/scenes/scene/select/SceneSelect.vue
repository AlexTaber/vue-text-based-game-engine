<template>
  <slot />
</template>

<script setup lang="ts">
import { inject, onUnmounted, provide } from 'vue';
import { generateUUID } from '../../../utils/generate-uuid';
import { useScenesStore } from '../../state/scenes.store';

const props = withDefaults(defineProps<{
  condition?: boolean;
}>(), { condition: undefined });

const emit = defineEmits<{
  (e: "init"): void;
  (e: "submit", v: string): void;
}>();

const sceneName = inject("sceneName") as string;

const id = generateUUID();
provide("logId", id);

const { addLog, removeLog } = useScenesStore();

addLog(sceneName, {
  id,
  type: "select",
  component: {
    emit,
    props,
  },
});

onUnmounted(() => removeLog(sceneName, id));
</script>
