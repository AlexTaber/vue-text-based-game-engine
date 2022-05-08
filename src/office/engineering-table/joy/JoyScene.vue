<template>
  <Scene name="joy" @finish="setPreviousScene">
    <SceneLog color="secondary">
      Did you know that the Dans were buying out equity in RippleMatch?
    </SceneLog>

    <SceneLog color="secondary">
      We should have seen this coming. Why else would they keep hiring all these Dans?!
    </SceneLog>

    <SceneLog color="secondary">
      It's a coup!
    </SceneLog>

    <SceneLog color="secondary">
      Do you think they all killed the VC together? Wouldn't surprise me.
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
