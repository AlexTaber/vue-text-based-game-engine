<template>
  <DocsContainer>
    <RipHeader>
      <h3>Entity Store API</h3>
    </RipHeader>

    <RipHeader>
      <h5>Extends the Base Store</h5>
    </RipHeader>

    <RipParagraph display-inline>
      Entity stores extend the base <code>Store</code>. They can do everything a normal store can, the only stipulation is that they <i>must</i> have an <code>entities</code> property!
    </RipParagraph>

    <pre>
      <code>
        interface Apple {
          id: ID;
          color: string;
        }

        const { entities, loading } = useEntityStore("Apples", {
          entities: [] as Apple[],
          loading: false;
        });

        loading.value = true;
        console.log(loading.value); // true
        console.log(entities.value.length); // 0
        entities.value.push({ id: "apple1", color: "red" });
        console.log(entities.value.length); // 1
      </code>
    </pre>

    <RipParagraph display-inline>
      Since an entity store must have be defined with an <code>entities</code> property. <code>store.entities</code> will therefore always be defined as a <code>Ref</code> of the store's entities.
    </RipParagraph>

    <RipParagraph display-inline>
      Below is everything an Entity Store can do in addition to the base store!
    </RipParagraph>

    <RipHeader>
      <h5><code>setEntities(entities: T[])</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Sets the array of entities in the store
    </RipParagraph>

    <pre>
      <code>
        const { entities, setEntities } = useEntityStore("Apples", { entities: [] });

        console.log(entities.value.length); // 0
        setEntities([
          { id: "apple1", color: "red" },
          { id: "apple2", color: "green" },
        ]);
        console.log(entities.value.length); // 2
      </code>
    </pre>

    <RipHeader>
      <h5><code>add(entity: T)</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Adds an entity to the store
    </RipParagraph>

    <pre>
      <code>
        const { entities, add } = useEntityStore("Apples", { entities: [] });

        console.log(entities.value.length); // 0
        add({ id: "apple1", color: "red" });
        console.log(entities.value.length); // 1
      </code>
    </pre>

    <RipHeader>
      <h5><code>update(id: ID, diff: Partial&lt;T&gt;)</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Updates an entity in the store by id
    </RipParagraph>

    <pre>
      <code>
        const { entities, update } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
          ]
        });

        console.log(entities.value[0].color); // "red"
        update("apple1", { color: "green" });
        console.log(entities.value[0].color); // "green"
      </code>
    </pre>

    <RipHeader>
      <h5><code>upsert(entity: T)</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Updates an entity in the store if it exists, or adds it to the store if it does not
    </RipParagraph>

    <pre>
      <code>
        const { entities, upsert } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
          ]
        });

        console.log(entities.value[0].color); // "red"
        upsert({ id: "apple1", color: "green" });
        console.log(entities.value[0].color); // "green"
        upsert({ id: "apple2", color: "blue" });
        console.log(entities.value[1].color); // "blue"
      </code>
    </pre>

    <RipHeader>
      <h5><code>remove(id: ID)</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Removes an entity from the store by id
    </RipParagraph>

    <pre>
      <code>
        const { entities, remove } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
          ]
        });

        console.log(entities.value.length); // 1
        remove("apple1");
        console.log(entities.value.length); // 0
      </code>
    </pre>

    <RipHeader>
      <h5><code>active</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Returns the active entity as defined by the <code>setActive</code> method
    </RipParagraph>

    <RipHeader>
      <h5><code>setActive(id: ID)</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Sets the <code>active</code> entity in the store by <code>id</code>
    </RipParagraph>

    <pre>
      <code>
        const { active, setActive } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
            { id: "apple2", color: "green" },
          ]
        });

        setActive("apple1");
        console.log(active.value.color); // "red"
        setActive("apple2");
        console.log(active.value.color); // "green"
      </code>
    </pre>

    <RipHeader>
      <h5><code>setNextActive()</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Sets the entity after the <code>active</code> entity in the store (if any) as the new active entity
    </RipParagraph>

    <pre>
      <code>
        const { active, setActive, setNextActive } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
            { id: "apple2", color: "green" },
          ]
        });

        setActive("apple1");
        console.log(active.value?.color); // "red"
        setNextActive();
        console.log(active.value?.color); // "green"
        setNextActive();
        console.log(active.value?.color); // undefined
      </code>
    </pre>

    <RipHeader>
      <h5><code>setPreviousActive()</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Sets the entity before the <code>active</code> entity in the store (if any) as the new active entity
    </RipParagraph>

    <pre>
      <code>
        const { active, setActive, setPreviousActive } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
            { id: "apple2", color: "green" },
          ]
        });

        setActive("apple2");
        console.log(active.value?.color); // "green"
        setPreviousActive();
        console.log(active.value?.color); // "red"
        setPreviousActive();
        console.log(active.value?.color); // undefined
      </code>
    </pre>

    <RipHeader>
      <h5><code>previous</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      A <code>computed</code> wrapper of the previous entity relative to the <code>active></code> entity (if any)
    </RipParagraph>

    <pre>
      <code>
        const { previous, setActive } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
            { id: "apple2", color: "green" },
          ]
        });

        setActive("apple1");
        console.log(previous.value?.id); // undefined
        setActive("apple2");
        console.log(previous.value?.id); // "red"
      </code>
    </pre>

    <RipHeader>
      <h5><code>next</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      A <code>computed</code> wrapper of the next entity relative to the <code>active></code> entity (if any)
    </RipParagraph>

    <pre>
      <code>
        const { next, setActive } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
            { id: "apple2", color: "green" },
          ]
        });

        setActive("apple1");
        console.log(next.value?.id); // "green"
        setActive("apple2");
        console.log(next.value?.id); // undefined
      </code>
    </pre>

    <RipHeader>
      <h5><code>findById(id: ID): T | undefined</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Finds an entity in the store by id
    </RipParagraph>

    <pre>
      <code>
        const { findById } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
            { id: "apple2", color: "green" },
          ]
        });

        const a = findById("apples1");
        console.log(a?.color); // "red"
        a = findById("apples2");
        console.log(a?.color); // "green"
        a = findById("apples3");
        console.log(a?.color); // undefined
      </code>
    </pre>

    <RipHeader>
      <h5><code>findByIds(id: ID[]): T[]</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Finds an array of entities in the store by ids
    </RipParagraph>

    <pre>
      <code>
        const { findById } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
            { id: "apple2", color: "green" },
          ]
        });

        const a = findByIds(["apple1", "apple2"]);
        console.log(a.length); // 2
        const a = findByIds(["apple1", "apple3"]);
        console.log(a.length); // 1
      </code>
    </pre>

    <RipHeader>
      <h5><code>prepend(entity: T)</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Prepends an entity to the front of the entities in the store
    </RipParagraph>

    <pre>
      <code>
        const { entities, prepend } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
          ]
        });

        console.log(entities.value[0].color); // "red"
        prepend({ id: "apple2", color: "green" });
        console.log(entities.value[0].color); // "green"
      </code>
    </pre>

    <RipHeader>
      <h5><code>concat(entities: T[])</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Adds multiple entities to the end of the entities array
    </RipParagraph>

    <pre>
      <code>
        const { entities, concat } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
          ]
        });

        console.log(entities.value.length); // 1
        concat([ { id: "apple2", color: "green" }, { id: "apple3", color: "blue" } ]);
        console.log(entities.value.length); // 3
      </code>
    </pre>

    <RipHeader>
      <h5><code>deduplicate()</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      Removes any duplicate entities in the store by id. If duplicate entities are found, the first is kept.
    </RipParagraph>

    <pre>
      <code>
        const { entities, deduplicate } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
            { id: "apple1", color: "green" },
          ]
        });

        console.log(entities.value.length); // 2
        deduplicate();
        console.log(entities.value.length); // 1
        console.log(entities.value[0].color); // "red"
      </code>
    </pre>

    <RipHeader>
      <h5><code>entitiesMap</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      A <code>computed</code> object where the keys are entity ids, and the values are the corresponding entity.
    </RipParagraph>

    <pre>
      <code>
        const { entitiesMap } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
            { id: "apple2", color: "green" },
          ]
        });

        console.log(entitiesMap.value["apple1"]?.color); // "red"
        console.log(entitiesMap.value["apple2"]?.color); // "green"
      </code>
    </pre>

    <RipHeader>
      <h5><code>isEmpty</code></h5>
    </RipHeader>

    <RipParagraph display-inline>
      A <code>computed</code> wrapper on if the store's <code>entities</code> array is empty
    </RipParagraph>

    <pre>
      <code>
        const { isEmpty, setEntities } = useEntityStore("Apples", {
          entities: [
            { id: "apple1", color: "red" },
            { id: "apple2", color: "green" },
          ]
        });

        console.log(isEmpty.value); // false
        setEntities([]);
        console.log(isEmpty.value); // true
      </code>
    </pre>
  </DocsContainer>
</template>

<script setup lang="ts">
import DocsContainer from "@frontend/docs/container/DocsContainer.vue";
import { RipHeader, RipParagraph } from "@ui/typography";
</script>
