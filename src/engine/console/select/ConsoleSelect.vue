<template>
  <template v-if="active">
    <div
      v-for="option, index in log.options"
      :key="option.id"
      class="option"
    >
      <span v-if="optionIndex === index" :style="{ color: getColor('primary') }">
        >
      </span>

      {{ option.content }}
    </div>
  </template>
</template>

<script setup lang="ts">
import { nextTick, onUnmounted, ref } from 'vue';
import { SceneLog } from '../../scenes/state/scene.model';
import { useScenesStore } from '../../scenes/state/scenes.store';
import { useTheme } from '../../theme';

window.addEventListener("keydown", onKeyPress);

onUnmounted(() => window.removeEventListener("keydown", onKeyPress));

const props = defineProps<{
  log: SceneLog,
  active: boolean,
}>();

const emit = defineEmits<{
  (e: "submit", v: string | undefined): void;
}>();

const { activeId } = useScenesStore();

const sceneName = activeId.value;

const { getColor } = useTheme();

const optionIndex = ref(0);

function onKeyPress(e: KeyboardEvent) {
  if (props.active) {
    if (e.code === "ArrowDown") {
      optionIndex.value = Math.min((props.log.options?.length || 1) - 1, optionIndex.value + 1);
    } else if (e.code === "ArrowUp") {
      optionIndex.value = Math.max(0, optionIndex.value - 1);
    } else if (e.code === "Enter") {
      onSubmit(props.log.options?.[optionIndex.value].value || "");
    }
  }
}

async function onSubmit(value: string) {
  props.log.component.emit?.("submit", value);
  await nextTick();
  if (activeId.value === sceneName) emit("submit", value);
}
</script>

<style lang="scss">
.option {
  font-size: 2em;
}

.label {
  color: red;
}
</style>
