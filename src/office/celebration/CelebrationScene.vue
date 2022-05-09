<template>
  <Scene name="celebration" @finish="setActive('engineeringTable')">
    <SceneLog>
      Rapturous applause explodes from the office!
    </SceneLog>

    <SceneLog color="secondary">
      You solved the case!
    </SceneLog>

    <SceneLog color="secondary">
      Nice one!
    </SceneLog>

    <SceneLog size="small" color="secondary">
      Is this going to hold up release?
    </SceneLog>

    <SceneLog color="secondary">
      Way to go!
    </SceneLog>

    <SceneLog color="secondary">
      I’m definitely taking a mental health day…
    </SceneLog>

    <SceneLog color="primary" :margin="{ top: 'large', bottom: 'large' }">
      …later that day…
    </SceneLog>

    <SceneLog>
      Despite the lingering smell of the dead body, the mood remains jubilant.
    </SceneLog>

    <SceneLog>
      More folks have trickled in throughout the day, keen to get a firsthand account of the morning’s excitement.
    </SceneLog>

    <SceneLog>
      Time to get back to work!
    </SceneLog>

    <SceneInputLabel speed="instant">
      Press 'Enter' to Continue...
    </SceneInputLabel>

    <SceneInput hide />
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import SceneInput from '../../engine/scenes/scene/input/SceneInput.vue';

const { setActive } = useScenesStore();
</script>
