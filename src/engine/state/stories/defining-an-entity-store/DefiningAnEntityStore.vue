<template>
  <DocsContainer>
    <RipHeader>
      <h3>Defining an Entity Store</h3>
    </RipHeader>

    <RipParagraph>Entity stores should almost always be defined as a composable, as they are generally shared by design.</RipParagraph>

    <RipHeader>
      <h4>Defining an Entity Store as a Composable</h4>
    </RipHeader>

     <pre>
      <code>
        // apples.store.ts
        const store = useEntityStore("Apples", {
          entities: [] as Apples[],
          loading: false
        });

        export function useApplesStore() {
          const fetch = async () => {
            const apples = await Promise.resolve([
              { id: "apple1", color: "red" },
              { id: "apple2", color: "green" },
            ]);

            store.apples.value = apples;
          }

          return {
            apples: store.entities,
            fetch,
          };
        }

        // MyComponent.vue
        &lt;script setup lang="ts"&gt;
          import { useApplesStore } from "./apples.store.ts";

          const { apples, fetch } = useMyStore();

          await fetch();

          console.log(apples.value.length); // 2
        &lt;/script&gt;
      </code>
    </pre>
  </DocsContainer>
</template>

<script setup lang="ts">
import DocsContainer from "@frontend/docs/container/DocsContainer.vue";
import { RipHeader, RipParagraph } from "@ui/typography";
</script>
