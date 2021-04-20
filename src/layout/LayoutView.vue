<template>
  <v-row justify="center">
    <v-col cols="12" sm="6">
      <slot />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LayoutView extends Vue {}
</script>
