<template>
  <SceneLog :condition="condition">
    You run next door to Gotham Coffee and promptly hand over no less than $7.15 for a cup of joe.
  </SceneLog>

  <SceneLog :condition="condition" :link="link">
    Worth it.
  </SceneLog>
</template>

<script setup lang="ts">
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';

defineProps<{
  condition: boolean;
  link?: string;
}>();
</script>
