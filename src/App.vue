<template>
  <span>
    <VueYandexShare></VueYandexShare>
    <VueYandexShare></VueYandexShare>
    <VueYandexShare></VueYandexShare>
  </span>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import VueYandexShare from '@/components/vue-yandex-share';

  @Component({
    components: {
      VueYandexShare,
    },
  })
  export default class App extends Vue {}
</script>
