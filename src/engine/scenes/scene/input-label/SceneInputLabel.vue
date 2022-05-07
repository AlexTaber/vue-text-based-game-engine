<template></template>

<script setup lang="ts">
import { logProps, useLog } from '../use-log';

defineProps(logProps);

useLog({ defaultStyle: { color: "info" } });
</script>
