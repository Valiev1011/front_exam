export default {
  path: "/super",
  name: "super",
  component: () => {
    return import("@/views/super/Super.vue");
  },
};
