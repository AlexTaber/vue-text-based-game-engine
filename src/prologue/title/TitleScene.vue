<template>
  <Scene name="title">
    <SceneLog>
      Off By One Entertainment(TM) Presents
    </SceneLog>

    <SceneLog size="large">
      <SceneText speed="instant" pause="medium">Night </SceneText>

      <SceneText speed="instant" pause="medium">of </SceneText>

      <SceneText speed="instant">a</SceneText>
    </SceneLog>

    <SceneLog
      size="xLarge"
      :glitch="true"
      :margin="{ bottom: 'large' }"
      speed="instant"
      pause="long"
    >
      THOUSAND DANS
    </SceneLog>

    <SceneInputLabel speed="instant">
      Press 'Enter' to Begin...
    </SceneInputLabel>

    <SceneInput hide @submit="onContinue" />
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../../engine/scenes/scene/input/SceneInput.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import SceneText from '../../engine/scenes/scene/text/SceneText.vue';
import { useEngineStore } from '../../engine/Engine.store';

const { setActive, active } = useScenesStore();

const { devMode } = useEngineStore();

const onContinue = (value: string) => {
  if (value.toLowerCase() === "qa") devMode.value = true;

  else if (value !== "") setActive(value);

  if (active.value === undefined || active.value.name === "title") {
    setActive('createCharacter');
  }
}
</script>
