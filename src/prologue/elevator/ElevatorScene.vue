<template>
  <Scene name="elevator" @finish="setActive('alarm')">
    <SceneLog>
      You enter the elevator. The sixth floor button is still locked. You must be the first one at the office.
    </SceneLog>

    <SceneLog>
      You try to unlock the elevator, but the key sticks.
    </SceneLog>

    <SceneInputLabel id="keyLabel">
      Do you want to jiggle the key?
    </SceneInputLabel>

    <SceneSelect @submit="jiggleKey = $event">
      <SceneSelectOption value="yes">
        Yes
      </SceneSelectOption>

      <SceneSelectOption value="no">
        No
      </SceneSelectOption>
    </SceneSelect>

    <SceneLog :condition="jiggleKey === 'no'" link="keyLabel">
      You sit and contemplate your life choices.
    </SceneLog>

    <SceneLog>
      You jiggle the key but nothing happens.
    </SceneLog>

    <SceneInputLabel>
      Do you want to jiggle the key <SceneText speed="slow" color="primary" size="large" :bounce="true">ten</SceneText> more times?
    </SceneInputLabel>

    <SceneSelect>
      <SceneSelectOption value="yes">
        Ugh
      </SceneSelectOption>
    </SceneSelect>

    <SceneLog>
      Mercifully, the eighth time's the charm.
    </SceneLog>

    <SceneLog>
      The elevator lurches to life and brings you to the sixth floor.
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
import SceneSelect from '../../engine/scenes/scene/select/SceneSelect.vue';
import SceneSelectOption from '../../engine/scenes/scene/select/option/SceneSelectOption.vue';
import SceneInput from '../../engine/scenes/scene/input/SceneInput.vue';
import { ref } from 'vue';
import SceneText from '../../engine/scenes/scene/text/SceneText.vue';

const { setActive } = useScenesStore();

const jiggleKey = ref("");
</script>
