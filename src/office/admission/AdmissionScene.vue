<template>
  <Scene name="admission" @finish="setActive('credits')">
    <SceneLog color="secondary">
      OK FINE. YOU GOT ME.
    </SceneLog>

    <SceneLog color="secondary">
      I DID IT! AND YOU KNOW WHY?
    </SceneLog>

    <SceneLog color="secondary">
      THAT PUNK STOLE MY ART ASSETS FOR SOME GAME COMPANY THAT HE OWNS!
    </SceneLog>

    <SceneLog color="secondary">
      Why does this keep happening to me?!
    </SceneLog>

    <SceneLog color="secondary">
      I regret nothing, he deserved it.
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
