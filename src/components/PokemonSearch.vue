<template>
  <div>
    <form @submit.prevent="setPokemonUrl">
      <input class="border-gray-500" type="text" v-model="searchvalue" />
    </form>
    <div @click="setPokemonUrl"></div>
    <div>{{ data }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => {
    return {
      searchvalue: ""
    };
  },
  methods: {
    setPokemonUrl() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + this.searchvalue)
        .then(response => (this.data = response));
    }
  }
};
</script>

<style></style>
