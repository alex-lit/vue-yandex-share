<script lang="ts">
  import '@/plugins/element-ui';

  import { Component, Vue } from 'vue-property-decorator';

  @Component<WrapperDemo>({})
  export default class WrapperDemo extends Vue {}
</script>

<template>
  <section class="wrapper-demo">
    <aside class="wrapper-demo__widget-config">
      <el-divider content-position="left">
        <i class="el-icon-s-operation"></i>
        Параметры
      </el-divider>
      <!-- slot:config -->
      <slot name="config"></slot>
      <!-- /slot:config -->
    </aside>

    <article class="wrapper-demo__widget-wrapper">
      <!-- slot:default -->
      <slot></slot>
      <!-- /slot:default -->
    </article>
  </section>
</template>

<style lang="scss" scoped>
  .wrapper-demo {
    display: grid;
    max-height: 100vh;
    background-color: var(--white);
    grid-template-columns: 400px 1fr;
  }

  .wrapper-demo__widget-wrapper {
    display: flex;
    overflow: auto;
    max-height: inherit;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-image: url('./assets/images/transparent.png');
  }

  .wrapper-demo__widget-config {
    overflow: auto;
    max-height: inherit;
    padding: 2rem;
    background-color: var(--white);
    box-shadow: -5px 8px 20px rgba(0, 0, 0, 0.05);

    & ::v-deep {
      .el-form {
        display: grid;
        gap: 2rem;
      }

      & .el-divider {
        & >>> .el-divider__text {
          background-color: var(--white);
        }
      }

      & .el-form-item {
        & .el-form-item__label {
          line-height: 1.4;
        }
      }

      .el-select {
        width: 100%;
      }
    }
  }
</style>
