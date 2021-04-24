<template>
  <layout-main :navigation="navigation">
    <p>$vuetify.breakpoint</p>
    <p>
      <a
        href="https://vuetifyjs.com/en/features/breakpoints/#breakpoint-service-object"
      >
        Docs
      </a>
    </p>
    <pre>
      name: {{ $vuetify.breakpoint.name }}
      mobile: {{ $vuetify.breakpoint.mobile }}
      mobileBreakpoint: {{ $vuetify.breakpoint.mobileBreakpoint }}
      thresholds: {{ $vuetify.breakpoint.thresholds }}
      height: {{ $vuetify.breakpoint.height }}
      width: {{ $vuetify.breakpoint.width }}
      scrollBarWidth: {{ $vuetify.breakpoint.scrollBarWidth }}
      xl: {{ $vuetify.breakpoint.xl }}
      xl: {{ $vuetify.breakpoint.xl }}
      lg: {{ $vuetify.breakpoint.lg }}
      lgAndDown: {{ $vuetify.breakpoint.lgAndDown }}
      lgAndUp: {{ $vuetify.breakpoint.lgAndUp }}
      lgOnly: {{ $vuetify.breakpoint.lgOnly }}
      md: {{ $vuetify.breakpoint.md }}
      mdAndDown: {{ $vuetify.breakpoint.mdAndDown }}
      mdAndUp: {{ $vuetify.breakpoint.mdAndUp }}
      mdOnly: {{ $vuetify.breakpoint.mdOnly }}
      sm: {{ $vuetify.breakpoint.sm }}
      smAndDown: {{ $vuetify.breakpoint.smAndDown }}
      smAndUp: {{ $vuetify.breakpoint.smAndUp }}
      smOnly: {{ $vuetify.breakpoint.smOnly }}
      xs: {{ $vuetify.breakpoint.xs }}
      xsOnly: {{ $vuetify.breakpoint.xsOnly }}
    </pre>
  </layout-main>
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

  public foo = this.$vuetify;
}
</script>
