<template>
  <layout-main :navigation="navigation" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayoutMain from '@/layout/LayoutMain.vue';

@Component({
  name: 'ViewMain',
  components: {
    LayoutMain,
  },
})
export default class ViewNotesList extends Vue {
  public navigation = ['Dashboard', 'Messages', 'Profile', 'Updates'];
}
</script>
