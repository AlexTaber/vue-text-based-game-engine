<template>
  <SceneLog :margin="{ left: 'large' }">
    <SceneText color="secondary">8:21 AM - #coreteam: </SceneText>

    <SceneText color="primary">{{ slack.name }} - </SceneText>

    <SceneText>
      {{ slack.message }}
    </SceneText>
  </SceneLog>
</template>

<script setup lang="ts">
import SceneText from '../../engine/scenes/scene/text/SceneText.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';

defineProps<{
  slack: { name: string, message: string }
}>()
</script>
