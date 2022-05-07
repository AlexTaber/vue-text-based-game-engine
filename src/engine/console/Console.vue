<template>
  <slot />

  <div class="console">
    <div class="content">
      <div
        v-for="log in logs"
        :key="log.id"
        class="log"
        :style="{
          marginTop: getSpacingSize(log.margin?.top),
          marginBottom: getSpacingSize(log.margin?.bottom) || '10px',
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
          }"
        >
          {{ item.content }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SceneTextSpacingSize } from '../scenes/state/scene.model';
import { useTheme } from '../theme';
import { useConsoleStore } from './Console.store';

const { logs } = useConsoleStore();

const { getColor } = useTheme();

const getSpacingSize = (key: SceneTextSpacingSize | undefined) => {
  const map = {
    none: "0px",
    small: "5px",
    large: "20px",
  };

  return key ? map[key] : undefined;
}
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
  line-height: 0.7em;
}

.content {
  animation-duration: 0.01s;
  animation-name: textflicker;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.log {
  white-space: pre-line;
}

@keyframes textflicker {
  from {
    text-shadow: 1px 0 0 #ea36af, -1px 0 0 #75fa69;
  }
  to {
    text-shadow: 2px 0.5px 2px #ea36af, -1px -0.5px 2px #75fa69;
  }
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
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: -5px 0 magenta;
  background: black;
  overflow: hidden;
  top: 0;
  animation: noise-1 3s linear infinite alternate-reverse, glitch 5s 5.05s infinite;
}

.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -5px 0 lightgreen;
  background: black;
  overflow: hidden;
  top: 0;
  animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
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

.scanlines {
  overflow: hidden;
  mix-blend-mode: difference;
}

.scanlines::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background: repeating-linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.05) .5%,
    transparent 1%
  );

  animation: fudge 7s ease-in-out alternate infinite;
}


@keyframes fudge {
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(0px, 2%);
  }
}

.glow {
  @extend .glitch;
  text-shadow: 0 0 1000px rgb(223, 191, 191);
  color: transparent;
  position: absolute;
  top: 0;
}
</style>
