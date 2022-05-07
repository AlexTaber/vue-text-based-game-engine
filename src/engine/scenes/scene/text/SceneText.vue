<template></template>

<script setup lang="ts">
import type { SceneTextColor } from '../../state/scene.model';

defineProps<{
  color?: SceneTextColor;
  bounce?: boolean;
}>()
</script>
