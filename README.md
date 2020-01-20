# Vue Yandex Share

Vue-компонент для блока «Поделиться» от Яндекса.

![banner](https://raw.githubusercontent.com/alex-lit/vue-yandex-share/master/public/screenshot.png)

Если разместить блок на вашем сайте, посетители смогут быстро публиковать в
своих социальных сетях ссылки на понравившиеся им страницы сайта.

[Документация Яндекс](//yandex.ru/dev/share/)

[DEMO](//alex-lit.github.io/vue-yandex-share/)

## Установка

```bash
npm i @alexlit/vue-yandex-share -S
```

## Использование

```vue
<script>
  import VueYandexShare from '@alexlit/vue-yandex-share';

  export default {
    components: { VueYandexShare },

    data() {
      return {
        /**
         * Параметры плагина
         */
        options = {
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
      }
    }
  };
</script>

<template>
  <vue-yandex-share v-bind="options"></vue-yandex-share>
</template>
```
