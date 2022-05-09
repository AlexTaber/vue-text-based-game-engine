<template>
  <Scene name="danielE" @finish="setPreviousScene">
    <SceneLog color="secondary">
      Let me tell you about my morning.
    </SceneLog>

    <SceneLog color="secondary">
      I met up with Dee to determine which is faster way to get to work, my <SceneText :bounce="true">mountain bike</SceneText> or his <SceneText :bounce="true">motorcycle</SceneText>.
    </SceneLog>

    <SceneLog color="secondary">
      It was a very close race but in the end I proved my bike is <SceneText color="danger">faster</SceneText> and more <SceneText color="primary">efficient</SceneText>.
    </SceneLog>

    <SceneLog color="secondary">
      Or... maybe maybe it was just my Dad Strength?
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
