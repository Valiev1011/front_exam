export default {
  path: "/superadmin",
  name: "superadmin",
  component: () => {
    return import("@/views/super/Super.vue");
  },

  children: [
    {
      path: "/users",
      name: "users",
      component: () => {
        return import("@/views/super/Users.vue");
      },
    },
    {
      path: "/singleUser/:id",
      name: "singleUser",
      component: () => {
        return import("@/views/super/SingleUser.vue");
      },
    },
  ],
};
