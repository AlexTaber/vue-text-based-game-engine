import EntityStore from "./EntityStore.vue";

export default {
  title: "State/API/Entity Store",
};

const Template = (args: Record<string, unknown>) => ({
  components: { EntityStore },
  setup() {
    return { args };
  },
  template: `<EntityStore v-bind="args" />`,
});

export const entityStore = Template.bind({});
