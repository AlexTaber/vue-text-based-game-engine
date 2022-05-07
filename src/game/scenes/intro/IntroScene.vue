<template>
  <Scene name="intro" v-slot="{ state }">
    <SceneMessage>
      Hello <SceneText color="primary" wavy>Michael!</SceneText>
    </SceneMessage>

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

    <SceneMessage v-if="state.favoriteColor === 'blue'">
      Blue is a great color!
    </SceneMessage>

    <SceneMessage v-if="state.favoriteColor === 'red'">
      Red is a terrible color!
    </SceneMessage>
  </Scene>
</template>

<script setup lang="ts">
import Scene from '../../../engine/scenes/scene/Scene.vue';
import SceneMessage from '../../../engine/scenes/scene/message/SceneMessage.vue';
import SceneText from '../../../engine/scenes/scene/text/SceneText.vue';
import SceneInputLabel from '../../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneSelect from '../../../engine/scenes/scene/select/SceneSelect.vue';
import SceneSelectOption from '../../../engine/scenes/scene/select/option/SceneSelectOption.vue';
</script>