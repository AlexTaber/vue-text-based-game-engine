<template></template>

<script setup lang="ts">
import { inject } from 'vue';
import { generateUUID } from '../../../utils/generate-uuid';
import { useScenesStore } from '../../state/scenes.store';

const props = withDefaults(defineProps<{
  if?: boolean;
}>(), { if: undefined });

const emit = defineEmits<{
  (e: "submit", v: string): void;
}>();

const sceneName = inject("sceneName") as string;

const { addLog } = useScenesStore();

addLog(sceneName, {
  id: generateUUID(),
  type: "input",
  component: {
    emit,
    props: props as { if: boolean },
  },
});
</script>
