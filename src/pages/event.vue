<template>
  <div :class="{'modal-open': weightModal}" class="event-main">
    <Header/>
    <div class="image-hero busines-2"><div class="hero-block-overlay business-2" /></div>
    <EventInfo @toggleModal="toggleWeightModal" />
    <EventWeight @toggleModal="toggleWeightModal" class="modal-overlay" />
    <EventTodo />
    <EventRoles :roles="roles" />
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

  const roles = [
    {
      name: 'Consilt',
      ageRestrict: 16,
    },
    {
      name: 'Consilt',
      ageRestrict: 16,
    }
  ];

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
    },
    data() {
      return {
        weightModal: false,
        roles,
      };
    },
    methods: {
      toggleWeightModal() {
        this.weightModal = !this.weightModal;
      }
    }
  };
</script>

<style>
  .event-main {
    background-color: white;
  }

  .modal-overlay {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 1000;
  }

  .modal-open .modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
