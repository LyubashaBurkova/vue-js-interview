import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    users: {
        header: 'List',
        list: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
            country: 'usa',
            score: 23
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
            country: 'usa',
            score: 2
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
            country: 'usa',
            score: 25
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Birthday gift',
            subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            country: 'russia',
            score: 5
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Recipe to try',
            subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            country: 'russia',
            score: 30
          }
        ]
      },
    filteredUsers: [],
    countries:[
      'russia',
      'usa'
    ],
    scores: [
      '> 20',
      '< 10',
    ],
    selectedCountry: '',
    selectedScore: '',
    processing: false
  }),
  actions: {
    setCountryFilter(country) {
      this.selectedCountry = country
    },
    setScoreFilter(score) {
      this.selectedScore = score
    },
    setUsers(users) {
      this.users = users
    },
    setFilteredUsers(users) {
      this.filteredUsers = users
    },
    setProcessing(processing) {
      this.processing = processing
    }
  },
});