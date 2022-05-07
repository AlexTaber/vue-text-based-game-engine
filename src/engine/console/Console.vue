<template>
  <slot />

  <div class="console">
    <div class="content">
      <div v-for="log in logs" :key="log.id" class="log">
        <span v-for="item in log.textItems">
          {{ item.content }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConsoleStore } from './Console.store';

const { logs } = useConsoleStore();
</script>

<style lang="scss">
.console {
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  padding: 40px;
  font-family: 'VT323', monospace;
  font-size: 2em;
}

.content {
  animation-duration: 0.01s;
  animation-name: textflicker;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.log {
  margin-bottom: 6px;
}

@keyframes textflicker {
  from {
    text-shadow: 1px 0 0 #ea36af, -1px 0 0 #75fa69;
  }
  to {
    text-shadow: 2px 0.5px 2px #ea36af, -1px -0.5px 2px #75fa69;
  }
}
</style>
