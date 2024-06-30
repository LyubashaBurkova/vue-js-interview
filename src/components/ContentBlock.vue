<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>
      <ContentBlockFilters />
      <ContentBlockList />
    </v-row>
  </v-container>
</template>

<script setup>
import ContentBlockFilters from '@/components/ContentBlockFilters'
import ContentBlockList from '@/components/ContentBlockList'
</script>
