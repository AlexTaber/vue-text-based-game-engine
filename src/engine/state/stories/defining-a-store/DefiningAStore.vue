<template>
  <DocsContainer>
    <RipHeader>
      <h3>Defining a Store</h3>
    </RipHeader>

    <RipParagraph>When creating a store, you must first decide which scope to create it in - inside of a component, or as a composable. There are advantages to either approach, but first let's see how each is done.</RipParagraph>

    <RipHeader>
      <h4>Defining a Store in a Component</h4>
    </RipHeader>

    <pre>
      <code>
        // MyComponent.vue
        &lt;template&gt;
          &lt;div v-if="showThing" @click="showThing = !showThing"&gt;
            Hey look at me!
          &lt;/div&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
          import { useStore } from "@frontend/state/store";

          const { showThing } = useStore("My Store", { showThing: false });
        &lt;/script&gt;
      </code>
    </pre>

    <RipHeader>
      <h4>Defining a Store as a Composable</h4>
    </RipHeader>

     <pre>
      <code>
        // my-store.ts
        const store = useStore("My Store", { showThing: true });

        export function useMyStore() {
          return {
            showThing: store.showThing,
          };
        }

        // MyComponent.vue
        &lt;template&gt;
          &lt;div v-if="showThing" @click="showThing = !showThing"&gt;
            Hey look at me!
          &lt;/div&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
          import { useMyStore } from "./my-store.ts";

          const { showThing } = useMyStore();
        &lt;/script&gt;
      </code>
    </pre>

    <RipHeader>
      <h4>So which of these is correct?</h4>
    </RipHeader>

    <RipParagraph display-inline>
      It depends! Some pros to setting up a store in a component.
    </RipParagraph>

    <ul>
      <li>
        Quick and easy! Barely more code than setting a <code>ref</code>
      </li>

      <li>
        You can be assured that the state defined in the component is contained to this component and its children
      </li>
    </ul>

    <RipParagraph display-inline>
      Some advantages to setting up a store as a composable.
    </RipParagraph>

    <ul>
      <li>
        Sharable! The store can be reused across components. By defining the store outside of the returned composition function, we can rest assured all consumers of the composable will be using the same store.
      </li>

      <li>
        Improved code organization. As stores grow, they often become increasingly complex in the form of derived state and more intricate setters. Abstracting this complexity out of your component code keeps the components squeaky clean.
      </li>

      <li>
        Single responsibility. Components should be responsible for rendering state, but should not be managing it.
      </li>
    </ul>

    <RipParagraph>
      As a rule, it's always encouraged to put a store within a composable. But if you are confident the state you're managing will remain super simple and not need to be shared, then it's perfectly ok to define the store in a component.
    </RipParagraph>

  </DocsContainer>
</template>

<script setup lang="ts">
import DocsContainer from "@frontend/docs/container/DocsContainer.vue";
import { RipHeader, RipParagraph } from "@ui/typography";
</script>
