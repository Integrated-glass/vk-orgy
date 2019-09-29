<template>
  <div class="section tint">
    <div class="container aaa w-container">
      <div class="section-title-wrapper">
        <h2 class="section-title">Партнёры</h2>
      </div>
    </div>
    <div class="portfolio-tabs w-tabs">
      <div class="portfolio-tabs-menu w-tab-menu">
        <a  class="portfolio-tab-button w-inline-block w-tab-link">
          <div>Пиар</div>
        </a>
        <a class="portfolio-tab-button w-inline-block w-tab-link">
          <div>Площадка</div>
        </a>
        <a class="portfolio-tab-button w-inline-block w-tab-link w--current">
          <div>Планирование</div>
        </a>
      </div>
      <div class="w-tab-content">
        <div class="portfolio-tab-pane w-tab-pane">
          <div class="div-block-15">
            <img
              v-for="(partner, i) in partners"
              :key="i"
              :width="partner.width"
              :height="partner.length"
              :src="partner.logo"
              alt="">
          </div>
        </div>
        <div class="portfolio-tab-pane w-tab-pane">
          <div class="div-block-15">
            <img
              v-for="(partner, i) in partners"
              :key="i"
              :width="partner.width"
              :height="partner.length"
              :src="partner.logo"
              alt="">
          </div>
        </div>
        <div class="portfolio-tab-pane w-tab-pane w--tab-active">
          <div class="div-block-15">
            <img
              v-for="(partner, i) in partners"
              :key="i"
              :width="partner.width"
              :height="partner.length"
              :src="partner.logo"
              alt="">
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
    }
  };
</script>
