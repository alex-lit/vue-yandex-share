<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component<VueYandexShare>({})
  export default class VueYandexShare extends Vue {
    /**
     * Токен для снятия ограничения запросов на получение счетчика. Актуален и
     * работает только для Facebook
     */
    @Prop({ type: String })
    private accessToken!: string;

    /**
     * Признак того, что загрузка стилей отключена. Если добавить атрибут,
     * соцсети будут отображаться в виде текстового вертикального списка
     */
    @Prop({
      type: Boolean,
      default: false,
    })
    private bare!: boolean;

    /**
     * Признак того, что на кнопке соцсети отображается счетчик публикаций
     */
    @Prop({
      type: Boolean,
      default: false,
    })
    private counter!: boolean;

    /**
     * Позиция кнопки Скопировать ссылку. Кнопка Скопировать ссылку может
     * отображаться, если используется параметр limit
     */
    @Prop({
      type: String,
      default: 'last',
      validator(value) {
        return ['first', 'last', 'hidden'].includes(value);
      },
    })
    private copy!: 'first' | 'last' | 'hidden';

    /**
     * Текст, которым нужно поделиться
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
        return ['horizontal', 'vertical'].includes(value);
      },
    })
    private direction!: 'horizontal' | 'vertical';

    /**
     * Хэштеги. Актуальны и работают только для Твиттера
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
        return ['az', 'be', 'en', 'hy', 'ka', 'kk', 'ro', 'ru', 'tr', 'tt', 'uk'].includes(value);
      },
    })
    private lang!: 'az' | 'be' | 'en' | 'hy' | 'ka' | 'kk' | 'ro' | 'ru' | 'tr' | 'tt' | 'uk';

    /**
     * Количество соцсетей, отображаемых в виде кнопок. Используется если нужно
     * встроить в блок много соцсетей, а также чтобы блок занимал мало места на
     * странице. Не вошедшие в лимит соцсети будут отображаться в pop-up по
     * нажатию кнопки
     */
    @Prop({
      type: Number,
    })
    private limit!: number;

    /**
     * Направление открытия pop-up
     */
    @Prop({
      type: String,
      default: 'bottom',
      validator(value) {
        return ['bottom', 'top'].includes(value);
      },
    })
    private popupDirection!: 'bottom' | 'top';

    /**
     * Расположение pop-up относительно контейнера блока. Значение outer может
     * понадобиться в том случае, если из-за специфики верстки вашего сайта
     * pop-up обрезается соседними элементами страницы
     */
    @Prop({
      type: String,
      default: 'inner',
      validator(value) {
        return ['inner', 'outer'].includes(value);
      },
    })
    private popupPosition!: 'inner' | 'outer';

    /**
     * Размер кнопок соцсетей
     */
    @Prop({
      type: String,
      default: 'm',
      validator(value) {
        return ['m', 's'].includes(value);
      },
    })
    private size!: 'm' | 's';

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
     * Список поддерживаемых соцсетей
     */
    @Prop({
      type: String,
      default() {
        return [
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
        ].join();
      },
    })
    private services!: string;

    /**
     * Был ли скрипт вподключен к документу
     */
    isScriptInserted: boolean = false;

    /**
     * Подключение скрипта YandexShare
     */
    async loadAPIScript() {
      /**
       * Адрес скрипта
       */
      const src: string = '//yastatic.net/share2/share.js';

      if (!document.querySelectorAll(`[src*='${src}']`).length) {
        const script = document.createElement('script');
        script.setAttribute('src', '//yastatic.net/share2/share.js');
        script.setAttribute('async', '');
        script.setAttribute('defer', '');

        document.body.appendChild(script);

        script.onload = () => {
          this.$emit('load');
        };
        script.onerror = error => {
          this.$emit('error', error);
        };
      } else {
        this.$emit('load');
      }
    }

    created() {
      this.loadAPIScript();
    }
  }
</script>

<template>
  <figure
    :class="['vue-yandex-share', 'ya-share2']"
    :data-access-token="accessToken"
    :data-bare="bare"
    :data-counter="counter"
    :data-copy="copy"
    :data-description="description"
    :data-direction="direction"
    :data-hashtags="hashtags"
    :data-image="image"
    :data-lang="lang"
    :data-limit="limit"
    :data-popup-direction="popupDirection"
    :data-popup-position="popupPosition"
    :data-size="size"
    :data-title="title"
    :data-url="url"
    :data-services="services"
  ></figure>
</template>
