<template>
  <Scene name="title" next-scene="intro">
    <SceneMessage>
      <SceneText :glitch="true" speed="instant">
        Welcome to Night of a Thousand Dans
      </SceneText>
    </SceneMessage>

    <SceneMessage :margin="{ bottom: 'none' }">
      Off By One Entertainment TM. All rights reserved
    </SceneMessage>

    <SceneMessage>
      Newline
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
import SceneText from '../../../engine/scenes/scene/text/SceneText.vue';
</script>
