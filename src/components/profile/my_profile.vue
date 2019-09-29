<template>
  <div class="profile-main">
    <Header/>
    <div class="section tint">
      <div class="container _444 w-container">
        <div class="section-title-wrapper full-centered">
          <h2 class="section-title">Мои мероприятия</h2>
        </div>
        <div class="portfolio-list-wrapper w-dyn-list">
          <div class="portfolio-list w-clearfix w-dyn-items w-row">
            <div
              v-for="([prof], i) in profile"
              :key="i"
              class="portfolio-item w-dyn-item w-col w-col-3">
              <a
                href={{prof.link}}} target="_blank"
                style="background-image:url('https://assets.website-files.com/5d8e00e17b0ad74319b2c7ab/5d8e52ea20075ae3408456f1_%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%855.jpg')"
                class="portfolio-image-block w-inline-block"
              >
                <div class="portfolio-overlay-block">
                  <div class="portfolio-overlay-content-wrapper">
                    <div class="portfolio-block-title _1">
                      {{prof.name}}
                    </div>
                    <div class="portfolio-block-subtitle">
                      {{prof.descr}}
                    </div>
                    <div class="button text-button">Просмотр</div>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
      <div>
        <router-link to="new-event" class="button-2 w-button">
          <strong>НОВОЕ МЕРОПРИЯТИЕ</strong>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyProfile',
    props: {
      profile: Array,
    }
  };
</script>

<style scoped>
  .pricing-row {
    overflow-x: scroll;
  }
</style>
