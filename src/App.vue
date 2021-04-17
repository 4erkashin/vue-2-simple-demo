<template>
  <v-app>
    <v-app-bar color="primary" app dark dense>
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App',
})
export default class extends Vue {
  get title() {
    return `${process.env.VUE_APP_TITLE} — ${this.$route.meta.title}`;
  }
}
</script>
