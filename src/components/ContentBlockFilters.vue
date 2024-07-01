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
    />

    <v-select
      v-model="selectedScore"
      :items="scores"
      clearable
      label="Filter by score"
    />
</v-col>
</template>

<script setup>
  import { ref, watch, onMounted } from 'vue'
  import { useMainStore } from '@/stores/index'
  const mainStore = useMainStore()

  const countries = mainStore.countries
  const scores = mainStore.scores

  const selectedCountry = ref(mainStore.selectedCountry)
  const selectedScore = ref(mainStore.selectedScore)

  const filteredUsers = ref([])

  onMounted(() => {
    addFilter(mainStore.selectedCountry, mainStore.selectedScore)
  })
  
  watch(selectedCountry, (newValue) => {
    addFilter(newValue, selectedScore.value)
  })

  watch(selectedScore, (newValue) => {
    addFilter(selectedCountry.value, newValue)
  })

  function filterUser(country, score) {
    if (country && score) {
      mainStore.setCountryFilter(country)
      mainStore.setScoreFilter(score)
      filteredUsers.value = mainStore.users.list
        .filter(user => user.country == country)
        .filter(user => performComparison(user.score, score))
    } else if (country) {
      mainStore.setCountryFilter(country)
      mainStore.setScoreFilter(null)
      filteredUsers.value = mainStore.users.list
        .filter(user => user.country == country)
    } else {
      mainStore.setCountryFilter(null)
      mainStore.setScoreFilter(score)
      filteredUsers.value = mainStore.users.list
        .filter(user => performComparison(user.score, score))
    }
    mainStore.setFilteredUsers(filteredUsers.value)
  }

  function addFilter(country, score) {
    mainStore.setProcessing(true)
    if (country || score) {
      filterUser(country, score)
    } else {
      mainStore.setCountryFilter(null)
      mainStore.setScoreFilter(null)
      mainStore.setFilteredUsers(mainStore.users.list)
    }
      mainStore.setProcessing(false)
  }


  function performComparison(value, comparisonString) {
    switch (comparisonString?.trim()) {
      case "> 20":
        return value > 20
      case "< 10":
        return value < 10
      default:
        throw new Error(`Unsupported comparison: ${comparisonString}`)
    }
  }
</script>