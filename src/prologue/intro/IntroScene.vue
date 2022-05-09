<template>
  <Scene name="intro">
    <SceneLog>
      It's a warmer day than expected in New York. You're overdressed for the day and are hot and sweaty from your train ride in from Brooklyn.
    </SceneLog>

    <SceneLog>
      You arrive at the RippleMatch office bright and early.
    </SceneLog>

    <SceneInputLabel id="nameLabel">
      What do you want to do?
    </SceneInputLabel>

    <SceneSelect @submit="onSelect">
      <SceneSelectOption value="door">
        Enter
      </SceneSelectOption>

      <SceneSelectOption value="coffee">
        Coffee
      </SceneSelectOption>
    </SceneSelect>

    <CoffeeScene :condition="actionValue === 'coffee'" link="nameLabel" />
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneSelectOption from '../../engine/scenes/scene/select/option/SceneSelectOption.vue';
import SceneSelect from '../../engine/scenes/scene/select/SceneSelect.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import { ref } from 'vue';
import CoffeeScene from '../coffee/CoffeeScene.vue';

const { setActive } = useScenesStore();

const actionValue = ref("");

const onSelect = (value: string) => {
  actionValue.value = value;

  if (actionValue.value !== 'coffee') setActive(value);
}
</script>
