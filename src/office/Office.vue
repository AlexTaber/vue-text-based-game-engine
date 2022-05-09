<template>
  <Kitchen />

  <Bathroom />

  <EngineeringTable />

  <AccusationScene />

  <AdmissionScene />

  <GunnerScene />

  <CelebrationScene />

  <IncorrectAccusatonScene />
</template>

<script setup lang="ts">
import Kitchen from './kitchen/Kitchen.vue';
import Bathroom from './bathroom/Bathroom.vue';
import EngineeringTable from './engineering-table/EngineeringTable.vue';
import AccusationScene from './accusation/AccusationScene.vue';
import AdmissionScene from './admission/AdmissionScene.vue';
import GunnerScene from './gunner/GunnerScene.vue';
import CelebrationScene from './celebration/CelebrationScene.vue';
import IncorrectAccusatonScene from '../prologue/incorrect-accusation/IncorrectAccusatonScene.vue';
</script>
