<template>
  <DocsContainer>
    <RipHeader>
      <h3>Store API</h3>
    </RipHeader>

    <RipHeader>
      <h5>Property Refs</h5>
    </RipHeader>

    <RipParagraph display-inline>
      Every property of the store's state can be accessed directly from the
      store as a <code>Ref</code>. These can be used to get/set properties from
      the store
    </RipParagraph>

    <pre>
      <code>
        const { apple, orange } = useStore("My Store", {
          apple: { color: "red" },
          orange: { size: "big" }
        });

        console.log(apples.value.color; // "red"
        orange.value.size = "huge";
        console.log(orange.value.size); // "huge"
      </code>
    </pre>

    <RipHeader>
      <h5><code>$state</code></h5>
    </RipHeader>

    <RipParagraph>
      Reactive object used to get/set the current state of the code
    </RipParagraph>

    <pre>
      <code>
        const { $state } = useStore("My Store", { apples: true });

        console.log($state.apples); // true
        $state.apples = !$state.apples;
        console.log($state.apples); // false
      </code>
    </pre>

    <RipHeader>
      <h5><code>$options</code></h5>
    </RipHeader>

    <RipParagraph>
      Object used to get/set the store's <code>StoreOptions</code>
    </RipParagraph>

    <pre>
      <code>
        const { $options } = useStore("My Store", { apples: true }, { resettable: true });

        console.log($options.resettable); // true
        $options.resettable = false;
        console.log($options.resettable); // false
      </code>
    </pre>

    <RipHeader>
      <h5><code>patch(diff: Partial&lt;T&gt;)</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Method to merge a <code>Partial</code> of a store's state into the state
    </RipParagraph>

    <pre>
      <code>
        const { $state, patch } = useStore("My Store", { apples: true });

        console.log($state); // { apples: true }
        patch({ apples: false });
        console.log($state); // { apples: false }
      </code>
    </pre>

    <RipHeader>
      <h5>
        <code>
          mergeProperty(key: K, diff: Partial&lt;T[K]&gt;, actionName?: StateDevToolsAction)
        </code>
      </h5>
    </RipHeader>

    <RipParagraph display-inline>
      Method to merge a <code>Partial</code> of a store's property into a store's property
    </RipParagraph>

    <pre>
      <code>
        const { payload, mergeProperty } = useStore("My Store", {
          payload: { name: "Jay", address: "The Moon" }
        });

        console.log(payload); // { name: "Jay", address: "The Moon" }
        mergeProperty("payload", { address: "The Stars" });
        console.log(payload); // { name: "Jay", address: "The Stars" }
      </code>
    </pre>

    <RipHeader>
      <h5>
        <code>
          setter(key: K)
        </code>
      </h5>
    </RipHeader>

    <RipParagraph display-inline>
      Returns a setter function for a given store property. This method should only be used when the setter is shared, most commonly whe it is returned from a composable
    </RipParagraph>

    <pre>
      <code>
        // my-store.ts
        const { setter } = useStore("My Store", { apples: true });

        export function useMyStore() {
          return {
            setApples: setter("apples"),
          }
        }

        //MyComponent.vue
        &lt;script setup lang="ts"&gt;
        import { useMyStore } from "./my-store.ts";

        const { setApples } = useMyStore();
        setApples(false);
        &lt;/ script&gt;
      </code>
    </pre>

    <RipHeader>
      <h5>
        <code>
          reset()
        </code>
      </h5>
    </RipHeader>

    <RipParagraph display-inline>
      Reset's the store's state to its initial state. Note - the <code>resettable</code> option must be enabled when defining the store.
    </RipParagraph>

    <pre>
      <code>
        const { apples, reset } = useStore(
          "My Store",
          { apples: true },
          { resettable: true }
        );

        apples.value = false;
        console.log(apples.value); // false
        reset();
        console.log(apples.value); // true
      </code>
    </pre>
  </DocsContainer>
</template>

<script setup lang="ts">
import DocsContainer from "@frontend/docs/container/DocsContainer.vue";
import { RipHeader, RipParagraph } from "@ui/typography";
</script>
