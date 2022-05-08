<template>
  <MurderScene />

  <TitleScene />

  <CreateCharacterScene />

  <IntroScene />

  <CoffeeScene />

  <DoorScene />

  <ElevatorScene />

  <AlarmScene />

  <SlackScene />

  <ArrivalScene />
</template>

<script setup lang="ts">
import TitleScene from './title/TitleScene.vue';
import CreateCharacterScene from './create-character/CreateCharacterScene.vue';
import IntroScene from './intro/IntroScene.vue';
import CoffeeScene from './coffee/CoffeeScene.vue';
import DoorScene from './door/DoorScene.vue';
import ElevatorScene from './elevator/ElevatorScene.vue';
import AlarmScene from './alarm/AlarmScene.vue';
import MurderScene from './murder/MurderScene.vue';
import SlackScene from './slack/SlackScene.vue';
import ArrivalScene from './arrival/ArrivalScene.vue';
</script>
