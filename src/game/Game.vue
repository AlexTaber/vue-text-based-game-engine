<template>
  <Game class="game">
    <TitleScene />

    <IntroScene />
  </Game>
</template>

<script setup lang="ts">
import IntroScene from "./scenes/intro/IntroScene.vue";
import TitleScene from "./scenes/title/TitleScene.vue"
import Game from "../engine/Game.vue";
</script>

<style>
.game {
  width: 100%;
  height: 100vh;
}
</style>
