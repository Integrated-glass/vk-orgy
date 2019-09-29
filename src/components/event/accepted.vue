<template>
  <div class="section tint">
    <h1 class="heading-5">Утверждённые Волонтёры</h1>
    <div class="pricing-row w-row">
      <div
        v-for="(acc, i) in accepted"
        :key="i"
        class="pricing-column w-col w-col-4">
        <div class="white-pricing-block">
          <div class="pricing-block-content-wrapper">
            <div class="top">
              <div>
                <div class="pricing-block-price">{{acc.fullname}}</div>
                <div class="pricing-block-price subtitle">{{acc.role}}</div>
              </div>
              <div class="div-block-18">
                <img
                  :src = "acc.image"
                  :width = "acc.width"
                  :height = "acc.length"
                  alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="pricing-block-content-wrapper bottom">
          <a href="/contact/contact-3" class="button white-pricing-button rej w-button">Отказать</a>
          <a href="/contact/contact-3" class="button white-pricing-button role w-button">Сменить роль</a>
          <a href="/contact/contact-3" class="button white-pricing-button carm w-button"> Карма</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'EventAccepted',
    props: {
      accepted: Array,
    }
  };
</script>

<style scoped>
  .pricing-row {
    overflow-x: scroll;
  }
</style>
