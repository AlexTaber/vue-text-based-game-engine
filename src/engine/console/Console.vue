<template>
  <div class="console">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.console {
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  padding: 40px;
}

.content {
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
</style>
