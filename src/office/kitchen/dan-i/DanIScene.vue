<template>
  <Scene name="danI" @finish="setPreviousScene">
    <SceneLog color="secondary">
      What was I doing this morning?
    </SceneLog>

    <SceneLog color="secondary">
      Umm.. stargazing?
    </SceneLog>

    <SceneLog color="secondary">
      Wait… it's the morning. Erm.. NOT stargazing, but something else!
    </SceneLog>

    <SceneLog color="secondary">
      I don't know, why are you bothering me?! Go away!
    </SceneLog>

    <SceneInputLabel speed="instant">
      Press 'Enter' to Continue...
    </SceneInputLabel>

    <SceneInput />
  </Scene>
</template>

<script setup lang="ts">
import { useScenesStore } from '../../../engine/scenes/state/scenes.store';
import Scene from '../../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../../../engine/scenes/scene/input/SceneInput.vue';

const { setPreviousScene } = useScenesStore();
</script>
