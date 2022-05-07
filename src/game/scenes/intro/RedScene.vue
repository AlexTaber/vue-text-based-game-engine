<template>
  <Scene name="red" @finish="setActive('intro')">
    <SceneLog>
      This is the RED SCENE!
    </SceneLog>

    <SceneInputLabel>
      Press Enter to Continue...
    </SceneInputLabel>

    <SceneInput />
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../../engine/scenes/scene/log/SceneLog.vue';
import { useScenesStore } from '../../../engine/scenes/state/scenes.store';
import SceneInputLabel from '../../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../../../engine/scenes/scene/input/SceneInput.vue';

const { setActive } = useScenesStore();
</script>
