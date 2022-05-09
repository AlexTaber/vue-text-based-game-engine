<template>
  <Scene name="createCharacter" @finish="setActive('intro')">
    <template v-if="incorrectAccusation">
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

      <SceneInputLabel>
        Press 'Enter' to Continue...
      </SceneInputLabel>

      <SceneInput hide @submit="setActive('fakeCredits')" />

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

      <SceneInput hide @submit="onResetTime" />
    </template>

    <SceneInputLabel id="nameLabel">
      What is your name?
    </SceneInputLabel>

    <SceneInput @submit="playerName = $event" />

    <SceneLog :condition="playerName === ''" link="nameLabel">
      You... do have a name right?
    </SceneLog>

    <SceneLog color="info">
      Select character class:
    </SceneLog>

    <template v-for="job in jobs" :key="job.name">
      <SceneLog color="primary" :margin="{ bottom: 'none' }" speed="instant">
        {{ job.name }}
      </SceneLog>

      <SceneLog speed="instant">
        Special Ability: <SceneText color="secondary">{{ job.special }}</SceneText>
      </SceneLog>
    </template>

    <SceneSelect @submit="onJobSelect">
      <SceneSelectOption v-for="job in jobs" :key="job.name" :value="job.name">
        {{ job.name }}
      </SceneSelectOption>
    </SceneSelect>

    <SceneLog >
      You're <SceneText color="primary">{{ indefinite(selectedJob?.name ) }}</SceneText>, {{ selectedJob?.motto }}.
    </SceneLog>

    <SceneLog v-for="skill in skills" :key="skill.name" speed="instant">
      <SceneText color="primary">{{ skill.name }}:</SceneText> {{ selectedJob![skill.key] }}
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
import SceneText from '../../engine/scenes/scene/text/SceneText.vue';
import SceneInputLabel from '../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../../engine/scenes/scene/input/SceneInput.vue';
import { ref } from 'vue';
import SceneSelectOption from '../../engine/scenes/scene/select/option/SceneSelectOption.vue';
import SceneSelect from '../../engine/scenes/scene/select/SceneSelect.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import { useGameStore } from '../../game/Game.store';
import { engineer, productManager, salesperson, newHire } from "../../battle/jobs";
import { Job } from "../../engine/battle/job";
import indefinite from "indefinite";

const { setActive } = useScenesStore();

const { playerName, incorrectAccusation } = useGameStore();

const jobs = [
  engineer,
  productManager,
  salesperson,
  newHire,
];

const skills: { name: string, key: keyof Job }[] = [
  { name: "Intelligence", key: "baseIntelligence" },
  { name: "Charisma", key: "baseCharisma" },
  { name: "Stamina", key: "baseStanima" },
  { name: "People Skills", key: "basePeopleSkills" },
];

const selectedJob = ref<Job | undefined>(undefined);
const secondThoughtsValue = ref("");

const onJobSelect = (name: string) => {
  selectedJob.value = jobs.find(j => j.name === name);
}

const onResetTime = () => {
  incorrectAccusation.value = undefined;
  setActive('arrival');
}
</script>
