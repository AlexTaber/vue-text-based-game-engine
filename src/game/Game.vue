<template>
  <Engine class="game">
    <Prologue />

    <Office />

    <CreditsScene />
  </Engine>
</template>

<script setup lang="ts">
import Engine from "../engine/Engine.vue";
import Prologue from "../prologue/Prologue.vue";
import Office from "../office/Office.vue";
import CreditsScene from "../credits/CreditsScene.vue";
</script>

<style>
.game {
  width: 100%;
}
</style>
