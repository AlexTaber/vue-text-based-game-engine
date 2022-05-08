<template>
  <Scene name="coffee" @finish="setPreviousScene">
    <SceneLog>
      You run next door to Gotham Coffee and promptly hand over no less than $7.15 for a cup of joe.
    </SceneLog>

    <SceneLog>
      Worth it.
    </SceneLog>

    <SceneInputLabel speed="instant">
      Press 'Enter' to Continue...
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

const { setPreviousScene } = useScenesStore();
</script>
