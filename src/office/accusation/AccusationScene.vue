<template>
  <Scene name="accusation" @finish="onFinish">
    <SceneInputLabel>
      Are you ready to declare the murderer?
    </SceneInputLabel>

    <SceneSelect @submit="onReadySelect">
      <SceneSelectOption value="yes">
        Yes
      </SceneSelectOption>

      <SceneSelectOption value="no">
        No
      </SceneSelectOption>
    </SceneSelect>

    <SceneInputLabel>
      Who do you think it was?
    </SceneInputLabel>

    <SceneSelect @submit="onAccuse">
      <SceneSelectOption value="Dan B.">
        Dan B.
      </SceneSelectOption>

      <SceneSelectOption value="Dan I.">
        Dan I.
      </SceneSelectOption>

      <SceneSelectOption value="Dan S.">
        Dan S.
      </SceneSelectOption>

      <SceneSelectOption value="Daniel E.">
        Daniel E.
      </SceneSelectOption>

      <SceneSelectOption value="Dee">
        Dee
      </SceneSelectOption>
    </SceneSelect>

    <SceneLog>
      You really think {{ accussed }} did it? That's quite the accusation. But if you're sure... we trust you!
    </SceneLog>

    <SceneLog>
      {{ accussed }} is promptly fired for breach of contract, specifically Article A section C 'Do not murder any prospective investors in the company'.
    </SceneLog>

    <SceneLog>
      Way to go detective. Hope you're sure about your choice.
    </SceneLog>

    <SceneInputLabel speed="instant">
      Press 'Enter' to Continue...
    </SceneInputLabel>

    <SceneInput hide />
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../engine/scenes/scene/Scene.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import SceneInputLabel from '../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneSelect from '../../engine/scenes/scene/select/SceneSelect.vue';
import SceneSelectOption from '../../engine/scenes/scene/select/option/SceneSelectOption.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';
import { ref } from 'vue';
import SceneInput from '../../engine/scenes/scene/input/SceneInput.vue';
import { useGameStore } from '../../game/Game.store';

const { setPreviousScene, setActive } = useScenesStore();

const { incorrectAccusation } = useGameStore();

const accussed = ref("");

const onReadySelect = (ready: string) => {
  if (ready === 'no') setPreviousScene();
}

const onAccuse = (value: string) => {
  accussed.value = value;
  if (value === "Dan I.") setActive("admission");
}

const onFinish = () => {
  incorrectAccusation.value = accussed.value;
  setActive('credits');
}
</script>
