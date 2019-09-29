<template>
  <div class="section feature-section">
    <div class="container w-container">
      <h1 class="heading-5">Коллеги</h1>
      <div class="section-title-wrapper" />
      <div class="portfolio-tabs w-tabs">
        <div class="portfolio-tabs-menu w-tab-menu">
          <a class="portfolio-tab-button w-inline-block w-tab-link">
            <div>Пиар</div>
          </a>
          <a class="portfolio-tab-button w-inline-block w-tab-link w--current">
            <div>Площадка</div>
          </a>
          <a class="portfolio-tab-button w-inline-block w-tab-link">
            <div>Планирование</div>
          </a>
        </div>

        <div class="w-tab-content">
          <div class="portfolio-tab-pane w-tab-pane">
            <div class="div-block-15">
              <div
                v-for="(coll, i) in colleagues"
                :key="i"
                class="div-block-16">
                <div>
                  <img
                    :src = "coll.image"
                    :width = "coll.width"
                    :height = "coll.length"
                    alt="">
                </div>
                <div class="div-block-17">
                  <a href="#" class="link-2">{{coll.fullname}}
                    <br>‍
                  </a>
                  <div class="text-block-12">{{coll.descr}}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="portfolio-tab-pane w-tab-pane w--tab-active">
            <div class="div-block-15">
              <div
                v-for="(coll, i) in colleagues"
                :key="i"
                class="div-block-16">
                <div>
                  <img
                    :src = "coll.image"
                    :width = "coll.width"
                    :height = "coll.length"
                    alt="">
                </div>
                <div class="div-block-17">
                  <a href="#" class="link-2">{{coll.fullname}}
                    <br>‍
                  </a>
                  <div class="text-block-12">{{coll.descr}}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="portfolio-tab-pane w-tab-pane">
            <div class="div-block-15">
              <div class="div-block-16"
                   v-for="(coll, i) in colleagues"
                   :key="i"
              >
                <div>
                  <img
                    :src = "coll.image"
                    :width = "coll.width"
                    :height = "coll.length"
                    alt="">
                </div>
                <div class="div-block-17">
                  <a href="#" class="link-2">{{coll.fullname}}
                    <br>
                    ‍</a>
                  <div class="text-block-12">{{coll.descr}}
                  </div>
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
    }
  };
</script>
