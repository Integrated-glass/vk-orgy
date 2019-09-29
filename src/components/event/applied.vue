<template>
  <div class="section tint _343">
    <h1 class="heading-5">Подавшиеся Волонтёры</h1>
    <div class="pricing-row w-row">
      <div
        v-for="(app, i) in applied"
        :key="i"
        class="pricing-column w-col w-col-4">
        <div class="white-pricing-block">
          <div class="pricing-block-content-wrapper">

            <div class="pricing-block-price">{{app.fullname}} </div>
            <div class="pricing-block-price subtitle">{{app.age}}
              <br>
            </div>
            <div class="pricing-block-price subtitle">Карма: {{app.karma}}
              <br>
            </div>
            <div> class="pricing-block-price subtitle">{{app.experience}}</div>
          </div>

          <ul class="pricing-feature-list w-list-unstyled">
            <li class="pricing-feature-item">
              <div>
                <div>{{app.role1}} ‍</div>
                <a href="#" class="button-4 w-button">Выбрать</a>
              </div>
              <div>
                <div>{{app.role2}}</div>
                <a href="#" class="button-4 w-button">Выбрать</a>
              </div>
              <div>
                <div>{{app.role3}}</div>
                <a href="#" class="button-4 w-button">Выбрать</a>
              </div>
            </li>
          </ul>

          <div class="pricing-block-content-wrapper bottom">
            <a href="/contact/contact-3" class="button white-pricing-button rej w-button">Отказать</a>
            <a href="/contact/contact-3" class="button white-pricing-button w-button">Связаться vk</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'EventApplied',
    props: {
      applied: Array,
    }
  };
</script>
