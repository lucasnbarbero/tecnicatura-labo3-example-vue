export default {
  props: ["product"],
  emits: ["increment", "decrement", "delete"],
  template: `
    <div class="cart-item">
      <img :src="product.image" :alt="product.title" />
      <div class="cart-details">
        <h3>{{ product.title }}</h3>
        <p>$ {{ product.price }}</p>
        <p>Cantidad: {{ product.quantity }}</p>
        <button @click="$emit('decrement')">-1</button>
        <button @click="$emit('increment')">+1</button>
        <button @click="$emit('delete')">Eliminar</button>
      </div>
    </div>
  `,
};
