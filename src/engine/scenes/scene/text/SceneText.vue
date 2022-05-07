<template></template>

<script setup lang="ts">
import type { SceneTextColor, SceneTextSpeed } from '../../state/scene.model';

defineProps<{
  color?: SceneTextColor;
  bounce?: boolean;
  glitch?: boolean;
  speed?: SceneTextSpeed;
}>()
</script>
