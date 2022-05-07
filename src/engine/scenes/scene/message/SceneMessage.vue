<template></template>

<script setup lang="ts">
import { useLog, logProps } from '../use-log';

defineProps(logProps);

useLog();
</script>
