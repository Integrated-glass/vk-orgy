<template>
  <div class="section feature-section">
    <h1 class="heading-5">Соцсети</h1>
    <ul class="pricing-feature-list w-list-unstyled">
      <li class="pricing-feature-item">
        <div
          v-for="(soc, i) in socials"
          :key="i"
        >
          <img
            :src="soc.image"
            :width="soc.width"
            :height="soc.length"
            alt="">
        </div>
      </li>
    </ul>
    <ul class="pricing-feature-list w-list-unstyled">
      <li class="pricing-feature-item">
        <div>
          <a href="#" class="button-4 w-button">Редактировать</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'EventSocials',
    props: {
      socials: Array,
    }
  };
</script>
