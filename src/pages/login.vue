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
            id="Email-3"
            type="email"
            name="Email"
            data-name="Email"
            maxlength="256"
            required=""
            placeholder="Email"
            class="dark-field sign-up w-input"
          >
          <input
            id="Telephone-3"
            type="password"
            name="Telephone-3"
            data-name="Telephone 3"
            maxlength="256"
            required=""
            placeholder="Password"
            class="dark-field sign-up w-input"
          >
          <p class="contact-form-info-paragraph" />
          <div class="div-block-2">
            <input
              type="submit"
              value="Войти"
              data-wait="Please wait..."
              class="button light w-button"
            >
          </div>
        </form>
        <div class="success-message w-form-done">
          <p>Thank you! Your submission has been received!</p>
        </div>
        <div class="error-bg w-form-fail">
          <p>Oops! Something went wrong while submitting the form</p>
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
</script>

<style>
  .full-sign-up-block {
    height: 100vh !important;
  }
</style>
