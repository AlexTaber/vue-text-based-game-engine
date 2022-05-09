<template>
  <form v-if="active" @submit.prevent="onSubmit(value)">
    <input ref="input" :class="{ input: true, hide: log.component.props.hide }" type="text" v-model="value" @blur="focus" />
  </form>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { SceneLog } from '../../scenes/state/scene.model';
import { useScenesStore } from '../../scenes/state/scenes.store';

const props = defineProps<{
  log: SceneLog,
  active: boolean,
}>();

const emit = defineEmits<{
  (e: "submit", v: string): void;
}>()

const { activeId } = useScenesStore();

const sceneName = activeId.value;

const input = ref<HTMLElement | null>(null);

const value = ref("");

const onSubmit = async (value: string) => {
  props.log.component.emit?.("submit", value);
  await nextTick();
  if (activeId.value === sceneName) emit("submit", value);
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

  &.hide {
    opacity: 0;
  }
}
</style>
