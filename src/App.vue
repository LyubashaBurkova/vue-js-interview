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

<script>
import ContentBlock from './components/ContentBlock';
import TheFooter from './components/TheFooter';

export default {
  name: 'App',

  components: {
    ContentBlock,
    TheFooter
  },

  computed: {
    localAttrs () {
      const attrs = {}

      attrs.absolute = true
      attrs.fixed = false

      return attrs
    },
  },

  data: () => ({
    //
  }),
};
</script>
