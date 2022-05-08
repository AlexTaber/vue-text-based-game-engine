<template>
  <Scene name="slack" @finish="setActive('arrival')">
    <SceneLog>
      You grab your phone to message <SceneText color="primary">#coreteam</SceneText> to get help.
    </SceneLog>

    <SceneInputLabel>
      Enter your cry for help:
    </SceneInputLabel>

    <SceneInput @submit="message = $event" />

    <SlackItem :slack="{ name: playerName, message }" />

    <SlackItem v-for="slack in slacks" :key="slack.name" :slack="slack" />

    <SceneInputLabel speed="instant">
      Press 'Enter' to Continue...
    </SceneInputLabel>

    <SceneInput />
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../../engine/scenes/scene/input/SceneInput.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import SceneText from '../../engine/scenes/scene/text/SceneText.vue';
import { computed, ref } from 'vue';
import { useGameStore } from '../../game/Game.store';
import SlackItem from './SlackItem.vue';

const { setActive } = useScenesStore();

const { playerName } = useGameStore();

const message = ref("");

const slacks = computed(() => [
  { name: "Jacks", message: "😱😱😱 OMG 😱😱😱", },
  { name: "Shannon", message: "Do not touch anything!", },
  { name: "Lauren", message: "I'm not cleaning that up", },
  { name: "Dan B", message: "Big yikes", },
  { name: "Eric", message: "Sorry can't help, with other VCs", },
  { name: "Andrew", message: "Please keep Gunner away from the body", },
]);
</script>
