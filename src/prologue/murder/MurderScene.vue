<template>
  <Scene name="murder" @finish="setActive('slack')">
    <SceneLog>
      You turn to head towards your desk. Suddenly...
    </SceneLog>

    <SceneLog size="large">
      <SceneText pause="medium" speed="instant">...is </SceneText>

      <SceneText pause="medium" speed="instant">that </SceneText>

      <SceneText pause="medium" speed="instant">a </SceneText>

      <SceneText color="danger" speed="instant" pause="long" :bounce="true">BODY?! </SceneText>
    </SceneLog>

    <SceneLog>
      You recognize them -- it's the venture capitalist from yesterday's team meeting!
    </SceneLog>

    <SceneLog>
      They were going to fund our Series B! <SceneText color="muted">(This doesn't bode well for our stock options)</SceneText>
    </SceneLog>

    <SceneLog>
      They sit slouched against the wall of the ROOM-brand phone booth (available at hushoffice.com).
    </SceneLog>

    <SceneLog>
      You scream at the grusome sight. You're not sure if they're dead or alive.
    </SceneLog>

    <SceneInputLabel id="helpLabel">
      Do you want to help them?
    </SceneInputLabel>

    <SceneSelect @submit="onHelpChoice">
      <SceneSelectOption value="yes">
        Yes
      </SceneSelectOption>

      <SceneSelectOption value="no">
        Hell no!
      </SceneSelectOption>

      <SceneSelectOption value="coffee">
        Coffee run
      </SceneSelectOption>
    </SceneSelect>

    <CoffeeScene :condition="helpChoice === 'coffee'" />

    <SceneLog :condition="helpChoice === 'coffee'" link="helpLabel">
      Properly caffeinated, you return to the body.
    </SceneLog>

    <SceneLog :condition="helpChoice === 'no'">
      You're not in the right headspace to help them right now.
    </SceneLog>

    <SceneLog :condition="helpChoice === 'no'" :margin="{ bottom: 'large' }">
      {{ getRandomBrowsingOption() }}
    </SceneLog>

    <SceneLog :condition="helpChoice === 'no'" speed="slow">
      ...
    </SceneLog>

    <SceneLog :condition="helpChoice === 'no'">
      You hear a moan coming from the phone booth.
    </SceneLog>

    <SceneLog :condition="helpChoice === 'no'" link="helpLabel">
      You should probably help them.
    </SceneLog>

    <SceneLog>
      You hear them breathe. You run to the VC honcho. As the life drains from their lips, they say...
    </SceneLog>

    <SceneLog color="danger" speed="slow">
      ...it was Dan...
    </SceneLog>

    <SceneLog>
      Oh God! How could Dan do such a thing?
    </SceneLog>

    <SceneLog>
      Wait a second. Which Dan was it? There are like a <SceneText color="primary">THOUSAND</SceneText> Dans at RippleMatch!
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
import SceneInput from '../../engine/scenes/scene/input/SceneInput.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import SceneText from '../../engine/scenes/scene/text/SceneText.vue';
import SceneSelect from '../../engine/scenes/scene/select/SceneSelect.vue';
import SceneSelectOption from '../../engine/scenes/scene/select/option/SceneSelectOption.vue';
import { ref } from 'vue';
import { shuffle } from "lodash";
import CoffeeScene from '../coffee/CoffeeScene.vue';

const { setActive } = useScenesStore();

const helpChoice = ref("");

const browsingOptions = [
  "You read some hot takes on Twitter...",
  "You browse Pinterest for baking inspiration...",
  "You watch cat videos on Tiktok...",
]

const getRandomBrowsingOption = () => shuffle(browsingOptions)[0];

const onHelpChoice = (choice: string) => {
  helpChoice.value = choice;
}
</script>
