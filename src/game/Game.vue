<template>
  <Engine class="game">
    <Prologue />
  </Engine>
</template>

<script setup lang="ts">
import Engine from "../engine/Engine.vue";
import Prologue from "../prologue/Prologue.vue";
</script>

<style>
.game {
  width: 100%;
  height: 100vh;
}
</style>
