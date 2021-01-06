<template>
  <div>
    <div
      class="flex justify-center items-center"
      v-for="(pokemon, index) in pokemons"
      :key="index"
      @click="setPokemonUrl(pokemon.url)"
    >
      <img
        class="mx-3"
        :src="imageUrl + pokemon.id + '.png'"
        width="100"
        height="100"
      />
      {{ pokemon.name }} : {{ pokemon.id }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemons: [],
      data: null,
      index: null,
      pokeUrl: null,
      imageUrl: "https://pokeres.bastionbot.org/images/pokemon/"
    };
  },
  methods: {
    setPokemonUrl(url) {
      this.$emit("setPokemonUrl", url);
    }
  },
  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(
      response =>
        (this.data = response.data.results.forEach(pokemon => {
          pokemon.id = pokemon.url
            .split("/")
            .filter(function(part) {
              return !!part;
            })
            .pop();
          this.pokemons.push(pokemon);
        }))
    );
  }
};
</script>

<style></style>
