<template>
  <div class="event-main">
    <Header/>
    <div class="image-hero busines-2"><div class="hero-block-overlay business-2" /></div>
    <EventInfo />
    <div class="section feature-section" />
    <EventWeight />
    <EventTodo />
    <EventRoles />
    <EventApplied />
    <EventColleagues />
    <EventPartners />
    <EventSocials />
  </div>
</template>

<script>
  import Header from '@/components/header';
  import EventInfo from '@/components/event/info';
  import EventWeight from '@/components/event/weight';
  import EventTodo from '@/components/event/todo';
  import EventSocials from '@/components/event/socials';
  import EventRoles from '@/components/event/roles';
  import EventApplied from '@/components/event/applied';
  import EventColleagues from '@/components/event/colleagues';
  import EventPartners from '@/components/event/partners';

  export default {
    components: {
      EventPartners,
      EventColleagues,
      EventApplied,
      EventRoles,
      EventSocials,
      EventTodo,
      EventWeight,
      EventInfo,
      Header
    }
  };
</script>

<style>
  .event-main {
    background-color: white;
  }
</style>
