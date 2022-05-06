import DefiningAnEntityStore from "./DefiningAnEntityStore.vue";

export default {
  title: "State/Core Concepts/Defining An Entity Store",
};

const Template = (args: Record<string, unknown>) => ({
  components: { DefiningAnEntityStore },
  setup() {
    return { args };
  },
  template: `<DefiningAnEntityStore v-bind="args" />`,
});

export const definingAnEntityStore = Template.bind({});
