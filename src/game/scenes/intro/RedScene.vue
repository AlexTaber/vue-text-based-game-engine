<template>
  <Scene name="red" next-scene="intro">
    <SceneLog>
      This is the Red SCENE!
    </SceneLog>
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../../engine/scenes/scene/log/SceneLog.vue';
</script>
