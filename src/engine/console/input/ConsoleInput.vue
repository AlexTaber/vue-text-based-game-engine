<template>
  <form v-if="active" @submit.prevent="onSubmit(value)">
    <input class="input" type="text" v-model="value" autofocus />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SceneLog } from '../../scenes/state/scene.model';

const props = defineProps<{
  log: SceneLog,
  active: boolean,
}>();

const emit = defineEmits<{
  (e: "submit", v: string): void;
}>()

const value = ref("");

const onSubmit = (value: string) => {
  emit("submit", value);
  props.log.component.emit?.("submit", value);
}
</script>

<style lang="scss">
.input {
  background: none;
  border: none;
  color: white;
  font-size: 2em;

  &:focus {
    outline: none;
  }
}
</style>
