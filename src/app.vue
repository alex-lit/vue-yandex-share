<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { VueGithubCorners } from 'vue2-github-corners';

  import VueYandexShare, {
    COLOR_SCHEMES,
    COPY_POSITIONS,
    DIRECTIONS,
    LANGUAGES,
    POPUP_DIRECTIONS,
    POPUP_POSITIONS,
    SERVICES,
    SHAPES,
    SIZES,
  } from '@/components/vue-yandex-share';
  import WrapperDemo from '@/components/wrapper-demo';

  @Component<App>({
    components: { VueYandexShare, VueGithubCorners, WrapperDemo },

    mounted() {
      console.log(process.env.npm_package_version);
    },
  })
  export default class App extends Vue {
    /**
     * Параметры компонента VueYandexShare
     */
    options: { [key: string]: any } = {
      bare: false,
      colorScheme: 'normal',
      copy: 'last',
      curtain: true,
      description: null,
      direction: 'horizontal',
      hashtags: 'vue,social',
      image: null,
      lang: 'ru',
      limit: SERVICES.length,
      moreButtonType: null,
      nonce: '',
      popupDirection: 'bottom',
      popupPosition: 'inner',
      services: ['facebook', 'telegram', 'twitter', 'vkontakte'],
      shape: 'normal',
      size: 'm',
      title: null,
      url: null,
      useLinks: false,
    };

    COLOR_SCHEMES = COLOR_SCHEMES;
    COPY_POSITIONS = COPY_POSITIONS;
    DIRECTIONS = DIRECTIONS;
    LANGUAGES = LANGUAGES;
    POPUP_DIRECTIONS = POPUP_DIRECTIONS;
    POPUP_POSITIONS = POPUP_POSITIONS;
    SERVICES = SERVICES;
    SHAPES = SHAPES;
    SIZES = SIZES;
  }
</script>

<template>
  <main class="app">
    <vue-github-corners
      bg-color="var(--amber--900)"
      cat-color="var(--white)"
      repo-url="//github.com/alex-lit/vue-yandex-share"
    ></vue-github-corners>

    <wrapper-demo>
      <vue-yandex-share v-bind="options"></vue-yandex-share>

      <template #config>
        <el-form label-position="top" size="mini">
          <!-- services -->
          <el-form-item label="Список поддерживаемых соцсетей">
            <el-select
              v-model="options.services"
              multiple
              :popper-append-to-body="false"
            >
              <el-option
                v-for="item in SERVICES"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!-- /services -->

          <!-- size -->
          <el-form-item label="Размер кнопок соцсетей">
            <el-select v-model="options.size" :popper-append-to-body="false">
              <el-option
                v-for="item in SIZES"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!-- /size -->

          <!-- limit -->
          <el-form-item
            clearable
            label="Количество соцсетей, отображаемых в виде кнопок.
               Используется если нужно встроить в блок много соцсетей, а также чтобы
               блок занимал мало места на странице. Не вошедшие в лимит соцсети будут
               отображаться в pop-up по нажатию кнопки"
          >
            <el-input-number
              v-model="options.limit"
              :max="SERVICES.length"
              :min="0"
            ></el-input-number>
          </el-form-item>
          <!-- /limit -->

          <!-- direction -->
          <el-form-item label="Направление списка кнопок">
            <el-select
              v-model="options.direction"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="item in DIRECTIONS"
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
            <el-select
              v-model="options.popupDirection"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="item in POPUP_DIRECTIONS"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!-- /popupDirection -->

          <!-- popupPosition -->
          <el-form-item
            label="Расположение pop-up относительно контейнера блока. Значение outer
               может понадобиться в том случае, если из-за специфики верстки вашего
               сайта pop-up обрезается соседними элементами страницы"
          >
            <el-select
              v-model="options.popupPosition"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="item in POPUP_POSITIONS"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!-- /popupPosition -->

          <!-- copy -->
          <el-form-item
            label="Позиция кнопки 'Скопировать ссылку'. Кнопка Скопировать ссылку
               может отображаться, если используется параметр limit"
          >
            <el-select v-model="options.copy" :popper-append-to-body="false">
              <el-option
                v-for="item in COPY_POSITIONS"
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
                v-for="item in LANGUAGES"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <!-- /lang -->

          <!-- title -->
          <el-form-item clearable label="Заголовок, которым нужно поделиться">
            <el-input v-model="options.title" clearable></el-input>
          </el-form-item>
          <!-- /title -->

          <!-- description -->
          <el-form-item label="Текст, которым нужно поделиться">
            <el-input v-model="options.description" clearable></el-input>
          </el-form-item>
          <!-- /description -->

          <!-- url -->
          <el-form-item clearable label="Ссылка, которой нужно поделиться">
            <el-input v-model="options.url" clearable></el-input>
          </el-form-item>
          <!-- /url -->

          <!-- hashtags -->
          <el-form-item
            clearable
            label="Хэштеги. Актуальны и работают только для Твиттера"
          >
            <el-input v-model="options.hashtags" clearable></el-input>
          </el-form-item>
          <!-- /hashtags -->

          <!-- accessToken -->
          <el-form-item
            clearable
            label="Токен для снятия ограничения запросов на получение счетчика. Актуален и работает только для Facebook"
          >
            <el-input v-model="options.accessToken" clearable></el-input>
          </el-form-item>
          <!-- /accessToken -->
        </el-form>
      </template>
    </wrapper-demo>
  </main>
</template>

<style lang="scss" scoped>
  .app {
    min-width: 800px;
  }
</style>

<style lang="scss" scoped>
  .github-corners {
    position: sticky;
    z-index: 100;
    top: 0;
    right: 0;
  }
</style>
