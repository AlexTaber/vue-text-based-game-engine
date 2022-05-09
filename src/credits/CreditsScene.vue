<template>
  <Scene name="credits" @finish="setActive(solvedMurder ? 'celebration' : 'incorrectAccusation')">
    <SceneLog>
      Thanks for playing
    </SceneLog>

    <SceneLog :glitch="true" size="xLarge" :margin="{ bottom: 'large' }">
      Night of a THOUSAND DANS
    </SceneLog>

    <SceneLog v-for="credit in credits" :key="credit.name">
      <SceneText color="primary">{{ credit.name }}: </SceneText>{{ credit.job }}
    </SceneLog>

    <SceneLog :margin="{ top: 'large' }">
      Special thanks to:
    </SceneLog>

    <SceneLog>
      The many, <SceneText color="primary" size="large">MANY</SceneText> Dans. Even the murderous one(s).
    </SceneLog>

    <SceneInputLabel speed="instant" :margin="{ top: 'large' }">
      Wait.. is there more? Press 'Enter' to Continue...
    </SceneInputLabel>

    <SceneInput />
  </Scene>
</template>

<script setup lang="ts">
import { useScenesStore } from '../engine/scenes/state/scenes.store';
import Scene from '../engine/scenes/scene/Scene.vue';
import SceneLog from '../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../engine/scenes/scene/input/SceneInput.vue';
import SceneText from '../engine/scenes/scene/text/SceneText.vue';
import { useGameStore } from '../game/Game.store';

const credits = [
  { name: "Michael Anderson", job: "Programmer, Writer, Fishing Expert" },
  { name: "Alex Taber", job: "Programmer" },
  { name: "Ken Simeon", job: "Writer" },
  { name: "Bobby Hancock", job: "Writer" },
]

const { setActive } = useScenesStore();

const { solvedMurder } = useGameStore();
</script>
