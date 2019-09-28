<template>
  <div>
    <Header/>
    <div class="image-hero busines-2">
      <div class="hero-block-overlay business-2"></div>
    </div>
    <div class="full-hero-content-block">
      <div class="div-block-13">
        <div class="div-block-13 hh">
          <img src="/images/360-лого.jpg" alt="" class="image-12 aa">
          <div class="div-block-19">
            <div class="text-block-3 tag">Кино</div>
            <div class="text-block-3 tag2">Искусство</div>
            <div class="text-block-3 tag3">Технологии</div>
            <div class="text-block-3 tag4">Фестиваль</div>
          </div>
          <div class="text-block-3">Вес: 85</div>
          <div class="text-block-3">Организатор: Политехнический музей</div>
          <div class="text-block-3">Проект: Документальные фильмы</div>
          <div class="text-block-3">Email: 360fest@polytech.com</div>
          <a href="#" class="button-6 w-button">Сгенерировать бейдж</a>
          <a href="#" class="button-6 w-button">Сгенерировать отчёт</a>
          <a href="#" class="button-5 w-button">Рассчитать вес мероприятия</a>
        </div>
        <div class="div-block-13 bb">
          <h1 class="heading-4">Политех 360</h1>
          <div class="text-block-4">Москва</div>
          <div class="text-block-3">22/11/2019 - 02/12/2019</div>
          <div class="text-block-4">10+</div>
          <div class="text-block-5">Политех360 — масштабный фестиваль идей и открытий в науке и технологиях. Как идеи влияют на жизнь и сознание людей? Как культура и искусство реагируют на прогресс? Кинопрограмма Политех360 этого года — это документальное кино о больших идеях, которые меняют мир.
          </div>
          <a href="#" class="button-3 w-button">Редактировать</a>
        </div>
      </div>
    </div>
    <div class="section feature-section"></div>
    <div class="section tint">
      <h1 class="heading-5">Вес мероприятия</h1>
      <div class="div-block-14">
        <div class="dropdown-3 dropdown-4 w-dropdown">
          <div class="dropdown-toggle-3 w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div class="text-block-13">1. Планируемое кол-во посетителей</div>
          </div>
          <nav class="w-dropdown-list">
            <a href="#" class="w-dropdown-link">1 - 1000</a>
            <a href="#" class="w-dropdown-link">1000 - 5000</a>
            <a href="#" class="w-dropdown-link">5000 - 20 000</a>
            <a href="#" class="w-dropdown-link">20 000 - 100 000</a>
            <a href="#" class="w-dropdown-link">Более 100 000</a>
          </nav>
        </div>
        <div data-delay="0" class="dropdown-3 w-dropdown">
          <div class="dropdown-toggle-5 w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div class="text-block-9">2.Мероприятие на открытом воздухе?</div>
          </div>
          <nav class="w-dropdown-list"><a href="#" class="w-dropdown-link">Да</a>
            <a href="#" class="w-dropdown-link">Нет</a>
          </nav>
        </div>
        <div data-delay="0" class="dropdown-3 w-dropdown">
          <div class="dropdown-toggle-4 w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div>3. Необходимое кол-во волонтёров</div>
          </div>
          <nav class="w-dropdown-list">
            <a href="#" class="w-dropdown-link">0 - 20</a>
            <a href="#" class="w-dropdown-link">20 - 50</a>
            <a href="#" class="w-dropdown-link">50 - 100</a>
            <a href="#" class="w-dropdown-link">Более 100</a>
          </nav>
        </div>
        <div data-delay="0" class="dropdown-3 w-dropdown">
          <div class="dropdown-toggle-7 w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div class="text-block-10">4. Стратегическая важность мероприятия по шкале от 1 до 10</div>
          </div>
          <nav class="w-dropdown-list">
            <a href="#" class="w-dropdown-link">1</a>
            <a href="#" class="w-dropdown-link">2</a>
            <a href="#" class="w-dropdown-link">3</a>
            <a href="#" class="w-dropdown-link">4</a>
            <a href="#" class="w-dropdown-link">5</a>
            <a href="#" class="w-dropdown-link">6</a>
            <a href="#" class="w-dropdown-link">7</a>
            <a href="#" class="w-dropdown-link">8</a>
            <a href="#" class="w-dropdown-link">9</a>
            <a href="#" class="w-dropdown-link">10</a>
          </nav>
        </div>
        <div data-delay="0" class="dropdown-3 w-dropdown">
          <div class="dropdown-toggle-6 w-dropdown-toggle">
            <div class="w-icon-dropdown-toggle"></div>
            <div class="text-block-11">5. Является ли мероприятие частью какого-то проекта?</div>
          </div>
          <nav class="w-dropdown-list">
            <a href="#" class="w-dropdown-link">Да</a>
            <a href="#" class="w-dropdown-link">Нет</a>
          </nav>
        </div>
      </div>
    </div>
    <div class="section feature-section tint">
      <h1 class="heading-5">Мой TODO список </h1>
      <div class="form-block w-form">
        <form
          name="email-form"
          class="form-2">
          <input
            type="text"
            class="w-input"
            maxlength="256"
            name="field"
            placeholder="Добавить задачу"
            required="">
          <div class="div-block-31">
            <div class="todo-item">
              <label
                class="w-checkbox checkbox-field">
                <input
                  type="checkbox"
                  name="checkbox-2"
                  data-name="Checkbox 2"
                  class="w-checkbox-input">
                <span class="checkbox-label w-form-label">Найти лектора</span>
              </label>
              <div class="text-block-14">x</div>
            </div>
            <div class="todo-item">
              <label class="w-checkbox checkbox-field">
                <input
                  type="checkbox"
                  name="checkbox-2"
                  class="w-checkbox-input">
                <span class="checkbox-label w-form-label">Найти лектора</span>
              </label>
              <div class="text-block-14">x</div>
            </div>
          </div>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
    <div class="section tint">
      <h1 class="heading-5">Роли</h1>
      <div class="pricing-row w-row">
        <div class="pricing-column w-col w-col-4">
          <div class="white-pricing-block">
            <div class="pricing-block-content-wrapper">
              <div class="pricing-block-price">Консультант
                <br>
                ‍</div>
              <div class="pricing-block-price subtitle _88">16+</div>
              <div class="pricing-block-price subtitle">Помогать посетителям определиться в выбором активности, которую они хотят посетить. Пояснение тонких художественных моментов в картинах.</div>
            </div>
            <ul class="pricing-feature-list w-list-unstyled">
              <li class="pricing-feature-item">
                <div class="div-block-22">
                  <div>Надо</div>
                  <div class="text-block-6">10</div>
                </div>
                <div class="div-block-24">
                  <div>Найдено</div>
                  <div class="text-block-7">7</div>
                </div>
                <div class="div-block-23">
                  <div>Осталось</div>
                  <div class="text-block-8">3</div>
                </div>
              </li>
            </ul>
            <div class="pricing-block-content-wrapper bottom">
              <a href="/contact/contact-3" class="button white-pricing-button w-button">Редактировать</a>
            </div>
          </div>
        </div>
        <div class="pricing-column w-col w-col-4">
          <div class="white-pricing-block">
            <div class="pricing-block-content-wrapper">
              <div class="pricing-block-price">Ведущий дискуссии
                <br>
                ‍</div>
              <div class="pricing-block-price subtitle _88">18+</div>
              <div class="pricing-block-price subtitle">Вести дискуссию после фильма. Помочь каждому высказаться и сформулировать, что ценного в этом фильме он нашёл.
                <br>
                ‍</div>
            </div>
            <ul class="pricing-feature-list w-list-unstyled">
              <li class="pricing-feature-item">
                <div class="div-block-25">
                  <div>Надо</div>
                  <div class="text-block-6">10</div>
                </div>
                <div class="div-block-27">
                  <div>Найдено</div>
                  <div class="text-block-7">7</div>
                </div>
                <div class="div-block-26">
                  <div>Осталось</div>
                  <div class="text-block-8">3</div>
                </div>
              </li>
            </ul>
            <div class="pricing-block-content-wrapper bottom">
              <a href="/contact/contact-2" class="button white-pricing-button w-button">Редактировать</a>
            </div>
          </div>
        </div>
        <div class="pricing-column w-col w-col-4">
          <div class="white-pricing-block">
            <div class="pricing-block-content-wrapper">
              <div class="pricing-block-price">Ведущий
                <br>
                мастер-класса</div>
              <div class="pricing-block-price subtitle _88">18+</div>
              <div class="pricing-block-price subtitle">Просвечивание плёнки, рассказ о старых технологиях фото- и видеосъёмки и о том, как старые материалы используются при создании документальных фильмов сегодня.</div>
            </div>
            <ul class="pricing-feature-list w-list-unstyled">
              <li class="pricing-feature-item">
                <div class="div-block-30">
                  <div>Надо</div>
                  <div class="text-block-6">10</div>
                </div>
                <div class="div-block-28">
                  <div>Найдено</div>
                  <div class="text-block-7">7</div>
                </div>
                <div class="div-block-29">
                  <div>Осталось</div>
                  <div class="text-block-8">3</div>
                </div>
              </li>
            </ul>
            <div class="pricing-block-content-wrapper bottom">
              <a href="/contact/contact-2" class="button white-pricing-button w-button">Редактировать</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section tint _343">
      <h1 class="heading-5">Подавшиеся Волонтёры</h1>
      <div class="pricing-row w-row">
        <div class="pricing-column w-col w-col-4">
          <div class="white-pricing-block">
            <div class="pricing-block-content-wrapper">
              <div class="pricing-block-price">Турищева Полина </div>
              <div class="pricing-block-price subtitle">18 лет
                <br>
              </div>
              <div class="pricing-block-price subtitle">Карма: 78
                <br>
              </div>
              <div> class="pricing-block-price subtitle">Опыт волонтёрства: помощь на хоккейных матчах,ведение лекции на научно-популярном мероприятии</div>
            </div>
            <ul class="pricing-feature-list w-list-unstyled">
              <li class="pricing-feature-item">
                <div>
                  <div>Консультант
                    <br>
                    ‍</div>
                  <a href="#" class="button-4 w-button">Выбрать</a>
                </div>
                <div>
                  <div>Ведущий
                    <br>
                    дискуссии
                  </div>
                  <a href="#" class="button-4 w-button">Выбрать</a>
                </div>
                <div>
                  <div>Лектор
                    <br>
                  </div>
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
        <div class="pricing-column w-col w-col-4">
          <div class="white-pricing-block">
            <div class="pricing-block-content-wrapper">
              <div class="pricing-block-price">Корсунов Максим</div>
              <div class="pricing-block-price subtitle">19 лет
                <br>
              </div>
              <div class="pricing-block-price subtitle">Карма: 82
                <br>
              </div>
              <div class="pricing-block-price subtitle">Опыт волонтёрства: фотограф на публичных мероприятиях университета, монтирование видео</div>
            </div>
            <ul class="pricing-feature-list w-list-unstyled">
              <li class="pricing-feature-item">
                <div>
                  <div>Фотограф
                    <br>
                    ‍</div>
                  <a href="#" class="button-4 w-button">Выбрать</a>
                </div>
                <div>
                  <div>
                    Звукарь
                    <br>‍
                  </div>
                  <a href="#" class="button-4 w-button">Выбрать</a>
                </div>
                <div>
                  <div>Ведущий
                    <br>
                    дискуссии
                    <br>
                  </div>
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
        <div class="pricing-column w-col w-col-4">
          <div class="white-pricing-block">
            <div class="pricing-block-content-wrapper">
              <div class="pricing-block-price">Лысенко Тимур</div>
              <div class="pricing-block-price subtitle">19 лет
                <br>
              </div>
              <div class="pricing-block-price subtitle">Карма: 80
                <br>
              </div>
              <div class="pricing-block-price subtitle">Опыт волонтёрства: консультирование участников конференции, работа на площадке, помощь в навигации</div>
            </div>
            <ul class="pricing-feature-list w-list-unstyled">
              <li class="pricing-feature-item">
                <div>
                  <div>Ведущий
                    <br>
                    мастер-класса
                  </div>
                  <a href="#" class="button-4 w-button">Выбрать</a>
                </div>
                <div>
                  <div>Ведущий
                    <br>
                    мастер-класса
                  </div>
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
    <div class="section tint">
      <h1 class="heading-5">Утверждённые Волонтёры</h1>
      <div class="pricing-row w-row">
        <div class="pricing-column w-col w-col-4">
          <div class="white-pricing-block">
            <div class="pricing-block-content-wrapper">
              <div class="top">
                <div>
                  <div class="pricing-block-price">Алексей Супергерой</div>
                  <div class="pricing-block-price subtitle">Ведущий дискуссии</div>
                </div>
                <div>
                  <img
                    src="/images/руки_вверх.jpg"
                    height="127"
                    width="180"
                    alt=""
                    class="image-13">
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
        <div class="pricing-column w-col w-col-4">
          <div class="white-pricing-block">
            <div class="pricing-block-content-wrapper">
              <div class="top">
                <div>
                  <div class="pricing-block-price">Екатерина Огонь</div>
                  <div class="pricing-block-price subtitle">Консультант</div>
                </div>
                <div>
                  <img
                    src="/images/катя-огонь.jpg"
                    width="180"
                    height="127"
                    alt=""
                    class="image-14">
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
        <div class="pricing-column w-col w-col-4">
          <div class="white-pricing-block">
            <div class="pricing-block-content-wrapper">
              <div class="top">
                <div>
                  <div class="pricing-block-price">Елена Доброволец</div>
                  <div class="pricing-block-price subtitle">Консультант</div>
                </div>
                <div class="div-block-18">
                  <img
                    src="/images/лена-доброволец.jpg"
                    height="127"
                    width="180"
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
    <div class="section feature-section">
      <div class="container w-container">
        <h1 class="heading-5">Коллеги</h1>
        <div class="section-title-wrapper"></div>
        <div class="portfolio-tabs w-tabs">
          <div class="portfolio-tabs-menu w-tab-menu">
            <a class="portfolio-tab-button w-inline-block w-tab-link">
              <div>Пиар</div>
            </a>
            <a class="portfolio-tab-button w-inline-block w-tab-link w--current">
              <div>Площадка</div>
            </a>
            <a class="portfolio-tab-button w-inline-block w-tab-link">
              <div>Планирование</div>
            </a>
          </div>
          <div class="w-tab-content">
            <div class="portfolio-tab-pane w-tab-pane">
              <div class="div-block-15">
                <div class="div-block-16">
                  <div>
                    <img
                      src="/images/ира.jpg"
                      width="140"
                      height="140"
                      alt="">
                  </div>
                  <div class="div-block-17">
                    <a href="#" class="link-2">Ирина Белых
                      <br>‍
                    </a>
                    <div class="text-block-12">Привлечение
                      <br>учёных
                      <br>для пиара
                      <br>в соцсетях
                    </div>
                  </div>
                </div>
                <div class="div-block-16">
                  <div>
                    <img
                      src="/images/ира.jpg"
                      width="140"
                      height="140"
                      alt="">
                  </div>
                  <div class="div-block-17">
                    <a href="#" class="link-2">Ирина Белых
                      <br>‍
                    </a>
                    <div class="text-block-12">Привлечение
                      <br>учёных
                      <br>для пиара
                      <br>в соцсетях</div>
                  </div>
                </div>
                <div class="div-block-16">
                  <div>
                    <img
                      src="/images/ира.jpg"
                      width="140"
                      height="140"
                      alt="">
                  </div>
                  <div class="div-block-17">
                    <a href="#" class="link-2">Ирина Белых
                      <br>‍
                    </a>
                    <div class="text-block-12">Привлечение
                      <br>учёных
                      <br>для пиара
                      <br>в соцсетях
                    </div>
                  </div>
                </div>
                <div class="div-block-16">
                  <div>
                    <img
                      src="/images/ира.jpg"
                      width="140"
                      height="140"
                      alt="">
                  </div>
                  <div class="div-block-17">
                    <a href="#" class="link-2">Ирина Белых
                      <br>‍
                    </a>
                    <div class="text-block-12">Привлечение
                      <br>учёных
                      <br>для пиара
                      <br>в соцсетях
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="App Design" class="portfolio-tab-pane w-tab-pane w--tab-active">
              <div class="div-block-15">
                <div class="div-block-16">
                  <div>
                    <img
                      src="/images/ира.jpg"
                      width="140"
                      height="140"
                      alt="">
                  </div>
                  <div class="div-block-17">
                    <a href="#" class="link-2">Ирина Белых
                      <br>‍
                    </a>
                    <div class="text-block-12">Привлечение
                      <br>учёных
                      <br>для пиара
                      <br>в соцсетях
                    </div>
                  </div>
                </div>
                <div class="div-block-16">
                  <div>
                    <img
                      src="/images/ира.jpg"
                      width="140"
                      height="140"
                      alt="">
                  </div>
                  <div class="div-block-17">
                    <a href="#" class="link-2">Иван Боганцев
                      <br>‍
                    </a>
                    <div class="text-block-12">Организация
                      <br>благотворительных
                      <br>мероприятий
                      <br>в рамках фестиваля
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="Graphic Design" class="portfolio-tab-pane w-tab-pane">
              <div class="div-block-15">
                <div class="div-block-16">
                  <div>
                    <img
                      src="/images/ира.jpg"
                      width="140"
                      height="140"
                      alt="">
                  </div>
                  <div class="div-block-17">
                    <a href="#" class="link-2">Ирина Белых
                      <br>
                      ‍</a>
                    <div class="text-block-12">Привлечение
                      <br>учёных
                      <br>для пиара
                      <br>в соцсетях
                    </div>
                  </div>
                </div>
                <div class="div-block-16">
                  <div>
                    <img
                      src="/images/ира.jpg"
                      width="140"
                      height="140"
                      alt="">
                  </div>
                  <div class="div-block-17">
                    <a href="#" class="link-2">Ирина Белых
                      <br>‍
                    </a>
                    <div class="text-block-12">Привлечение
                      <br>учёных
                      <br>для пиара
                      <br>в соцсетях
                    </div>
                  </div>
                </div>
                <div class="div-block-16">
                  <div>
                    <img
                      src="/images/ира.jpg"
                      width="140"
                      height="140"
                      alt="">
                  </div>
                  <div class="div-block-17">
                    <a href="#" class="link-2">Ирина Белых
                      <br>‍
                    </a>
                    <div class="text-block-12">Привлечение
                      <br>учёных
                      <br>для пиара
                      <br>в соцсетях
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section tint">
      <div class="container aaa w-container">
        <div class="section-title-wrapper">
          <h2 class="section-title">Партнёры</h2>
        </div>
      </div>
      <div class="portfolio-tabs w-tabs">
        <div class="portfolio-tabs-menu w-tab-menu">
          <a  class="portfolio-tab-button w-inline-block w-tab-link">
            <div>Пиар</div>
          </a>
          <a class="portfolio-tab-button w-inline-block w-tab-link">
            <div>Площадка</div>
          </a>
          <a class="portfolio-tab-button w-inline-block w-tab-link w--current">
            <div>Планирование</div>
          </a>
        </div>
        <div class="w-tab-content">
          <div class="portfolio-tab-pane w-tab-pane">
            <div class="div-block-15">
              <img
                src="/images/VK_Logo.png"
                width="80"
                height="80"
                alt="">
              <img
                src="/images/yandex.png"
                width="120"
                height="80"
                alt="">
              <img
                src="/images/Postnauka-logo.png"
                width="140"
                height="40"
                alt="">
            </div>
          </div>
          <div class="portfolio-tab-pane w-tab-pane">
            <div class="div-block-15">
              <img
                src="/images/мамм.png"
                width="80"
                height="80"
                alt="">
              <img
                src="/images/msu.png"
                width="120"
                height="80"
                alt="">
              <img
                src="/images/Garagesvg.png"
                width="140"
                height="40"
                alt="">
              <img
                src="/images/explo.png"
                width="180"
                height="80"
                alt="">
            </div>
          </div>
          <div class="portfolio-tab-pane w-tab-pane w--tab-active">
            <div class="div-block-15">
              <img
                src="/images/logoPoly.png"
                width="80"
                height="80"
                alt="">
              <img
                src="/images/Сколково.Logo_.png"
                width="120"
                height="100"
                alt="">
              <img
                src="/images/png.png"
                width="160"
                height="40"
                alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="intro" class="section feature-section">
      <h1 class="heading-5">Соцсети</h1>
      <ul class="pricing-feature-list w-list-unstyled">
        <li class="pricing-feature-item">
          <div>
            <img
              src="/images/VK_Logo.png"
              width="80"
              height="80"
              alt="">
          </div>
          <div>
            <img
              src="/images/fb.png"
              width="80"
              height="80"
              alt="">
          </div>
          <div>
            <img
              src="/images/insta.png"
              width="80"
              alt="">
          </div>
        </li>
      </ul>
      <ul class="pricing-feature-list w-list-unstyled">
        <li class="pricing-feature-item">
          <div>
            <a href="#" class="button-4 w-button"> Редактировать</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="simple-footer">
      <div class="container-4 w-container">
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
            <a href="https://www.facebook.com/polytech.one1/" target="_blank" class="footer-social-icon w-inline-block">
              <img src="/images/Icon-facebook_1.png" alt="" class="footer-small-social-icon">
            </a>
            <a href="https://twitter.com/hashtag/политехнический" target="_blank" class="footer-social-icon w-inline-block">
              <img src="/images/Icon-twitter_1.png" alt="" class="footer-small-social-icon">
            </a>
            <a href="https://vk.com/polytech.one1" target="_blank" class="footer-social-icon w-inline-block">
              <img
                src="/images/lohoVK.png"
                width="18"
                height="16"
                alt=""
                class="footer-small-social-icon">
            </a>
          </div>
        </div>
      </div>
      <div class="simple-bottom-footer"></div>
    </div>
  </div>
</template>

<script>import Header from '@/components/header';
  export default {components: { Header }};
</script>
