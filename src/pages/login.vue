<template>
  <div>
    <div class="full-sign-up-block">
      <div data-ix="fade-in-on-scroll" class="full-page-sign-up-form w-form">
        <form id="wf-form-Sign-Up-Form" name="wf-form-Sign-Up-Form-1" data-name="Sign Up Form 1">
          <h3 class="contact-form-title">Мы рады видеть вас снова!</h3>
          <div class="w-row">
            <div class="fields-column-left w-col w-col-6" />
            <div class="fields-column-right w-col w-col-6" />
          </div>
          <input
            v-model="email"
            type="email"
            name="Email"
            maxlength="256"
            required=""
            placeholder="Email"
            class="dark-field sign-up w-input"
          >
          <input
            v-model="password"
            type="password"
            name="Telephone-3"
            maxlength="256"
            required=""
            placeholder="Password"
            class="dark-field sign-up w-input"
          >
          <p class="contact-form-info-paragraph" />
          <div class="div-block-2">
            <button @click="submit" type="button" class="button light w-button">
              Войти
            </button>
          </div>
        </form>
        <div v-if="error" class="error-bg w-form-fail">
          <p>{{ error }}</p>
        </div>
      </div>
    </div>
    <div class="full-sign-up-block right">
      <div data-ix="fade-in-on-scroll-2" class="sign-up-info-wrapper">
        <div class="sign-up-logos-wrapper">
          <div class="small-section-title smaller">Мы сотрудничаем с </div>
          <div class="logos-row w-row">
            <div class="logo-column w-col w-col-4 w-col-small-4 w-col-tiny-4"><img src="/images/skolkovo.jpg" alt="" class="client-logo small"></div>
            <div class="logo-column w-col w-col-4 w-col-small-4 w-col-tiny-4"><img src="/images/Garagesvg.png" alt="" class="client-logo small"></div>
            <div class="logo-column w-col w-col-4 w-col-small-4 w-col-tiny-4"><img src="/images/msu.png" alt="" class="client-logo small"></div>
          </div>
          <div class="logos-row w-row">
            <div class="logo-column w-col w-col-4 w-col-small-4 w-col-tiny-4"><img src="/images/Postnauka-logo.png" alt="" class="client-logo small"></div>
            <div class="logo-column w-col w-col-4 w-col-small-4 w-col-tiny-4"><img src="/images/yandex.png" alt="" class="client-logo small"></div>
            <div class="w-col w-col-4 w-col-small-4 w-col-tiny-4"><img src="/images/explo.png" alt="" class="client-logo small"></div>
          </div>
        </div>
        <div class="testimonial-text-block">
          <p class="large-testimonial-text">
            Мы <strong>ВЕРИМ</strong>, что миром движут любопытство и созидание.
            <br>‍<br>
            Мы <strong>ОТКРЫВАЕМ</strong> людям прошлое, настоящее и будущее науки.
            <br><br>
            Мы <strong>СОЗДАЁМ</strong> территорию просвещения, свободной мысли и смелого эксперимента.
            <br>
          </p>
          <div class="testimonial-person-wrapper w-clearfix">
            <img src="/images/42996339_10155506932846104_3969904998304710656_n.jpg" alt="" class="testimonial-person-image">
            <div class="testimonial-person-title dark">Девиз <br>Политехнического<br> Музея </div>
          </div>
        </div>
        <div class="testimonial-text-block">
          <div class="testimonial-person-wrapper" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import fetch from '@/services/fetch';

  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null,
      };
    },
    methods: {
      ...mapActions({
        setToken: 'auth/saveToken',
      }),
      async submit() {
        const error = this.validate();
        if (error) {
          this.error = error;
        } else {
          this.error = null;

          const body = `grant_type=&scope=&client_id=&client_secret=&username=${this.email}&password=${this.password}`;
          const res = await fetch('/login/access-token', 'POST', body, true);

          if (res.detail) {
            this.error = res.detail[0].msg || res.detail;
          } else {
            await this.setToken(res.access_token);
            this.$router.push({name: 'profile'});
          }
        }
      },
      validate() {
        let error = false;
        if (!this.email || !this.password) {
          error = 'Не все обязательные поля заполнены';
        }
        return error;
      }
    }
  };
</script>

<style>
  .full-sign-up-block {
    height: 100vh !important;
  }

  .w-form-fail {
    display: block;
  }
</style>
