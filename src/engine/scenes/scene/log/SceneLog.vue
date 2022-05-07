<template></template>

<script setup lang="ts">
import { logProps } from '../../state/scene.model';
import { useLog } from '../use-log';

defineProps(logProps);

useLog();
</script>
