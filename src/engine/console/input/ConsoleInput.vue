<template>
  <form v-if="active" @submit.prevent="onSubmit(value)">
    <input ref="input" class="input" type="text" v-model="value" @blur="focus" />
  </form>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { SceneLog } from '../../scenes/state/scene.model';

const props = defineProps<{
  log: SceneLog,
  active: boolean,
}>();

const emit = defineEmits<{
  (e: "submit", v: string): void;
}>()

let unmounted = false;

const input = ref<HTMLElement | null>(null);

const value = ref("");

const onSubmit = async (value: string) => {
  props.log.component.emit?.("submit", value);
  await nextTick();
  if (!unmounted) emit("submit", value);
}

onMounted(() => focus());
onUnmounted(() => unmounted = true);

const focus = () => input.value?.focus();
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
