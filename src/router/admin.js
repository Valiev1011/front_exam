export default {
  path: "/admin",
  name: "admin",
  component: () => {
    return import("@/views/admin/Admin.vue");
  },

  children: [
    {
      path: "/products",
      name: "products",
      component: () => {
        return import("@/views/admin/Products.vue");
      },
    },
    {
      path: "/singleProduct/:id",
      name: "singleProduct",
      component: () => {
        return import("@/views/admin/SingleProduct.vue");
      },
    },
  ],
};
