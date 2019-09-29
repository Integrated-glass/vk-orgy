<template>
  <div class="section tint">
    <div class="container aaa w-container">
      <div class="section-title-wrapper">
        <h2 class="section-title">Партнёры</h2>
      </div>
    </div>
    <div class="portfolio-tabs w-tabs">
      <div class="portfolio-tabs-menu w-tab-menu">
        <button
          @click="activeTab = 0"
          :class="{'w--current': activeTab === 0}"
          type="button"
          class="portfolio-tab-button w-inline-block w-tab-link"
        >
          Пиар
        </button>
        <button
          @click="activeTab = 1"
          :class="{'w--current': activeTab === 1}"
          type="button"
          class="portfolio-tab-button w-inline-block w-tab-link"
        >
          Площадка
        </button>
        <button
          @click="activeTab = 2"
          :class="{'w--current': activeTab === 2}"
          type="button"
          class="portfolio-tab-button w-inline-block w-tab-link"
        >
          Планирование
        </button>
      </div>
      <div class="w-tab-content">
        <div
          v-for="index in 3"
          :key="index"
          :class="{'w--tab-active': activeTab === index-1}"
          class="portfolio-tab-pane w-tab-pane"
        >
          <div class="div-block-15">
            <img
              v-for="(partner, i) in partners.slice(3*index, 3*index + 3)"
              :key="i"
              :width="partner.width"
              :height="partner.length"
              :src="partner.logo"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EventPartners',
    props: {
      partners: Array,
    },
    data() {
      return {
        activeTab: 0,
      };
    },
  };
</script>
