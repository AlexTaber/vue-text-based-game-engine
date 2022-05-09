<template>
  <Scene name="gunner" @init="petGunner = true" @finish="setPreviousScene">
    <SceneLog>
      Gunner eyes you cautiously, as if trying to determine what kind of person you are.
    </SceneLog>

    <SceneLog>
      You want to show him you're a good person!
    </SceneLog>

    <SceneLog>
      You give Gunner the many pets he deserves.
    </SceneLog>

    <SceneLog>
      Gunner accepts your pets and leaves, satisfied with your impeccable character.
    </SceneLog>

    <SceneInputLabel speed="instant">
      Press 'Enter' to Continue...
    </SceneInputLabel>

    <SceneInput hide />
  </Scene>
</template>

<script setup lang="ts">
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import Scene from '../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../../engine/scenes/scene/input/SceneInput.vue';
import { useGameStore } from '../../game/Game.store';

const { setPreviousScene } = useScenesStore();

const { petGunner } = useGameStore();
</script>
