<template>
  <div class="main-div">
    <Header/>
    <div class="image-hero busines-2">
      <div class="hero-block-overlay business-2">
        <div class="video-hero-container w-container">
          <div class="full-hero-content-block">
            <h1 class="overall-hero-title">Политех 360</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container w-container">
      <div class="section-title-wrapper">
        <h2 class="section-title">Аналитика</h2>
        <div class="section-description">Парадокс- это истинна, вставшая на уши <br>ради привлечения
          внимания
          <br><br>
          Николас Фаллетта<br>
        </div>
      </div>
      <div class="process-tabs-line w-hidden-tiny"></div>
      <div data-duration-in="300" data-duration-out="100" class="process-tabs w-tabs">
        <div class="process-tab-menu w-tab-menu">
          <a class="process-tab-button w-inline-block w-tab-link">
            <img src="/images/age.png" alt="" class="process-tab-icon">
            <div>Возраст</div>
          </a><a class="process-tab-button w-inline-block w-tab-link">
            <img src="/images/sputnic.png" alt="" class="process-tab-icon">
            <div class="text-block-15">Спутник</div>
          </a><a class="process-tab-button w-inline-block w-tab-link w--current">
            <img src="/images/mus.png" alt="" class="process-tab-icon">
            <div>Музеи</div>
          </a>
        </div>
        <div class="w-tab-content">
          <div data-w-tab="Tab 1" class="process-tab-pane w-tab-pane">
            <div class="div-block-32">
              <div>
                <img src="/images/11222.png" height="290" alt="">
              </div>
              <div class="div-block-33">
                <img src="/images/2222.png" height="290" alt="">
              </div>
            </div>
          </div>
          <div class="process-tab-pane w-tab-pane">
            <div class="div-block-32">
              <div>
                <img src="/images/33333.png" height="290" alt="">
              </div>
              <div class="div-block-34"><img src="/images/4444.png" height="290" alt=""></div>
            </div>
          </div>
          <div data-w-tab="Tab 3" class="process-tab-pane w-tab-pane w--tab-active">
            <div class="process-tab-row w-row">
              <div class="process-tab-col-left w-col w-col-6">
                <blockquote class="block-quote">Историю делают не пессимисты,<br> а
                  оптимисты
                  <br>‍<br>
                  Митио Каку
                </blockquote>
              </div>
              <div class="process-tab-col-right w-col w-col-6">
                <div class="div-block-35">
                  <img src="/images/5555.png" alt="" class="image-15">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container w-container">
        <div class="map-and-form-wrapper w-clearfix">
          <div class="worldmap-left-wrapper">
            <div>
              <img src="/images/карта.png" alt="">
            </div>
          </div>
          <div class="map-contact-form w-form">
            <form id="email-form" name="email-form" data-name="Email Form">
              <h2 class="section-title">Наша география</h2>
              <div class="section-description">Человеку свойственно принимать границы собственного
                кругозора за границы мира
                <br><br>
                Артур Шопенгауэр
              </div>
            </form>
            <div class="success-message w-form-done">
              <p>Спасибо, мы всё получили!</p>
            </div>
            <div class="error-bg w-form-fail">
              <p>Упс... Что-то пошло не так</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="div-block-36">
        <div class="div-block-37">
          <div class="div-block-39">
            <img src="/images/fb.png" width="80" alt="">
          </div>
          <div class="div-block-38">
            <img src="/images/insta.png" width="80" alt="">
          </div>
          <div>
            <img src="/images/vkontakte_PNG3.png" width="73" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    import Header from "../components/header";

    export default {
        components: {Header}
    }
</script>

<style>
  .main-div {
    background-color:  white;
  }
</style>
