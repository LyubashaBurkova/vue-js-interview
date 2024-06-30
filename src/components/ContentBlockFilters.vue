<template>
      <v-col
          cols="12"
          md="4"
      >
        <v-select
            v-model="selectCountry"
            :items="countries"
            clearable
            label="Filter by country"
        ></v-select>

        <v-select
            v-model="selectScore"
            :items="scores"
            clearable
            label="Filter by score"
        ></v-select>
    </v-col>
</template>

<script>
export default {
    name: 'ContentBlockFilters',

    data: () => ({
        countries:[
            'russia',
            'usa'
        ],
        scores: [
            '> 20',
            '< 10',
        ],
        variant: 'default',
        selectCountry: null,
        selectScore: null
    })
}
</script>