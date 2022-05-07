<template>
  <Scene name="title" next-scene="intro">
    <SceneMessage>
      Welcome to Night of a Thousand Dans
    </SceneMessage>

    <SceneMessage>
      Off By One Entertainment TM. All rights reserved.
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
