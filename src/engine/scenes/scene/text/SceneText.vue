<template></template>

<script setup lang="ts">
import type { SceneTextColor, SceneTextSize, SceneTextSpeed } from '../../state/scene.model';

defineProps<{
  size?: SceneTextSize;
  color?: SceneTextColor;
  bounce?: boolean;
  glitch?: boolean;
  speed?: SceneTextSpeed;
}>()
</script>
