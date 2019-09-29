<template>
  <div class="profile-main">
    <Header/>
    <MyProfile :profile="profile" />

    <div class="section top-line">
      <div class="container _444 w-container">
        <div class="section-title-wrapper">
          <h2 class="section-title">Все мероприятия</h2>
          <div class="section-description">Присоединись к мероприятиям коллег</div>
        </div>
        <div class="pricing-options w-row">
          <div class="pricing-column w-col w-col-4">
            <div class="pricing-block">
              <div class="pricing-price">НПК</div>
              <div class="pricing-title">МОСКВА</div>
              <div class="pricing-title">4/12/2018 - 6/12/2019</div>
              <p class="pricing-paragraph">XII научно-практическая конференция «История науки и техники.Музейное дело»</p>
              <a href="/contact/contact-2" class="button pricing-button w-button">Узнать Больше</a>
            </div>
          </div>
          <div class="pricing-column w-col w-col-4">
            <div class="pricing-block image">
              <div class="pricing-price">ДОД&nbsp;
                <br>
                Университета детей
              </div>
              <div class="pricing-title">Москва, вднх</div>
              <div class="pricing-title">8/09/2019</div>
              <p class="pricing-paragraph">День Открытых Дверей- знакомство с командой проекта и
                учеными, &nbsp;открытые занятия, &nbsp;подробности о программе осеннего семестра и
                &nbsp;ответы на все &nbsp;вопросы.</p>
              <a href="/contact/contact-5" class="button pricing-button w-button">Узнать Больше</a>
            </div>
          </div>
          <div class="pricing-column w-col w-col-4">
            <div class="pricing-block">
              <div class="pricing-price">День города</div>
              <div class="pricing-title">Москва, вднх</div>
              <div class="pricing-title">7/09/2019 - 8/09/2019</div>
              <p class="pricing-paragraph">Бесплатные экскурсии в честь дня города</p>
              <a href="/contact/contact-4" class="button pricing-button w-button">Узнать Больше</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section tint">
      <div class="container _444 w-container">
        <div class="section-title-wrapper">
          <h2 class="section-title">Коллеги</h2>
          <div class="section-description">Ты знаешь, к кому обратиться за помощью</div>
        </div>
        <div class="team-member-list-wrapper w-dyn-list">
          <div class="team-member-list w-dyn-items w-row">
            <div class="team-member-item w-dyn-item w-col w-col-6">
              <div
                style="background-image:url('https://assets.website-files.com/5d8e00e17b0ad74319b2c7ab/5d8e518f54697f19712b44d0_%D1%8E%D0%BB%D1%8F-2.jpg')"
                class="team-image-block">
                <div class="team-image-block-overlay">
                  <div class="team-block-title">Юлия Шахновская</div>
                  <div class="team-block-title subtitle">Генеральный директор</div>
                  <a href="http://www.facebook.com" class="team-social-button w-inline-block">
                    <img
                      src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad73c02b2c817_Icon-facebook.png"
                      alt=""
                      class="team-social-icon">
                  </a>
                  <a
                    href="http://www.twitter.com"
                    target="_blank"
                    class="team-social-button w-inline-block">
                    <img
                      src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad73f76b2c888_Icon-twitter.png"
                      alt=""
                      class="team-social-icon">
                  </a>
                  <a
                    href="http://www.google.com"
                    target="_blank"
                    class="team-social-button w-inline-block">
                    <img
                      src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad7300fb2c871_Icon-google.png"
                      alt=""
                      class="team-social-icon">
                  </a>
                </div>
              </div>
            </div>
            <div class="team-member-item w-dyn-item w-col w-col-6">
              <div
                style="background-image:url('https://assets.website-files.com/5d8e00e17b0ad74319b2c7ab/5d8e5212d95436db3e1fd2ab_%D1%82%D0%B0%D0%BD%D1%8F-2.jpg')"
                class="team-image-block">
                <div class="team-image-block-overlay">
                  <div class="team-block-title"> Татьяна Рябухина</div>
                  <div class="team-block-title subtitle"> Куратор детских программ, руководитель
                    Университета детей
                  </div>
                  <a href="http://www.facebook.com" class="team-social-button w-inline-block">
                    <img
                      src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad73c02b2c817_Icon-facebook.png"
                      alt=""
                      class="team-social-icon">
                  </a>
                  <a
                    href="http://www.twitter.com"
                    target="_blank"
                    class="team-social-button w-inline-block">
                    <img
                      src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad73f76b2c888_Icon-twitter.png"
                      alt=""
                      class="team-social-icon">
                  </a>
                  <a
                    href="http://www.google.com"
                    target="_blank"
                    class="team-social-button w-inline-block">
                    <img
                      src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad7300fb2c871_Icon-google.png"
                      alt=""
                      class="team-social-icon">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="team-member-list-wrapper w-dyn-list">
          <div class="team-member-list w-dyn-items w-row">
            <div class="team-member-item w-dyn-item w-col w-col-4">
              <div class="team-outline-block">
                <img
                  src="https://assets.website-files.com/5d8e00e17b0ad74319b2c7ab/5d8e00e17b0ad784fab2c7b0_Testimonial-15.jpg"
                  alt=""
                  class="team-portrait-image">
                <div class="text-block-2">Иван Боганцев</div>
                <div class="team-block-title subtitle">Замдиректора по просветительской и образовательной работе</div>
                <a href="http://www.facebook.com" class="team-social-button dark w-inline-block">
                  <img
                    src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad70405b2c83c_Icon-facebook.png"
                    alt=""
                    class="team-social-icon dark">
                </a>
                <a href="http://www.twitter.com" class="team-social-button dark w-inline-block">
                  <img
                    src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad775e7b2c819_Icon-twitter.png"
                    alt=""
                    class="team-social-icon dark">
                </a>
                <a href="http://www.google.com" class="team-social-button dark w-inline-block">
                  <img
                    src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad7299bb2c833_Icon-Google-plus.png"
                    alt=""
                    class="team-social-icon dark">
                </a>
              </div>
            </div>
            <div class="team-member-item w-dyn-item w-col w-col-4">
              <div class="team-outline-block">
                <img
                  src="https://assets.website-files.com/5d8e00e17b0ad74319b2c7ab/5d8e506d20075a5b5b83efa2_%D0%B8%D1%80%D0%B0.jpg"
                  alt=""
                  class="team-portrait-image">
                <div class="text-block-2">Ирина Белых</div>
                <div class="team-block-title subtitle">Программный директор фестиваля актуального научного кино «360°»</div>
                <a href="http://www.facebook.com" class="team-social-button dark w-inline-block">
                  <img
                    src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad70405b2c83c_Icon-facebook.png"
                    alt=""
                    class="team-social-icon dark">
                </a>
                <a href="http://www.twitter.com" class="team-social-button dark w-inline-block">
                  <img
                    src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad775e7b2c819_Icon-twitter.png"
                    alt=""
                    class="team-social-icon dark">
                </a>
                <a href="http://www.google.com" class="team-social-button dark w-inline-block">
                  <img
                    src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad7299bb2c833_Icon-Google-plus.png"
                    alt=""
                    class="team-social-icon dark">
                </a>
              </div>
            </div>
            <div class="team-member-item w-dyn-item w-col w-col-4">
              <div class="team-outline-block">
                <img
                  src="https://assets.website-files.com/5d8e00e17b0ad74319b2c7ab/5d8e503154697f01d92b2f78_%D1%81%D0%B0%D1%88%D0%B0.jpg"
                  alt=""
                  class="team-portrait-image">
                <div class="text-block-2">Александра Коперник</div>
                <div class="team-block-title subtitle">Куратор лектория, руководитель проекта «Научные бои»</div>
                <a href="http://www.facebook.com" class="team-social-button dark w-inline-block">
                  <img
                    src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad70405b2c83c_Icon-facebook.png"
                    alt=""
                    class="team-social-icon dark">
                </a>
                <a href="http://www.twitter.com" class="team-social-button dark w-inline-block">
                  <img
                    src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad775e7b2c819_Icon-twitter.png"
                    alt=""
                    class="team-social-icon dark">
                </a>
                <a href="http://www.google.com" class="team-social-button dark w-inline-block">
                  <img
                    src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad7299bb2c833_Icon-Google-plus.png"
                    alt=""
                    class="team-social-icon dark">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="simple-footer">
      <div class="container w-container">
        <div class="footer-row w-row">
          <div class="footer-logo-column-left w-col w-col-3">
            <div class="footer-logo">Политех.волонтёр</div>
          </div>
          <div class="footer-menu-column w-col w-col-6">
            <a href="https://polymus.ru/ru/" target="_blank" class="footer-inline-link">Политех</a>
            <a href="http://amnit.org" target="_blank" class="footer-inline-link">Амнит</a>
            <a href="https://bm.digital" target="_blank" class="footer-inline-link">Большой музей</a>
          </div>
          <div class="footer-social-col-right w-col w-col-3">
            <a
              href="https://www.facebook.com/polytech.one1/"
              target="_blank"
              class="footer-social-icon w-inline-block">
              <img
                src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad73c02b2c817_Icon-facebook.png"
                alt=""
                class="footer-small-social-icon">
            </a>
            <a
              href="https://twitter.com/hashtag/политехнический"
              target="_blank"
              class="footer-social-icon w-inline-block">
              <img
                src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e00e17b0ad73f76b2c888_Icon-twitter.png"
                alt=""
                class="footer-small-social-icon">
            </a>
            <a href="https://vk.com/polytech.one1" target="_blank" class="footer-social-icon w-inline-block">
              <img
                src="https://assets.website-files.com/5d8e00e17b0ad79f3cb2c7a0/5d8e383d9fdd338e7f9784af_lohoVK.png"
                width="18"
                height="16"
                alt=""
                class="footer-small-social-icon">
            </a>
          </div>
        </div>
      </div>
      <div class="simple-bottom-footer" />
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header';
  import MyProfile from "../components/profile/my_profile";

  const profile=[
    {
      name:"Polytech.Science.Art",
      link: "https://polymus.ru/ru/events/special_projects/polytech.science.art-nauka.-iskusstvo.-tehnologii/",
      descr:"Ежегодная международная фестивальная неделя, посвященная взаимодействию искусства, науки и технологий."
    },
    {
      name:"Фестиваль 360",
      link: "http://360.polytech.one",
      descr:"Масштабный фестиваль идей и открытий в науке и технологиях."
    },
    {
      name:"Фестиваль Политех",
      link: "http://fest.polymus.ru/ru/",
      descr:"Ежегодный тематический фестиваль под открытым небом."
    },
    {
      name:"Научные бои",
      link: "https://polymus.ru/ru/events/special_projects/10775-nauchnye-boi-politehnicheskogo-muzeya/",
      descr:"Молодые ученые наглядно и просто объясняют самые сложные научные идеи со сцены."
    }
  ];
  export default {
    components: {
      MyProfile,
      Header
    },
    data() {
      return {
        profile
      };
    }
  };
</script>

<style>
  .profile-main header {
    position: static !important;
  }
</style>


<style scoped>
  .portfolio-item {
    margin-top: 1em;
  }
</style>
