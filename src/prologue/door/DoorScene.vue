<template>
  <Scene name="door" @finish="setActive('elevator')">
    <SceneLog>
      You're in front of the heavy building door. Both of your keys look basically the same.
    </SceneLog>

    <SceneInputLabel>
      Which key should you use?
    </SceneInputLabel>

    <SceneSelect>
      <SceneSelectOption value="">
        The silverish gold key
      </SceneSelectOption>

      <SceneSelectOption value="">
        The goldish silver key
      </SceneSelectOption>
    </SceneSelect>

    <SceneLog>
      You pick the wrong key. You should really put tape on one of them...
    </SceneLog>

    <SceneInputLabel speed="instant">
      Press 'Enter' to Continue...
    </SceneInputLabel>

    <SceneInput hide />
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import { useScenesStore } from '../../engine/scenes/state/scenes.store';
import SceneSelect from '../../engine/scenes/scene/select/SceneSelect.vue';
import SceneSelectOption from '../../engine/scenes/scene/select/option/SceneSelectOption.vue';
import SceneInput from '../../engine/scenes/scene/input/SceneInput.vue';

const { setActive } = useScenesStore();
</script>
