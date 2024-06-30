<template>
  <v-app>
    <v-main>
      <ContentBlock/>
    </v-main>

    <v-footer app v-bind="localAttrs">
      <TheFooter />
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';
import ContentBlock from './components/ContentBlock';
import TheFooter from './components/TheFooter';

const localAttrs = computed(() => {
    const attrs = ref({});

    attrs.absolute = true
    attrs.fixed = false

    return attrs
})
</script>
