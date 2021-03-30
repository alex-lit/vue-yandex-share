<script lang="ts">
  import '@/plugins/element-ui';

  import { Component, Vue } from 'vue-property-decorator';

  /**
   *
   */
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
    background-color: var(--white);
    display: grid;
    grid-template-columns: 400px 1fr;
    max-height: 100vh;
  }

  .wrapper-demo__widget-wrapper {
    align-items: center;
    background-image: url('./assets/images/transparent.png');
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    max-height: inherit;
    overflow: auto;
    padding: 2rem;
  }

  .wrapper-demo__widget-config {
    background-color: var(--white);
    box-shadow: -5px 8px 20px rgba(0, 0, 0, 0.05);
    max-height: inherit;
    overflow: auto;
    padding: 2rem;

    ::v-deep {
      .el-form {
        display: grid;
        gap: 2rem;
      }

      .el-select {
        width: 100%;
      }

      .el-divider {
        ::v-deep & {
          .el-divider__text {
            background-color: var(--white);
          }
        }
      }

      .el-form-item {
        .el-form-item__label {
          line-height: 1.4;
        }
      }
    }
  }
</style>
