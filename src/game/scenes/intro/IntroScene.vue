<template>
  <Scene name="intro" v-slot="{ state }">
    <SceneLog>
      Hello <SceneText color="primary" :bounce="true">Michael!</SceneText>
    </SceneLog>

    <SceneInputLabel>
      What is your favorite color?
    </SceneInputLabel>

    <SceneSelect name="favoriteColor">
      <SceneSelectOption value="red">
        Red
      </SceneSelectOption>

      <SceneSelectOption value="blue">
        Blue
      </SceneSelectOption>
    </SceneSelect>

    <SceneLog v-if="state.favoriteColor === 'blue'">
      Blue is a great color!
    </SceneLog>

    <SceneLog v-if="state.favoriteColor === 'red'">
      Red is a terrible color!
    </SceneLog>
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../../engine/scenes/scene/log/SceneLog.vue';
import SceneText from '../../../engine/scenes/scene/text/SceneText.vue';
import SceneInputLabel from '../../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneSelect from '../../../engine/scenes/scene/select/SceneSelect.vue';
import SceneSelectOption from '../../../engine/scenes/scene/select/option/SceneSelectOption.vue';
</script>