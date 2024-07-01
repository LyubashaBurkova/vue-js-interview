<template>
  <v-col
    cols="12"
    md="4"
  >
    <div v-if="processing" class="preloader-wrapper">
      <v-progress-circular
        :size="70"
        :width="7"
        :indeterminate="true"
        color="primary"
      />
    </div>
    <transition name="fade">
      <v-card
        v-if="!processing"
        max-width="450"
        class="mx-auto"
      >
        <v-list three-line>
          <h3 class="subheader">{{ listHeader }}</h3>
          <ContentBlockListUser
            v-for="(item, index) in users"
            :key="index"
            :user="item"
          />
        </v-list>
      </v-card>
    </transition>
  </v-col>
</template>
<script setup>
  import ContentBlockListUser from '@/components/ContentBlockListUser'
  import { useMainStore } from '@/stores/index'
  import { ref, computed, watch } from 'vue'

  const mainStore = useMainStore()
  const listHeader = mainStore.users.header

  const users = computed(() => {
    return mainStore.filteredUsers
  });

  const processing = ref(false)

  watch(() => mainStore.processing,(newValue) => {
    processing.value = newValue
  })

  //если users вынести в api

  /*import { onMounted } from 'vue';

  onMounted(() => {
      getData()
  })

  const data = ref([])
  const error = ref('')

  async function getData() {
    processing.value = true
    mainStore.setProcessing(true)
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных')
      }
      const jsonData = await response.json()
      data.value = jsonData
    } catch (err) {
      error.value = err.message
    } finally {
      processing.value = false;
      mainStore.setUsers(data.value)
      mainStore.setCountryFilter(null)
      mainStore.setScoreFilter(null)
      mainStore.setProcessing(false)
    }
  }*/

</script>

<style>
.preloader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.subheader {
  font-weight: bold;
  padding: 2rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>