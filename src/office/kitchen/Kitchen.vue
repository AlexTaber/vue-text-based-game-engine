<template>
  <Room name="kitchen" @select-action="setActive">
    <template #description>
      <SceneLog>
        You walk into the kitchen.
      </SceneLog>

      <SceneLog>
        The sink is filled with dirty coffee cups. There's White Claw & LaCroix cans overflowing the recycling bin.
      </SceneLog>

      <SceneLog>
        Dan I & Dan S are trying to figure out how to make coffee.
      </SceneLog>
    </template>

    <template #actions>
      <SceneSelectOption value="danS">
        Talk to Dan S.
      </SceneSelectOption>

      <SceneSelectOption value="danI">
        Talk to Dan I.
      </SceneSelectOption>
    </template>
  </Room>

  <DanSScene />

  <DanIScene />
</template>

<script setup lang="ts">
import Room from '../room/Room.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';
import SceneSelectOption from '../../engine/scenes/scene/select/option/SceneSelectOption.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import DanSScene from './dan-s/DanSScene.vue';
import DanIScene from './dan-i/DanIScene.vue';

const { setActive } = useScenesStore();
</script>
