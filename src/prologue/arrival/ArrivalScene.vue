<template>
  <Scene name="arrival" @finish="setActive('engineeringTable')">
    <SceneLog color="primary" :margin="{ top: 'large', bottom: 'large' }">
      ...a short while later...
    </SceneLog>

    <SceneLog>
      Folks have begun to trickle into the office. The body is getting stinky.
    </SceneLog>

    <SceneLog>
      Jacks and Lauren arrive. Joy arrives too.
    </SceneLog>

    <SceneLog>
      Also, it looks like the Dans are all here... Dan B., Dan S., Dan 'Dee' Ansong, Dan E, Dan I...
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

const { setActive } = useScenesStore();
</script>
