<template>
  <header class="navbar w-nav">
    <div class="container-2 w-container">
      <nav role="navigation" class="nav-menu w-nav-menu">
        <a href="https://polymus.ru/ru/" target="_blank" class="nav-link light w-nav-link">Мой музей</a>
        <router-link to="profile" class="nav-link light w-nav-link">Мой профиль</router-link>
        <router-link to="projects" class="nav-link light w-nav-link">Проекты</router-link>
        <router-link to="analytics" class="nav-link light w-nav-link">Аналитика</router-link>
        <div :class="{'w--open': eventDrop}" class="dropdown w-dropdown">
          <div @click="toggleDrop" class="nav-link dropdown-toggle light w-dropdown-toggle">
            <div>События</div>
            <div class="dropdown-icon w-icon-dropdown-toggle" />
          </div>
          <nav :class="{'w--open': eventDrop}" class="dropdown-list w-dropdown-list">
            <router-link :to="{name: 'event'}" class="dropdown-link w-dropdown-link">ВК Хакатон</router-link>
            <router-link :to="{name: 'event'}" class="dropdown-link w-dropdown-link">Шахматный турнир</router-link>
          </nav>
        </div>
        <!--<router-link to="colleagues" class="nav-link light w-nav-link">Коллеги</router-link>
        <router-link to="partners" class="nav-link light w-nav-link">Партнеры</router-link>-->
      </nav><img src="/images/logoPoly.png" alt="" class="image-4">
      <div class="transparant-menu-button w-nav-button">
        <div class="w-icon-nav-menu" />
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        eventDrop: false,
      };
    },
    methods: {
      toggleDrop() {
        this.eventDrop = !this.eventDrop;
      }
    }
  };
</script>

<style>
  header.navbar {
    border-bottom: none
  }
</style>
