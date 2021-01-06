<template>
  <div>
    <div v-for="(value, index) in pokemon.types" :key="'value' + index">
      {{ value.type.name }}>
    </div>
    {{ data }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["pokemonUrl"],
  data: () => {
    return {
      show: false,
      pokemon: {}
    };
  },
  mounted() {
    axios.get(this.pokemonUrl).then(response => (this.data = response));
  }
};
</script>

<style></style>
