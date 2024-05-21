<template>
  <div class="product">
    <img :src="product.image" :alt="product.title" />
    <div class="product-details">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <p>$ {{ product.price }}</p>
      <p
        class="rating"
        :class="{
          'rating-red': product.rating.rate < 3,
          'rating-green': product.rating.rate >= 3,
        }"
      >
        {{ product.rating.rate }} puntos
        <span>({{ product.rating.count }} votos)</span>
      </p>
      <button @click="$emit('handleClick')">Agregar al carrito</button>
      <div style="margin-top: 5px">
        <a href="#">Ver detalles</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  emits: ["handleClick"],
};
</script>
