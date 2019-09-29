<template>
  <div class="section feature-section">
    <div class="container w-container">
      <h1 class="heading-5">Коллеги</h1>
      <div class="section-title-wrapper" />
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
              <div
                v-for="(coll, i) in colleagues.slice(3*(index-1), 3*(index-1) + 3)"
                :key="i"
                class="div-block-16"
              >
                <div>
                  <img
                    :src="coll.image"
                    :width="coll.width"
                    :height="coll.length"
                    alt=""
                  >
                </div>
                <div class="div-block-17">
                  <a href="#" class="link-2">
                    {{ coll.fullname }}
                    <br>‍
                  </a>
                  <div class="text-block-12">{{ coll.descr }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EventColleagues',
    props: {
      colleagues: Array,
    },
    data() {
      return {
        activeTab: 0,
      };
    },
  };
</script>
