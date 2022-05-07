<template></template>

<script setup lang="ts">
import { inject } from 'vue';
import { generateUUID } from '../../../utils/generate-uuid';
import { useScenesStore } from '../../state/scenes.store';

const emit = defineEmits<{
  (e: "submit", v: string): void;
}>();

const sceneName = inject("sceneName") as string;

const { addLog } = useScenesStore();

addLog(sceneName, { id: generateUUID(), type: "input", emit });
</script>