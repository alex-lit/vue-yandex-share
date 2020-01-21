<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

  @Component<VueYandexShare>({})
  export default class VueYandexShare extends Vue {
    /**
     * Адрес скрипта
     */
    src: string = '//yastatic.net/share2/share.js';

    /**
     * Инстанс виджета
     */
    widget: { [key: string]: any } | undefined = undefined;

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
      type: Array,
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
        ];
      },
    })
    private services!: string[];

    /**
     * Параметры контента для каждой соцсети отдельно
     */
    @Prop({
      type: Object,
      default() {
        return {};
      },
    })
    private contentByService!: { [key: string]: any };

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
          url: this.url || window.location.href,
          title: this.title || document.title,
          description: this.description,
          image: this.image,
        },
        contentByService: this.contentByService,
        theme: {
          bare: this.bare,
          copy: this.copy,
          counter: this.counter,
          direction: this.direction,
          lang: this.lang,
          limit: this.limit,
          popupDirection: this.popupDirection,
          popupPosition: this.popupPosition,
          services: this.services.join(','),
          size: this.size,
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
     * Ижидание загрузки скрипта
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
        script.onerror = error => {
          this.$emit('error', error);
        };
      } else {
        this.pollingScriptLoad(element);
      }
    }

    mounted() {
      this.loadAPIScript(this.$el);
    }
  }
</script>

<template>
  <div class="vue-yandex-share"></div>
</template>

<style lang="postcss" scoped>
  .vue-yandex-share {
    transition-duration: 0.3s;
  }

  .vue-yandex-share:empty {
    opacity: 0;
  }
</style>
