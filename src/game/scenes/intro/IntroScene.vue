<template>
  <Scene name="intro">
    <SceneInputLabel id="nameLabel">
      What is your name?
    </SceneInputLabel>

    <SceneInput @submit="name = $event" />

    <SceneLog :if="name === ''" link="nameLabel">
      C'mon, you have a name right?
    </SceneLog>

    <SceneLog color="primary">
      Hello <SceneText color="danger" :bounce="true">{{ name }}!</SceneText>
    </SceneLog>

    <SceneLog :if="name === 'Alex'">
      My name is Alex too!
    </SceneLog>

    <SceneLog size="small">
      It is a <SceneText size="large" :glitch="true" color="secondary">beautiful</SceneText> day!
    </SceneLog>

    <SceneInputLabel>
      What... is your favorite color?
    </SceneInputLabel>

    <SceneSelect @submit="setNextScene">
      <SceneSelectOption value="blue">
        Blue
      </SceneSelectOption>

      <SceneSelectOption value="red">
        Red
      </SceneSelectOption>
    </SceneSelect>
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../../engine/scenes/scene/log/SceneLog.vue';
import SceneText from '../../../engine/scenes/scene/text/SceneText.vue';
import SceneInputLabel from '../../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../../../engine/scenes/scene/input/SceneInput.vue';
import { ref } from 'vue';
import SceneSelectOption from '../../../engine/scenes/scene/select/option/SceneSelectOption.vue';
import SceneSelect from '../../../engine/scenes/scene/select/SceneSelect.vue';
import { useScenesStore } from '../../../engine/scenes/state/scenes.store';

const { setActive: setNextScene } = useScenesStore();

const name = ref("");
</script>
