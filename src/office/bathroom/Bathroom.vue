<template>
  <Room name="bathroom" @select-action="setActive">
    <template #description>
      <SceneLog>
        You make your way to the bathroom.
      </SceneLog>

      <SceneLog>
        In the hall you see Lauren digging for something in the closet, boxes strewn everywhere.
      </SceneLog>

      <SceneLog>
        Daniel E & Dan B are standing in line to use the bathroom.
      </SceneLog>

      <SceneLog>
        Too much coffee for everyone this morning.
      </SceneLog>
    </template>

    <template #actions>
      <SceneSelectOption value="danB">
        Talk to Dan B.
      </SceneSelectOption>

      <SceneSelectOption value="danielE">
        Talk to Daniel E.
      </SceneSelectOption>
    </template>
  </Room>

  <DanBScene />

  <DanielEScene />
</template>

<script setup lang="ts">
import Room from '../room/Room.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';
import SceneSelectOption from '../../engine/scenes/scene/select/option/SceneSelectOption.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import DanielEScene from './daniel-e/DanielEScene.vue';
import DanBScene from './dan-b/DanBScene.vue';

const { setActive } = useScenesStore();
</script>
