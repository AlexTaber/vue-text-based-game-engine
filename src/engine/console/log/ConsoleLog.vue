<template>
  <div
    :key="log.id"
    class="log"
    :style="{
      marginTop: getSpacingSize(log.margin?.top),
      marginBottom: getSpacingSize(log.margin?.bottom) || '0.5em',
      marginLeft: getSpacingSize(log.margin?.left),
      marginRight: getSpacingSize(log.margin?.right),
    }"
  >
    <span
      v-for="item in log.textItems"
      :key="item.id"
      :data-text="item.content"
      :class="{
        bounce: item.style.bounce,
        glitch: item.style.glitch,
      }"
      :style="{
        color: getColor(item.style.color),
        fontSize: getSize(item.style.size),
      }"
    >
      {{ item.content }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { SceneTextSize, SceneTextSpacingSize, SceneLog } from '../../scenes/state/scene.model';
import { useTheme } from '../../theme';

defineProps<{
  log: SceneLog,
}>();

const { getColor } = useTheme();

const getSpacingSize = (key: SceneTextSpacingSize | undefined) => {
  const map = {
    none: "0px",
    small: "0.5em",
    large: "2em",
  };

  return key ? map[key] : undefined;
}

const getSize = (key: SceneTextSize | undefined) => {
  const map = {
    xSmall: "0.5em",
    small: "0.7em",
    medium: "1em",
    large: "2em",
    xLarge: "5em",
  };

  return key ? map[key || "medium"] : undefined;
}
</script>

<style lang="scss">
.log {
  white-space: pre-line;
  font-family: 'VT323', monospace;
  font-size: 2em;
}

.bounce {
  animation-name: bounce;
  animation-duration: 0.8s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  position: relative;
  top: 0;
  left: 0;
}

@keyframes bounce {
  0% {
    top: 3px;
  }
  50% {
    top: -8px;
  }
  100% {
    top: 3px;
  }
}

.glitch {
  position: relative;
  animation: glitch 5s 5s infinite;
  white-space: nowrap;
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: -5px 0 magenta;
  background: black;
  overflow: hidden;
  animation: noise-1 3s linear infinite alternate-reverse, glitch 5s 5.05s infinite;
  white-space: nowrap;
}

.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -5px 0 lightgreen;
  background: black;
  overflow: hidden;
  animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
  white-space: nowrap;
}

@keyframes glitch {
  1%{
    transform: rotateX(10deg) skewX(90deg);
  }
  2%{
    transform: rotateX(0deg) skewX(0deg);
  }
}

@keyframes noise-1 {
  $steps: 30;
  @for $i from 1 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}px 0 #{$bottom}px 0);
    }
  }
}

@keyframes noise-2 {
  $steps: 30;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}px 0 #{$bottom}px 0);
    }
  }
}
</style>
