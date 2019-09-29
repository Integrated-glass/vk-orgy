<template>
  <div>
    <div class="full-sign-up-block">
      <div data-ix="fade-in-on-scroll" class="full-page-sign-up-form w-form">
        <form id="wf-form-Sign-Up-Form" name="wf-form-Sign-Up-Form-1" data-name="Sign Up Form 1">
          <h3 class="contact-form-title">Делай мир лучше <br>вместе с нами!</h3>
          <div class="w-row">
            <div class="fields-column-left w-col w-col-6">
              <input
                v-model="firstName"
                type="text"
                name="first-name"
                maxlength="256"
                required
                placeholder="Имя*"
                class="dark-field sign-up w-input"
              >
              <input
                v-model="org"
                type="text"
                name="first-name-2"
                maxlength="256"
                required
                placeholder="Организация*"
                class="dark-field sign-up w-input"
              >
            </div>
            <div class="fields-column-right w-col w-col-6">
              <input
                v-model="lastName"
                type="text"
                name="last-name"
                maxlength="256"
                placeholder="Фамилия*"
                required=""
                class="dark-field sign-up w-input"
              >
              <input
                v-model="job"
                type="text"
                name="last-name-2"
                maxlength="256"
                placeholder="Должность*"
                required=""
                class="dark-field sign-up w-input"
              >
            </div>
          </div>
          <input
            v-model="phone"
            type="tel"
            name="phone"
            maxlength="256"
            required
            placeholder="Телефон*"
            class="dark-field sign-up w-input"
          >
          <input
            v-model="vk"
            type="text"
            name="vk"
            maxlength="256"
            required
            placeholder="VK*"
            class="dark-field sign-up w-input"
          >
          <input
            v-model="email"
            type="email"
            name="email"
            maxlength="256"
            required=""
            placeholder="Email*"
            class="dark-field sign-up w-input"
          >
          <input
            v-model="password"
            type="password"
            name="password"
            maxlength="256"
            required
            placeholder="Пароль*"
            class="dark-field sign-up w-input"
          >
          <input
            v-model="passwordRepeat"
            type="password"
            name="password-repeat"
            maxlength="256"
            required
            placeholder="Повторите пароль*"
            class="dark-field sign-up w-input"
          >
          <p class="contact-form-info-paragraph">
            Регистрируясь, вы соглашаетесь в нашей Политикой Конфиденциальности и Правилами Сервиса.
          </p>
          <div class="div-block-3">
            <button
              @click="submit"
              type="button"
              class="button light w-button"
            >
              Зарегистрироваться
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
        firstName: '',
        lastName: '',
        org: '',
        job: '',
        phone: '',
        vk: '',
        email: '',
        password: '',
        passwordRepeat: '',
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
          const body = {
            name: this.firstName,
            surname: this.lastName,
            email: this.email,
            password: this.password,
            company: this.org,
            phone_number: this.phone,
            social_link: this.vk,
            position: this.job,
          };
          const res = await fetch('/organizers/register', 'POST', body);
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
        if (!this.firstName || !this.lastName || !this.org
          || !this.job || !this.vk || !this.phone || !this.email
          || !this.password || !this.passwordRepeat) {
          error = 'Не все обязательные поля заполнены';
        } else if (this.password !== this.passwordRepeat) {
          error = 'Пароли не совпадают';
        } else if (this.phone.length !== 11) {
          error = 'Номер телефона неподходящей длины';
        } else if (!this.email.match(/.+@.+\..+/i)) {
          error = 'Неверный адрес электронной почты';
        } else if (!this.vk.match(/https?:\/\/.+\..+/i)) {
          error = 'Ссылка на соцсеть должна выглядеть как http://vk.com/id3234';
        } else if (!this.password.length > 7) {
          error = 'Длина пароля не может быть меньше 8 символов';
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
