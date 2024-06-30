<template>
      <v-col
          cols="12"
          md="4"
      >
        <v-select
            v-model="selectedCountry"
            :items="countries"
            clearable
            label="Filter by country"
        ></v-select>

        <v-select
            v-model="selectedScore"
            :items="scores"
            clearable
            label="Filter by score"
        ></v-select>
    </v-col>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useMainStore } from '@/stores/index'
  const mainStore = useMainStore()

  const selectedCountry = ref(null)
  const selectedScore = ref(null)
  selectedCountry.value = mainStore.selectedCountry
  selectedScore.value = mainStore.selectedScore

  watch(selectedCountry, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`);
    mainStore.setCountryFilter(selectedCountry.value)
  });

  watch(selectedScore, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`);
    mainStore.setScoreFilter(selectedScore.value)
  });
</script>