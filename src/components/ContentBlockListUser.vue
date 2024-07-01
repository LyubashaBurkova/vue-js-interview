<template>
  <v-list-item class="list-item">   
    <v-menu
      transition="slide-x-transition"
    >
      <template v-slot:activator="{ props }">
        <div v-bind="props">
          <v-img :src="user.avatar" />
        </div>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>{{ user.country }}</v-list-item-title>
        </v-list-item>
     </v-list>
    </v-menu>

    <div>
      <v-list-item-title v-html="user.title" />
      <v-list-item-subtitle v-html="user.subtitle" />
    </div>
  </v-list-item>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
  user: {
    type: Object,
    default: () => ({}),
  }
})
</script>

<style scoped>
.list-item {
  padding: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  cursor: pointer;
}
</style>