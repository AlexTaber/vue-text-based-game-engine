<template>
  <slot />
</template>

<script setup lang="ts">
import { useScenesStore } from '../state/scenes.store';
import { onMounted, provide } from 'vue';

const props = defineProps<{
  name: string;
}>();

const emit = defineEmits<{
  (e: "finish"): void;
}>();

const { active, add, setActive } = useScenesStore();

add({ name: props.name, logs: [], emit });

provide("sceneName", props.name);

onMounted(() => {
  if (!active.value) setActive(props.name);
});
</script>
