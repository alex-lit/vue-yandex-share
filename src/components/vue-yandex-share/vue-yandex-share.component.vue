<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

  import {
    COLOR_SCHEMES,
    COPY_POSITIONS,
    DIRECTIONS,
    LANGUAGES,
    MORE_BUTTON_TYPES,
    POPUP_DIRECTIONS,
    POPUP_POSITIONS,
    SERVICES,
    SHAPES,
    SIZES,
  } from './vue-yandex-share.consts';

  /**
   *
   */
  @Component<VueYandexShare>({
    mounted() {
      this.loadAPIScript(this.$el);
    },
  })
  export default class VueYandexShare extends Vue {
    /**
     * Признак того, что загрузка стилей отключена. Если добавить атрибут,
     * соцсети будут отображаться в виде текстового вертикального списка
     *
     * @example
     * ```html
     * <vue-yandex-share bare></vue-yandex-share>
     * ```
     */
    @Prop({
      default: false,
      type: Boolean,
    })
    readonly bare!: boolean;

    /**
     * Цветовая схема кнопок соцсетей
     */
    @Prop({
      default: 'normal',
      type: String,

      validator(value) {
        return COLOR_SCHEMES.includes(value);
      },
    })
    readonly colorScheme!: typeof COLOR_SCHEMES[number];

    /**
     * Параметры контента для каждой соцсети отдельно
     *
     * @example
     * ```html
     * <vue-yandex-share :contentByService="{
     *   twitter: {
     *     url: 'https://ya.ru',
     *     title: 'Яндекс',
     *     hashtags: 'yandex,share'
     *   },
     *   facebook: {
     *     url: 'https://ya.ru',
     *     title: 'Яндекс',
     *     accessToken: 'fb-token'
     *   }
     * }"
     * ></vue-yandex-share>
     * ```
     */
    @Prop({
      default() {
        return {};
      },

      type: Object,
    })
    readonly contentByService!: Record<string, any>;

    /**
     * Позиция кнопки **Скопировать ссылку**. Кнопка Скопировать ссылку может
     * отображаться, если используется параметр `limit`
     *
     * @example
     * ```html
     * <vue-yandex-share copy="last"></vue-yandex-share>
     * ```
     */
    @Prop({
      default: 'last',
      type: String,

      validator(value) {
        return COPY_POSITIONS.includes(value);
      },
    })
    readonly copy!: typeof COPY_POSITIONS[number];

    /**
     * Указание на мобильных устройствах вместо pop-up выводить окно, похожее на
     * нативный инструмент **Поделиться**.
     *
     * @example
     * ```html
     * <vue-yandex-share curtain></vue-yandex-share>
     * ```
     */
    @Prop({
      default: true,
      type: Boolean,
    })
    readonly curtain!: boolean;

    /**
     * Текст, которым нужно поделиться
     *
     * @example
     * ```html
     * <vue-yandex-share description="Заходите на мой сайт!"></vue-yandex-share>
     * ```
     */
    @Prop({
      type: String,
    })
    readonly description!: string;

    /**
     * Направление списка кнопок
     */
    @Prop({
      default: 'horizontal',
      type: String,

      validator(value) {
        return DIRECTIONS.includes(value);
      },
    })
    readonly direction!: typeof DIRECTIONS[number];

    /**
     * Хэштеги. Актуальны и работают только для Твиттера
     *
     * @description
     * Строка, указывается без знака #. Несколько хэштегов
     * указываются через запятую, без пробела.
     *
     * @example
     * ```html
     * <vue-yandex-share hashtags="vuethebest,reactnoway"></vue-yandex-share>
     * ```
     */
    @Prop({
      type: String,
    })
    readonly hashtags!: string;

    /**
     * Изображение, которым нужно поделиться
     */
    @Prop({
      type: String,
    })
    readonly image!: string;

    /**
     * Язык блока. Локализуются подписи кнопок соцсетей и кнопка Скопировать
     * ссылку
     */
    @Prop({
      default: 'ru',
      type: String,

      validator(value) {
        return LANGUAGES.includes(value);
      },
    })
    readonly lang!: typeof LANGUAGES[number];

    /**
     * Количество соцсетей, отображаемых в виде кнопок. Используется если нужно
     * встроить в блок много соцсетей, а также чтобы блок занимал мало места на
     * странице. Не вошедшие в лимит соцсети будут отображаться в pop-up по
     * нажатию кнопки `***`
     */
    @Prop({
      type: Number,

      validator(value) {
        return value >= 0 && value <= SERVICES.length;
      },
    })
    readonly limit!: number;

    /**
     * Вид кнопки открытия pop-up, если значение `limit` равно `0`.
     */
    @Prop({
      default: undefined,
      type: String,

      validator(value) {
        return MORE_BUTTON_TYPES.includes(value);
      },
    })
    readonly moreButtonType!: typeof MORE_BUTTON_TYPES[number];

    /**
     * Идентификатор директивы
     * [Content Security Policy](https://www.w3.org/TR/CSP3/).
     * Используется для подтверждения безопасности скрипта блока «Поделиться».
     *
     * @description
     * Строка, сгенерированная сервером.
     */
    @Prop({
      type: String,
    })
    readonly nonce!: string;

    /**
     * Направление открытия pop-up
     */
    @Prop({
      default: 'bottom',
      type: String,

      validator(value) {
        return POPUP_DIRECTIONS.includes(value);
      },
    })
    readonly popupDirection!: typeof POPUP_DIRECTIONS[number];

    /**
     * Расположение pop-up относительно контейнера блока. Значение outer может
     * понадобиться в том случае, если из-за специфики верстки вашего сайта
     * pop-up обрезается соседними элементами страницы
     */
    @Prop({
      default: 'inner',
      type: String,

      validator(value) {
        return POPUP_POSITIONS.includes(value);
      },
    })
    readonly popupPosition!: typeof POPUP_POSITIONS[number];

    /**
     * Список идентификаторов социальных сетей, отображаемых в блоке.
     */
    @Prop({
      default() {
        return ['facebook', 'telegram', 'twitter', 'vkontakte'];
      },

      type: Array,
    })
    readonly services!: typeof SERVICES[number][];

    /**
     * Форма кнопок соцсетей.
     */
    @Prop({
      default: 'normal',
      type: Array,

      validator(value) {
        return SHAPES.includes(value);
      },
    })
    readonly shape!: typeof SHAPES[number][];

    /**
     * Размер кнопок соцсетей
     */
    @Prop({
      default: 'm',
      type: String,

      validator(value) {
        return SIZES.includes(value);
      },
    })
    readonly size!: typeof SIZES[number];

    /**
     * Заголовок, которым нужно поделиться
     */
    @Prop({
      type: String,
    })
    readonly title!: string;

    /**
     * Ссылка, которой нужно поделиться
     */
    @Prop({
      type: String,
    })
    readonly url!: string;

    /**
     * Указание, что страницу отправки ссылки нужно всегда открывать в новом
     * окне или вкладке. Если атрибут не добавлять, страница может выводиться во
     * всплывающем окне (возможность зависит от соцсети и браузера).
     */
    @Prop({
      default: false,
      type: Boolean,
    })
    readonly useLinks!: boolean;

    /**
     * Адрес скрипта
     *
     */
    src = '//yastatic.net/share2/share.js';

    /**
     * Инстанс виджета
     */
    widget: Record<string, any> | undefined = undefined;

    /**
     * При изменении входных параметров переподключает виджет
     */
    @Watch('$props', { deep: true })
    onPropChanged() {
      this.loadAPIScript(this.$el);
    }

    /**
     * Инициализация виджета
     *
     * @param element
     */
    initialize(element: Element | string) {
      this.widget = (window as any).Ya?.share2?.(element, {
        content: {
          description: this.description,
          image: this.image,
          title: this.title || document.title,
          url: this.url || window.location.href,
        },

        contentByService: this.contentByService,

        hooks: {
          onready: () => {
            this.$emit('ready');
          },

          onshare: (name: string) => {
            this.$emit('share', name);
          },
        },

        theme: {
          bare: this.bare,
          colorScheme: this.colorScheme,
          copy: this.copy,
          curtain: this.curtain,
          direction: this.direction,
          lang: this.lang,
          limit: this.limit,
          moreButtonType: this.moreButtonType,
          nonce: this.nonce,
          popupDirection: this.popupDirection,
          popupPosition: this.popupPosition,
          services: this.services.join(','),
          shape: this.shape,
          size: this.size,
          useLinks: this.useLinks,
        },
      });
    }

    /**
     * Подключение скрипта YandexShare
     *
     * @param element
     */
    loadAPIScript(element: Element | string) {
      // eslint-disable-next-line no-unused-expressions
      this.widget?.destroy?.();

      if (document.querySelectorAll(`[src*='${this.src}']`).length === 0) {
        const script: HTMLScriptElement = document.createElement('script');

        script.setAttribute('src', this.src);
        script.setAttribute('async', 'true');
        script.setAttribute('defer', 'true');

        document.body.append(script);

        script.addEventListener('load', () => {
          this.$emit('load');
          this.initialize(element);
        });

        script.addEventListener('error', (error) => {
          this.$emit('error', error);
        });
      } else {
        this.pollingScriptLoad(element);
      }
    }

    /**
     * Ожидание загрузки скрипта
     *
     * @param element
     */
    pollingScriptLoad(element: Element | string) {
      const pollInterval = setInterval(() => {
        if ((window as any).Ya) {
          this.initialize(element);
          clearInterval(pollInterval);
        }
      }, 300);

      setTimeout(() => {
        clearInterval(pollInterval);
      }, 10000);
    }
  }
</script>

<template>
  <div class="vue-yandex-share"></div>
</template>

<style lang="scss" scoped>
  .vue-yandex-share {
    transition-duration: 0.3s;

    &:empty {
      opacity: 0;
    }
  }
</style>
