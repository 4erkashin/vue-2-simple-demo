<template>
  <v-card outlined>
    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle v-if="$slots.subtitle">
      <slot name="subtitle" />
    </v-card-subtitle>

    <v-card-text>
      {{ text }}
    </v-card-text>

    <v-card-actions v-if="$slots.actions">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NoteItem extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  text!: string;

  @Prop({
    type: String,
    required: true,
  })
  title!: string;
}
</script>
