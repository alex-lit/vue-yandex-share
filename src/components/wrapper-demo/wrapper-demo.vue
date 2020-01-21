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

<style lang="postcss" scoped>
  .wrapper-demo {
    display: grid;
    max-height: 100vh;
    background-color: var(--gray--100);
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
    padding: 40px;
    background-image: url('./assets/images/transparent.png');
  }

  .wrapper-demo__widget-config {
    overflow: auto;
    max-height: inherit;
    padding: 40px;
    background-color: var(--gray--100);
    box-shadow: -5px 8px 20px rgba(0, 0, 0, 0.05);
    filter: hue-rotate(-180deg) invert(1) contrast(1);
  }
</style>

<style lang="postcss" scoped>
  .el-divider {
    & >>> .el-divider__text {
      background-color: var(--gray--100);
    }
  }
</style>
