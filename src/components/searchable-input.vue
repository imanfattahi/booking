<template>
   <input class="form-control" type="text" v-model="input" placeholder="Search city..." />
  <div class="item" v-for="item in filteredList()" :key="item">
    <p>{{ item }}</p>
  </div>
  <div class="item error" v-if="input&&!filteredList().length">
     <p>No results found!</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
let input = ref("");
const items = ["apple", "banana", "orange"];
function filteredList() {
  return items.filter((item) =>
    item.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>