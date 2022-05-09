<template></template>

<script setup lang="ts">
import { logProps } from '../../state/scene.model';
import { useLog } from '../log/use-log';

defineProps(logProps);

defineEmits<{
  (e: "init"): void,
}>();

useLog();
</script>
