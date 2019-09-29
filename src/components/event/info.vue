<template>
  <div class="full-hero-content-block">
    <div class="div-block-13">
      <div class="div-block-13 hh">
        <img src="/images/360-лого.jpg" alt="" class="image-12 aa">
        <div class="div-block-19">
          <div
            v-for="tag in info.tags"
            :key="tag.id"
            class="text-block-3 tag"
          >
            {{ tag.name }}
          </div>
        </div>
        <div class="text-block-3">Вес: {{ info.weight }}</div>
        <div class="text-block-3">Организатор: {{ info.org }}</div>
        <div class="text-block-3">Проект: {{ info.project }}</div>
        <div class="text-block-3">Email: {{ info.email }}</div>
        <a href="#" class="button-6 w-button">Сгенерировать бейдж</a>
        <a href="#" class="button-6 w-button">Сгенерировать отчёт</a>
        <button @click="$emit('toggleModal')" type="button" class="button-5 w-button">Рассчитать вес мероприятия</button>
      </div>
      <div class="div-block-13 bb">
        <h1 class="heading-4">{{ info.name }}</h1>
        <div class="text-block-4">{{ info.place }}</div>
        <div class="text-block-3">{{ info.dates }}</div>
        <div class="text-block-4">{{ info.ageRestr }}</div>
        <div class="text-block-5">{{ info.descr }}
        </div>
        <a href="#" class="button-3 w-button">Редактировать</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EventInfo',
    props: {
      info: Object,
    }
  };
</script>
