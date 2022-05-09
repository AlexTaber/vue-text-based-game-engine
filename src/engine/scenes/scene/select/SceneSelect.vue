<template>
  <slot />
</template>

<script setup lang="ts">
import { inject, onUnmounted, provide } from 'vue';
import { generateUUID } from '../../../utils/generate-uuid';
import { useScenesStore } from '../../state/scenes.store';

const props = withDefaults(defineProps<{
  if?: boolean;
}>(), { if: undefined });

const emit = defineEmits<{
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
    props: props as { if: boolean },
  },
});

onUnmounted(() => removeLog(sceneName, id));
</script>
