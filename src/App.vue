<template>
  <div class="bg-gray-400">
    <PokemonSearch @setPokemonUrl="setPokemonUrl"></PokemonSearch>

    <PokeList @setPokemonUrl="setPokemonUrl" />
    <PokeDetails :pokemonUrl="pokemonUrl"> </PokeDetails>
  </div>
</template>

<script>
import PokeList from "./components/PokeList.vue";
import PokeDetails from "./components/PokeDetails.vue";
import PokemonSearch from "./components/PokemonSearch.vue";

export default {
  name: "App",
  components: {
    PokeList,
    PokeDetails,
    PokemonSearch
  },
  methods: {
    closeDetail() {
      this.showDetail = false;
    },
    setPokemonUrl(url) {
      this.pokemonUrl = url;
      this.showDetail = true;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
