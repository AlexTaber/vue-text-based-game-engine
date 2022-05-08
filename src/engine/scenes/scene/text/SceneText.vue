<template></template>

<script setup lang="ts">
import type { SceneTextColor, SceneTextSize, SceneTextSpeed, ScenePauseLength } from '../../state/scene.model';

withDefaults(defineProps<{
  size?: SceneTextSize;
  color?: SceneTextColor;
  bounce?: boolean;
  glitch?: boolean;
  speed?: SceneTextSpeed;
  pause?: ScenePauseLength
}>(), { pause: "none"});
</script>
