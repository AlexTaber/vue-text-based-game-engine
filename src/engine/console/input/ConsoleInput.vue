<template>
  <form v-if="active" @submit.prevent="onSubmit(value)">
    <input ref="input" class="input" type="text" v-model="value" @blur="focus" />
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { SceneLog } from '../../scenes/state/scene.model';

const props = defineProps<{
  log: SceneLog,
  active: boolean,
}>();

const emit = defineEmits<{
  (e: "submit", v: string): void;
}>()

const input = ref<HTMLElement | null>(null);

const value = ref("");

const onSubmit = (value: string) => {
  emit("submit", value);
  props.log.component.emit?.("submit", value);
}

onMounted(() => focus());

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
