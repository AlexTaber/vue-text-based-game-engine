<template>
  <slot />

  <div class="console">
    <div class="content">
      <div v-for="log, index in logs" :key="log.id" :class="{ logEffects: !log.style?.glitch, active: index === logs.length - 1 }">
        <ConsoleLog v-if="log.type === 'log'" :log="log" />

        <ConsoleInput
          v-else-if="log.type === 'input'"
          :log="log"
          :active="index === logs.length - 1"
          @submit="onLogSubmit()"
        />

        <ConsoleSelect
          v-else-if="log.type === 'select'"
          :log="log"
          :active="index === logs.length - 1"
          @submit="onLogSubmit()"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConsoleStore } from './Console.store';
import ConsoleLog from './log/ConsoleLog.vue';
import ConsoleInput from './input/ConsoleInput.vue';
import ConsoleSelect from './select/ConsoleSelect.vue';

const { logs, onLogSubmit } = useConsoleStore();
</script>

<style lang="scss">
body {
  background: black;
}

.console {
  width: 100%;
  height: 100vh;
  color: white;
  padding: 40px;
  font-family: 'VT323', monospace;
  overflow-y: scroll;
  overscroll-behavior-y: contain;
  scroll-snap-type: y proximity;
  filter: brightness(150%);
}

.logEffects {
  animation-duration: 0.01s;
  animation-name: textflicker;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes textflicker {
  from {
    text-shadow: 1px 0 0 #ea36af, -1px 0 0 #75fa69;
  }
  to {
    text-shadow: 2px 0.5px 2px #ea36af, -1px -0.5px 2px #75fa69;
  }
}

.active {
  scroll-snap-align: end;
  padding-bottom: 100px;
}
</style>
