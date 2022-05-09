<template>
  <Scene name="danI" @finish="onFinish">
    <template v-if="danIInteractions === 0">
      <SceneLog color="secondary">
        What was I doing this morning?
      </SceneLog>

      <SceneLog color="secondary">
        Umm.. stargazing?
      </SceneLog>

      <SceneLog color="secondary">
        Wait… it's the morning. Erm.. NOT stargazing, but something else!
      </SceneLog>

      <SceneLog color="secondary">
        I don't know, why are you bothering me?! Go away!
      </SceneLog>

      <SceneLog>
        Gunner is sniffing Dan's pant leg intently.
      </SceneLog>

      <SceneLog v-if="petGunner">
        You can tell he's not buying Dan I's story. Maybe you should talk to him again.
      </SceneLog>
    </template>

    <template v-else-if="danIInteractions === 1">
      <SceneLog color="secondary">
        Why are you looking at me so suspiciously?
      </SceneLog>

      <SceneLog color="secondary">
        Look. I am an <SceneText>ARTIST</SceneText>, a docile creature incapable of such violence.
      </SceneLog>

      <SceneLog>
        Gunner growls at Dan I.
      </SceneLog>

      <SceneLog color="secondary" :bounce="true">
        GET OUT OF HERE YOU STUPID DOG.
      </SceneLog>
    </template>

    <template v-else>
      <SceneLog>
        Dan I stares at the coffee machine, ignoring you.
      </SceneLog>
    </template>

    <SceneInputLabel speed="instant">
      Press 'Enter' to Continue...
    </SceneInputLabel>

    <SceneInput hide />
  </Scene>
</template>

<script setup lang="ts">
import { useScenesStore } from '../../../engine/scenes/state/scenes.store';
import Scene from '../../../engine/scenes/scene/Scene.vue';
import SceneLog from '../../../engine/scenes/scene/log/SceneLog.vue';
import SceneInputLabel from '../../../engine/scenes/scene/input-label/SceneInputLabel.vue';
import SceneInput from '../../../engine/scenes/scene/input/SceneInput.vue';
import { useGameStore } from '../../../game/Game.store';
import SceneText from '../../../engine/scenes/scene/text/SceneText.vue';

const { setPreviousScene } = useScenesStore();

const { petGunner, danIInteractions } = useGameStore();

const onFinish = () => {
  danIInteractions.value ++;
  setPreviousScene();
}
</script>
