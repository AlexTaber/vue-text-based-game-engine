<template>
  <slot v-bind="{ state }" />
</template>

<script setup lang="ts">
import { useScenesStore } from '../state/scenes.store';
import { onMounted, provide } from 'vue';

const props = defineProps<{
  name: string;
  nextScene?: string
}>();

const { active, add, setActive, findById } = useScenesStore();

add({ name: props.name, logs: [], nextScene: props.nextScene });

provide("sceneName", props.name);

const state = {};

onMounted(() => {
  console.log(findById(props.name));
  if (!active.value) setActive(props.name);
});
</script>
