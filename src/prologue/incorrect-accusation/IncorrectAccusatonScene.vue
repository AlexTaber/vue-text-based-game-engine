<template>
  <Scene name="incorrectAccusation" @finish="setActive('arrival')">
    <SceneLog>
      Well, well, if it isn't our hero detective!
    </SceneLog>

    <SceneLog>
      What's wrong? Feeling a bit <SceneText :bounce="true" color="danger">awful</SceneText> about what happened to {{ incorrectAccusation}}?
    </SceneLog>

    <SceneLog>
      Why? Surely, with your unrivaled powers of deduction, you would have solved the case the first time.
    </SceneLog>

    <SceneInputLabel>
      You're not having second thoughts, are you?
    </SceneInputLabel>

    <SceneSelect @submit="secondThoughtsValue = $event">
      <SceneSelectOption value="yes">
        Maybe...
      </SceneSelectOption>

      <SceneSelectOption value="no">
        What? No, of course not! {{ incorrectAccusation }} was a menace who needed to be stopped!
      </SceneSelectOption>
    </SceneSelect>

    <SceneLog :condition="secondThoughtsValue === 'no'">
      Ok good! Back to the credits with you!
    </SceneLog>

    <SceneInputLabel :condition="secondThoughtsValue === 'no'">
      Press 'Enter' to Continue...
    </SceneInputLabel>

    <SceneInput :condition="secondThoughtsValue === 'no'" hide />

    <SceneLog @init="resetLogs" :condition="secondThoughtsValue === 'no'" size="large" :margin="{ bottom: 'large' }">
      Night of a THOUSA...
    </SceneLog>

    <SceneSelect :condition="secondThoughtsValue === 'no'">
      <SceneSelectOption value="wait">
        Wait!
      </SceneSelectOption>
    </SceneSelect>

    <SceneLog :condition="secondThoughtsValue === 'no'">
      What?!
    </SceneLog>

    <SceneSelect :condition="secondThoughtsValue === 'no'">
      <SceneSelectOption value="wait">
        OK fine, maybe I'm not sure it was {{ incorrectAccusation }}
      </SceneSelectOption>
    </SceneSelect>

    <SceneLog :condition="secondThoughtsValue === 'no'" color="danger" size="large" :bounce="true">
      REALLY?!
    </SceneLog>

    <SceneLog>
      Oh dear. How dreadful. Poor {{ incorrectAccusation }}, fired for no good reason.
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

    <SceneInput hide @submit="incorrectAccusation = undefined" />
  </Scene>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import { useGameStore } from '../../game/Game.store';
import Scene from '../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneSelect from '../../engine/scenes/scene/select/SceneSelect.vue';
import SceneSelectOption from '../../engine/scenes/scene/select/option/SceneSelectOption.vue';
import SceneInput from '../../engine/scenes/scene/input/SceneInput.vue';
import SceneText from '../../engine/scenes/scene/text/SceneText.vue';
import { resetLogs } from '../../engine/console/Console.store';

const { setActive } = useScenesStore();

const { incorrectAccusation } = useGameStore();

const secondThoughtsValue = ref("");
</script>
