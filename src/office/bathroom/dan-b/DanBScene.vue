<template>
  <Scene name="danB" @finish="setPreviousScene">
    <SceneLog color="secondary">
      Terrible news about the dead guy.
    </SceneLog>

    <SceneLog color="secondary" speed="slow">
      Anyway...
    </SceneLog>

    <SceneLog color="secondary">
      Do you want to hear my latest recording I finished this morning?
    </SceneLog>

    <SceneLog color="secondary">
      I've been awake for 37 hours straight recording it.
    </SceneLog>

    <SceneLog color="secondary">
      What? No I don’t need coffee. I <SceneText color="primary" size="large" :bounce="true">AM</SceneText> the coffee.
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
