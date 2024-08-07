const player = new Plyr('#player', {
  controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'airplay', 'fullscreen'],
  i18n: {
      restart: 'Рестарт',
      rewind: 'Назад {seektime}сек',
      play: 'Пушти',
      pause: 'Пауза',
      fastForward: 'Напред {seektime}сек',
      seek: 'Пребарај',
      seekLabel: '{currentTime} од {duration}',
      played: 'Пуштено',
      buffered: 'Вчитано',
      currentTime: 'Тековно време',
      duration: 'Времетраење',
      volume: 'Јачина на звук',
      mute: 'Исклучи звук',
      unmute: 'Вклучи звук',
      enableCaptions: 'Прикажи превод',
      disableCaptions: 'Исклучи превод',
      download: 'Превземање',
      enterFullscreen: 'Прикажи на цел екран',
      exitFullscreen: 'Излези од цел екран',
      frameTitle: '{title}',
      captions: 'Преводи',
      settings: 'Подесувања',
      pip: 'СВС',
      menuBack: 'Назад на претходното мени',
      speed: 'Брзина',
      normal: 'Стандардна',
      quality: 'Квалитет',
      loop: 'Постојано',
      start: 'Почеток',
      end: 'Крај',
      all: 'Сите',
      reset: 'Ресетирај',
      disabled: 'Вклучено',
      enabled: 'Исклучено',
      advertisement: 'Реклама',
      qualityBadge: {
        2160: '4K',
        1440: 'HD',
        1080: 'HD',
        720: 'HD',
        576: 'SD',
        480: 'SD',
      },
    },
});
