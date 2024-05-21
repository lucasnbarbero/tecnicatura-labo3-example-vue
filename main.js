Vue.createApp({
  data() {
    return {
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    deleteToCart() {
      this.cart--;
    },
  },
}).mount("#app");
