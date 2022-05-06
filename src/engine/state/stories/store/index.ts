import Store from "./Store.vue";

export default {
  title: "State/API/Store",
};

const Template = (args: Record<string, unknown>) => ({
  components: { Store },
  setup() {
    return { args };
  },
  template: `<Store v-bind="args" />`,
});

export const store = Template.bind({});
