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

  @Component<VueYandexShare>({
    mounted() {
      this.loadAPIScript(this.$el);
    },
  })
  export default class VueYandexShare extends Vue {
    /**
     * Адрес скрипта
     *
     */
    private src: string = '//yastatic.net/share2/share.js';

    /**
     * Инстанс виджета
     */
    private widget: Record<string, any> | undefined = undefined;

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
      type: Boolean,
      default: false,
    })
    private bare!: boolean;

    /**
     * Цветовая схема кнопок соцсетей
     */
    @Prop({
      type: String,
      default: 'normal',
      validator(value) {
        return COLOR_SCHEMES.includes(value);
      },
    })
    private colorScheme!: typeof COLOR_SCHEMES[number];

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
      type: String,
      default: 'last',
      validator(value) {
        return COPY_POSITIONS.includes(value);
      },
    })
    private copy!: typeof COPY_POSITIONS[number];

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
      type: Boolean,
      default: true,
    })
    private curtain!: boolean;

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
    private description!: string;

    /**
     * Направление списка кнопок
     */
    @Prop({
      type: String,
      default: 'horizontal',
      validator(value) {
        return DIRECTIONS.includes(value);
      },
    })
    private direction!: typeof DIRECTIONS[number];

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
    private hashtags!: string;

    /**
     * Изображение, которым нужно поделиться
     */
    @Prop({
      type: String,
    })
    private image!: string;

    /**
     * Язык блока. Локализуются подписи кнопок соцсетей и кнопка Скопировать
     * ссылку
     */
    @Prop({
      type: String,
      default: 'ru',
      validator(value) {
        return LANGUAGES.includes(value);
      },
    })
    private lang!: typeof LANGUAGES[number];

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
    private limit!: number;

    /**
     * Вид кнопки открытия pop-up, если значение `limit` равно `0`.
     */
    @Prop({
      type: String,
      default: null,
      validator(value) {
        return MORE_BUTTON_TYPES.includes(value);
      },
    })
    private moreButtonType!: typeof MORE_BUTTON_TYPES[number];

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
    private nonce!: string;

    /**
     * Направление открытия pop-up
     */
    @Prop({
      type: String,
      default: 'bottom',
      validator(value) {
        return POPUP_DIRECTIONS.includes(value);
      },
    })
    private popupDirection!: typeof POPUP_DIRECTIONS[number];

    /**
     * Расположение pop-up относительно контейнера блока. Значение outer может
     * понадобиться в том случае, если из-за специфики верстки вашего сайта
     * pop-up обрезается соседними элементами страницы
     */
    @Prop({
      type: String,
      default: 'inner',
      validator(value) {
        return POPUP_POSITIONS.includes(value);
      },
    })
    private popupPosition!: typeof POPUP_POSITIONS[number];

    /**
     * Список идентификаторов социальных сетей, отображаемых в блоке.
     */
    @Prop({
      type: Array,
      default() {
        return ['facebook', 'telegram', 'twitter', 'vkontakte'];
      },
    })
    private services!: typeof SERVICES[number][];

    /**
     * Форма кнопок соцсетей.
     */
    @Prop({
      type: Array,
      default: 'normal',
      validator(value) {
        return SHAPES.includes(value);
      },
    })
    private shape!: typeof SHAPES[number][];

    /**
     * Размер кнопок соцсетей
     */
    @Prop({
      type: String,
      default: 'm',
      validator(value) {
        return SIZES.includes(value);
      },
    })
    private size!: typeof SIZES[number];

    /**
     * Заголовок, которым нужно поделиться
     */
    @Prop({
      type: String,
    })
    private title!: string;

    /**
     * Ссылка, которой нужно поделиться
     */
    @Prop({
      type: String,
    })
    private url!: string;

    /**
     * Указание, что страницу отправки ссылки нужно всегда открывать в новом
     * окне или вкладке. Если атрибут не добавлять, страница может выводиться во
     * всплывающем окне (возможность зависит от соцсети и браузера).
     */
    @Prop({
      type: Boolean,
      default: false,
    })
    private useLinks!: boolean;

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
      type: Object,
      default() {
        return {};
      },
    })
    private contentByService!: Record<string, any>;

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
        hooks: {
          onready: () => {
            this.$emit('ready');
          },
          onshare: (name: string) => {
            this.$emit('share', name);
          },
        },
      });
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

    /**
     * Подключение скрипта YandexShare
     *
     * @param element
     */
    loadAPIScript(element: Element | string) {
      // eslint-disable-next-line no-unused-expressions
      this.widget?.destroy?.();

      if (!document.querySelectorAll(`[src*='${this.src}']`).length) {
        const script: HTMLScriptElement = document.createElement('script');
        script.setAttribute('src', this.src);
        script.setAttribute('async', 'true');
        script.setAttribute('defer', 'true');

        document.body.appendChild(script);

        script.onload = () => {
          this.$emit('load');
          this.initialize(element);
        };
        script.onerror = (error) => {
          this.$emit('error', error);
        };
      } else {
        this.pollingScriptLoad(element);
      }
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
