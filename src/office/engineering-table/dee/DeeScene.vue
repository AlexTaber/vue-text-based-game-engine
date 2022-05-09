<template>
  <Scene name="dee" @finish="setPreviousScene">
    <SceneLog color="secondary">
      So tragic to hear what happened. I can't believe one of the Dans would do something like that.
    </SceneLog>

    <SceneLog color="secondary">
      Wait, am I under investigation too? No one even calls me Dan!
    </SceneLog>

    <SceneLog color="secondary">
      Also, I was having a race with Daniel E to determine the preeminent 2-wheeled vehicle! Obviously, <SceneText :bounce="true">motorcycles</SceneText> are best.
    </SceneLog>

    <SceneLog color="secondary">
      Who won? Oh umm… I mean, <SceneText color="primary" size="large">DEFINITELY</SceneText> me.
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
