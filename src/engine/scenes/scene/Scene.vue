<template>
  <slot v-bind="{ state: scene?.state }" />
</template>

<script setup lang="ts">
import { useScenesStore } from '../state/scenes.store';
import { computed, onMounted, provide } from 'vue';

const props = defineProps<{
  name: string;
  nextScene?: string
}>();

const { active, add, setActive, findById } = useScenesStore();

add({ name: props.name, state: {}, logs: [], nextScene: props.nextScene });

provide("sceneName", props.name);

const scene = computed(() => findById(props.name));

onMounted(() => {
  console.log(scene.value);
  if (!active.value) setActive(props.name);
});
</script>
