<template>
  <Room name="engineeringTable" @select-action="setActive">
    <template #description>
      <SceneLog>
        You walk over to the Engineering Table.
      </SceneLog>

      <SceneLog>
        Dee and Joy are at the table discussing how to best implement Andrea's hopes & desires for the Candidate flow.
      </SceneLog>
    </template>

    <template #actions>
      <SceneSelectOption value="joy">
        Talk to Joy
      </SceneSelectOption>

      <SceneSelectOption value="dee">
        Talk to Dee
      </SceneSelectOption>
    </template>
  </Room>

  <JoyScene />

  <DeeScene />
</template>

<script setup lang="ts">
import Room from '../room/Room.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';
import SceneSelectOption from '../../engine/scenes/scene/select/option/SceneSelectOption.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import JoyScene from './joy/JoyScene.vue';
import DeeScene from './dee/DeeScene.vue';

const { setActive } = useScenesStore();
</script>
