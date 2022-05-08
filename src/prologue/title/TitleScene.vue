<template>
  <Scene name="title" @finish="setActive('createCharacter')">
    <SceneLog size="large">
      Night of a
    </SceneLog>

    <SceneLog
      size="xLarge"
      speed="slow"
      :glitch="true"
      :margin="{ bottom: 'large' }"
    >
      THOUSAND DANS
    </SceneLog>

    <SceneLog>
      Off By One Entertainment TM. All rights reserved.
    </SceneLog>

    <SceneInputLabel speed="instant">
      Press 'Enter' to Begin...
    </SceneInputLabel>

    <SceneInput />
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../../engine/scenes/scene/input/SceneInput.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';

const { setActive } = useScenesStore();
</script>
