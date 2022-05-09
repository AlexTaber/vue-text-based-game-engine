<template>
  <Scene name="fakeCredits" @finish="setActive('title')">
    <SceneLog size="large" :margin="{ bottom: 'large' }">
      Night of a THOUSA...
    </SceneLog>

    <SceneSelect>
      <SceneSelectOption value="wait">
        Wait!
      </SceneSelectOption>
    </SceneSelect>

    <SceneLog>
      What?!
    </SceneLog>

    <SceneSelect>
      <SceneSelectOption value="wait">
        OK fine, maybe I'm not sure it was {{ incorrectAccusation }}
      </SceneSelectOption>
    </SceneSelect>

    <SceneLog color="danger" size="large" :bounce="true">
      REALLY?!
    </SceneLog>

    <SceneLog>
      How dreadful! Poor {{ incorrectAccusation }}, fired for no good reason.
    </SceneLog>

    <SceneLog>
      This is <SceneText color="danger">your</SceneText> fault.
    </SceneLog>

    <SceneLog>
      Oh well. Hope you're prepared to stomach this miscarriage of justice for the rest of your life!
    </SceneLog>

    <SceneLog>
      Unless... there were a way to reset time? To go back to before your recklessly accussed {{ incorrectAccusation }} and got them fired.
    </SceneLog>

    <SceneLog>
      Fortunately for you, <SceneText size="large">I</SceneText> possess this power.
    </SceneLog>

    <SceneInputLabel>
      Press 'Enter' to... reset time?
    </SceneInputLabel>

    <SceneInput hide @submit="onResetTime" />
  </Scene>
</template>

<script setup lang="ts">
import { useScenesStore } from '../engine/scenes/state/scenes.store';
import Scene from '../engine/scenes/scene/Scene.vue';
import SceneLog from '../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../engine/scenes/scene/input/SceneInput.vue';
import SceneText from '../engine/scenes/scene/text/SceneText.vue';
import SceneSelect from '../engine/scenes/scene/select/SceneSelect.vue';
import SceneSelectOption from '../engine/scenes/scene/select/option/SceneSelectOption.vue';
import { useGameStore } from '../game/Game.store';

const { setActive } = useScenesStore();

const { incorrectAccusation } = useGameStore();

const onResetTime = () => {
  incorrectAccusation.value = undefined;
  setActive('arrival');
}
</script>
