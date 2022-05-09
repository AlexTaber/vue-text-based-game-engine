<template>
  <Scene name="alarm" @finish="setActive('murder')">
    <SceneLog>
      The alarm pad is beeping ominously. Its screen reads <SceneText color="danger" speed="slow">ARMED</SceneText>.
    </SceneLog>

    <SceneLog>
      You know the alarm code, right?
    </SceneLog>

    <SceneInputLabel id="keyLabel">
      Enter the code:
    </SceneInputLabel>

    <SceneInput @submit="code = $event" />

    <SceneLog :condition="code === 'apples'">
      The alarm goes <SceneText color="success">DISARMED - READY TO ARM</SceneText>
    </SceneLog>

    <SceneLog :condition="code === 'apples'">
      I guess it... worked? Huh. Neat.
    </SceneLog>

    <SceneLog :condition="code !== 'apples'">
      You enter {{ code }}. That is not the code.
    </SceneLog>

    <SceneLog :condition="code !== 'apples'">
      The alarm begins emitting a high-pitched screech.
    </SceneLog>

    <SceneLog :condition="code !== 'apples'">
      Meh. It's probably fine.
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
import SceneInput from '../../engine/scenes/scene/input/SceneInput.vue';
import { ref } from 'vue';
import SceneText from '../../engine/scenes/scene/text/SceneText.vue';

const { setActive } = useScenesStore();

const code = ref("");
</script>
