<template>
  <Scene name="intro">
    <SceneInputLabel>
      What is your name?
    </SceneInputLabel>

    <SceneInput name="name" @submit="name = $event" />

    <SceneLog>
      Hello <SceneText color="primary" :bounce="true">{{ name }}!</SceneText>
    </SceneLog>

    <SceneLog>
      It is a beautiful day!
    </SceneLog>
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../../engine/scenes/scene/log/SceneLog.vue';
import SceneText from '../../../engine/scenes/scene/text/SceneText.vue';
import SceneInputLabel from '../../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../../../engine/scenes/scene/input/SceneInput.vue';
import { ref } from 'vue';

const name = ref("");
</script>
