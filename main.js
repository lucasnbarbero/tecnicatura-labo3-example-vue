Vue.createApp({
  data() {
    return {
      cart: 0,
    };
  },
  computed: {
    productCounter() {
      return this.cart;
    },
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
