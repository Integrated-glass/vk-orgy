<template>
  <div class="section tint">
    <h1 class="heading-5">Роли</h1>
    <div class="pricing-row w-row">
      <div
        v-for="(role, i) in roles"
        :key="i"
        class="pricing-column w-col w-col-4"
      >
        <div class="white-pricing-block">
          <div class="pricing-block-content-wrapper">
            <div class="pricing-block-price">
              {{ role.name }}
              <br>
            </div>
            <div class="pricing-block-price subtitle _88">{{ role.ageRestict }}</div>
            <div class="pricing-block-price subtitle">
              {{role.descr}}
            </div>
          </div>
          <ul class="pricing-feature-list w-list-unstyled">
            <li class="pricing-feature-item">
              <div class="div-block-22">
                <div>Надо</div>
                <div class="text-block-6">{{role.required}}</div>
              </div>
              <div class="div-block-24">
                <div>Найдено</div>
                <div class="text-block-7">{{role.found}}</div>
              </div>
              <div class="div-block-23">
                <div>Осталось</div>
                <div class="text-block-8">{{role.left}}</div>
              </div>
            </li>
          </ul>
          <div class="pricing-block-content-wrapper bottom">
            <router-link to="new-event" class="button-3 w-button">Редактировать</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EventRoles',
    props: {
      roles: Array,
    }
  };
</script>

<style scoped>
  .pricing-row {
    overflow-x: scroll;
  }
</style>
