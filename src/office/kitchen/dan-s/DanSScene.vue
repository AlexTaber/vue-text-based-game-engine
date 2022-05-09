<template>
  <Scene name="danS" @finish="setPreviousScene">
    <SceneLog color="secondary">
      I cannot believe the VC is dead! I came into town to have dinner with him last night!
    </SceneLog>

    <SceneLog color="secondary">
      Wait. That sounds suspisicious.
    </SceneLog>

    <SceneLog color="secondary">
      Well it's <SceneText speed="slow" size="large" color="primary" :bounce="true">NOT</SceneText> suspicious.
    </SceneLog>

    <SceneLog color="secondary">
      I definitely didn't kill him! I was spending this morning recovering from jet lag after barely making it through a late night!
    </SceneLog>

    <SceneInputLabel speed="instant">
      Press 'Enter' to Continue...
    </SceneInputLabel>

    <SceneInput hide />
  </Scene>
</template>

<script setup lang="ts">
import { useScenesStore } from '../../../engine/scenes/state/scenes.store';
import Scene from '../../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../../../engine/scenes/scene/input/SceneInput.vue';
import SceneText from '../../../engine/scenes/scene/text/SceneText.vue';

const { setPreviousScene } = useScenesStore();
</script>
