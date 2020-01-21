<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { VueGithubCorners } from 'vue2-github-corners';

  import VueYandexShare from '@/components/vue-yandex-share';
  import WrapperDemo from '@/components/wrapper-demo';

  @Component<App>({
    components: { VueYandexShare, VueGithubCorners, WrapperDemo },
  })
  export default class App extends Vue {
    /**
     * Параметры компонента VueYandexShare
     */
    options: { [key: string]: any } = {
      accessToken: null,
      bare: false,
      counter: false,
      copy: 'last',
      description: null,
      direction: 'horizontal',
      hashtags: null,
      image: null,
      lang: 'ru',
      limit: 24,
      popupDirection: 'bottom',
      popupPosition: 'inner',
      size: 'm',
      title: null,
      url: null,
      services: [
        'blogger',
        'delicious',
        'digg',
        'evernote',
        'facebook',
        'gplus',
        'linkedin',
        'lj',
        'moimir',
        'odnoklassniki',
        'pinterest',
        'pocket',
        'qzone',
        'reddit',
        'renren',
        'sinaWeibo',
        'skype',
        'surfingbird',
        'telegram',
        'tencentWeibo',
        'tumblr',
        'twitter',
        'viber',
        'vkontakte',
        'whatsapp',
      ],
    };

    mounted() {
      console.log(process.env.npm_package_version);
    }
  }
</script>

<template>
  <main class="app">
    <vue-github-corners
      repo-url="//github.com/alex-lit/vue-yandex-share"
      cat-color="var(--white)"
      bg-color="var(--amber--900)"
    ></vue-github-corners>

    <wrapper-demo>
      <vue-yandex-share v-bind="options"></vue-yandex-share>

      <template #config>
        <el-form size="mini" label-position="top">
          <!-- services -->
          <el-form-item :label="`Список поддерживаемых соцсетей`">
            <el-select v-model="options.services" multiple :popper-append-to-body="false">
              <el-option
                v-for="item in [
                  'blogger',
                  'delicious',
                  'digg',
                  'evernote',
                  'facebook',
                  'gplus',
                  'linkedin',
                  'lj',
                  'moimir',
                  'odnoklassniki',
                  'pinterest',
                  'pocket',
                  'qzone',
                  'reddit',
                  'renren',
                  'sinaWeibo',
                  'skype',
                  'surfingbird',
                  'telegram',
                  'tencentWeibo',
                  'tumblr',
                  'twitter',
                  'viber',
                  'vkontakte',
                  'whatsapp',
                ]"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!-- /services -->

          <!-- size -->
          <el-form-item :label="`Размер кнопок соцсетей`">
            <el-select v-model="options.size" :popper-append-to-body="false">
              <el-option v-for="item in ['m', 's']" :key="item" :label="item" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- /size -->

          <!-- counter -->
          <el-form-item label="Признак того, что на кнопке соцсети отображается счетчик публикаций">
            <el-switch v-model="options.counter"></el-switch>
          </el-form-item>
          <!-- /counter -->

          <!-- limit -->
          <el-form-item
            :label="
              `Количество соцсетей, отображаемых в виде кнопок.
               Используется если нужно встроить в блок много соцсетей, а также чтобы
               блок занимал мало места на странице. Не вошедшие в лимит соцсети будут
               отображаться в pop-up по нажатию кнопки`
            "
            clearable
          >
            <el-input-number v-model="options.limit" :min="0" :max="24"></el-input-number>
          </el-form-item>
          <!-- /limit -->

          <!-- direction -->
          <el-form-item label="Направление списка кнопок">
            <el-select v-model="options.direction" :popper-append-to-body="false">
              <el-option
                v-for="item in ['horizontal', 'vertical']"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!-- /direction -->

          <!-- popupDirection -->
          <el-form-item label="Направление открытия pop-up">
            <el-select v-model="options.popupDirection" :popper-append-to-body="false">
              <el-option v-for="item in ['bottom', 'top']" :key="item" :label="item" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- /popupDirection -->

          <!-- popupPosition -->
          <el-form-item
            :label="
              `Расположение pop-up относительно контейнера блока. Значение outer
               может понадобиться в том случае, если из-за специфики верстки вашего
               сайта pop-up обрезается соседними элементами страницы`
            "
          >
            <el-select v-model="options.popupPosition" :popper-append-to-body="false">
              <el-option v-for="item in ['inner', 'outer']" :key="item" :label="item" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- /popupPosition -->

          <!-- copy -->
          <el-form-item
            :label="
              `Позиция кнопки 'Скопировать ссылку'. Кнопка Скопировать ссылку
               может отображаться, если используется параметр limit`
            "
          >
            <el-select v-model="options.copy" :popper-append-to-body="false">
              <el-option
                v-for="item in ['first', 'last', 'hidden']"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!-- /copy -->

          <!-- lang -->
          <el-form-item
            label="Язык блока. Локализуются подписи кнопок соцсетей и кнопка Скопировать ссылку"
          >
            <el-select v-model="options.lang" :popper-append-to-body="false">
              <el-option
                v-for="item in ['az', 'be', 'en', 'hy', 'ka', 'kk', 'ro', 'ru', 'tr', 'tt', 'uk']"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!-- /lang -->

          <!-- title -->
          <el-form-item :label="`Заголовок, которым нужно поделиться`" clearable>
            <el-input v-model="options.title" clearable></el-input>
          </el-form-item>
          <!-- /title -->

          <!-- description -->
          <el-form-item label="Текст, которым нужно поделиться">
            <el-input v-model="options.description" clearable></el-input>
          </el-form-item>
          <!-- /description -->

          <!-- url -->
          <el-form-item :label="`Ссылка, которой нужно поделиться`" clearable>
            <el-input v-model="options.url" clearable></el-input>
          </el-form-item>
          <!-- /url -->

          <!-- hashtags -->
          <el-form-item :label="`Хэштеги. Актуальны и работают только для Твиттера`" clearable>
            <el-input v-model="options.hashtags" clearable></el-input>
          </el-form-item>
          <!-- /hashtags -->

          <!-- accessToken -->
          <el-form-item
            :label="
              `Токен для снятия ограничения запросов на получение счетчика. Актуален и работает только для Facebook`
            "
            clearable
          >
            <el-input v-model="options.accessToken" clearable></el-input>
          </el-form-item>
          <!-- /accessToken -->
        </el-form>
      </template>
    </wrapper-demo>
  </main>
</template>

<style lang="postcss" scoped>
  .app {
    min-width: 800px;
  }
</style>

<style lang="postcss" scoped>
  .github-corners {
    position: sticky;
    z-index: 100;
    top: 0;
    right: 0;
  }
</style>

<style lang="postcss" scoped>
  .el-form {
    display: grid;
  }
</style>

<style lang="postcss" scoped>
  .el-select {
    width: 100%;
  }
</style>
