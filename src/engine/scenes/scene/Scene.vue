<template>
  <slot v-if="activeId === name" />
</template>

<script setup lang="ts">
import { useScenesStore } from '../state/scenes.store';
import { onMounted, onUnmounted, provide } from 'vue';

const props = defineProps<{
  name: string;
}>();

const emit = defineEmits<{
  (e: "finish"): void;
}>();

const { activeId, active, add, setActive, remove } = useScenesStore();

add({ name: props.name, logs: [], emit });

provide("sceneName", props.name);

onMounted(() => {
  if (!active.value) setActive(props.name);
});

onUnmounted(() => remove(props.name));
</script>
