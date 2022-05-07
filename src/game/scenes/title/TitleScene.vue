<template>
  <Scene name="title" next-scene="intro">
    <SceneMessage :default-style="{ size: 'large' }">
      Night of a
    </SceneMessage>

    <SceneMessage
      :default-style="{
        glitch: true,
        speed: 'slow',
        size: 'xLarge',
      }"
      :margin="{ bottom: 'large' }"
    >
      THOUSAND DANS
    </SceneMessage>

    <SceneMessage>
      Off By One Entertainment TM. All rights reserved
    </SceneMessage>

    <SceneInputLabel>
      Press 'Enter' to Begin...
    </SceneInputLabel>

    <SceneInput />
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../../engine/scenes/scene/Scene.vue';
import SceneMessage from '../../../engine/scenes/scene/message/SceneMessage.vue';
import SceneInputLabel from '../../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../../../engine/scenes/scene/input/SceneInput.vue';
</script>
