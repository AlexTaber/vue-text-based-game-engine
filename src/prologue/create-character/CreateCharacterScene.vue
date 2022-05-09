<template>
  <Scene name="createCharacter" @finish="setActive('intro')">
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

const { playerName } = useGameStore();

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

const onJobSelect = (name: string) => {
  selectedJob.value = jobs.find(j => j.name === name);
}
</script>
