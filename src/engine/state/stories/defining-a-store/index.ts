import DefiningAStore from "./DefiningAStore.vue";

export default {
  title: "State/Core Concepts/Defining A Store",
};

const Template = (args: Record<string, unknown>) => ({
  components: { DefiningAStore },
  setup() {
    return { args };
  },
  template: `<DefiningAStore v-bind="args" />`,
});

export const definingAStore = Template.bind({});
