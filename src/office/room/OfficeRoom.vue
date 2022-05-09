<template>
  <Scene :name="name">
    <slot name="description" />

    <SceneInputLabel id="prompt">
      What do you want to do?
    </SceneInputLabel>

    <SceneSelect @submit="onActionSelect">
      <SceneSelectOption value="go">
        Go to Room
      </SceneSelectOption>

      <slot name="actions" />

      <SceneSelectOption value="coffee">
        Coffee run
      </SceneSelectOption>

      <SceneSelectOption v-if="!petGunner" value="gunner">
        Give Gunner pets
      </SceneSelectOption>

      <SceneSelectOption v-if="!solvedMurder" value="accusation">
        Declare Whodunit!
      </SceneSelectOption>
    </SceneSelect>

    <CoffeeScene :condition="action === 'coffee'" link="prompt" />

    <SceneInputLabel :condition="action === 'go'">
      Where do you want to go?
    </SceneInputLabel>

    <SceneSelect @submit="setActive">
      <SceneSelectOption value="kitchen">
        The Kitchen
      </SceneSelectOption>

      <SceneSelectOption value="engineeringTable">
        The Engineering Table
      </SceneSelectOption>

      <SceneSelectOption value="bathroom">
        The Bathroom
      </SceneSelectOption>
    </SceneSelect>
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../engine/scenes/scene/Scene.vue';
import SceneSelect from '../../engine/scenes/scene/select/SceneSelect.vue';
import SceneSelectOption from '../../engine/scenes/scene/select/option/SceneSelectOption.vue';
import { ref } from 'vue';
import SceneInputLabel from '../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import { useGameStore } from '../../game/Game.store';
import CoffeeScene from '../../prologue/coffee/CoffeeScene.vue';

const { setActive } = useScenesStore();

const { petGunner, solvedMurder } = useGameStore();

defineProps<{ name: string }>();

const emit = defineEmits<{
  (e: "selectAction", v: string): void;
}>();

const action = ref("");

const onActionSelect = (selectedAction: string) => {
  action.value = selectedAction;

  if (selectedAction != "go" && selectedAction !== "coffee") emit("selectAction", selectedAction);
}
</script>
