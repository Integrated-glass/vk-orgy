<template>
  <div :class="{'modal-open': weightModal}" class="event-main">
    <Header/>
    <div class="image-hero busines-2">
      <div class="hero-block-overlay business-2"/>
    </div>
    <EventInfo :info="info[0]" @toggleModal="toggleWeightModal"/>
    <EventWeight @toggleModal="toggleWeightModal" class="modal-overlay"/>
    <EventTodo/>
    <EventRoles :roles="roles"/>
    <EventApplied/>
    <EventColleagues/>
    <EventPartners :partners="partners"/>
    <EventSocials/>
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

  const info = [{
    id: 1,
    tags: [{
      id: 1,
      name: 'Кино'
      },
      {
        id: 2,
        name: 'Искусство'
      },
      {
        id: 3,
        name: 'Технологии'
      },
      {
        id: 4,
        name: 'Фестивали'
      },
    ],
    weight: '75',
    org: "Политехнический музей",
    project: "Документальные фильмы",
    email: "360fest@polytech.com",
    place: 'Moscow',
    dates: "22/11/2019 - 02/12/2019",
    descr: "Политех360 — масштабный фестиваль идей и открытий в науке и технологиях. Как идеи влияют на жизнь и сознание людей? Как культура и искусство реагируют на прогресс? Кинопрограмма Политех360 этого года — это документальное кино о больших идеях, которые меняют мир.",
    ageRestr: '10+',
    name:'Политех 360'
  },
    {
      id: 2,
      tags: [{
        id: 5,
        name: 'Космос'
      },
        {
          id: 6,
          name: 'Биология'
        },
        {
          id: 7,
          name: 'Химия'
        }],
      weight: '93',
      org: "Политехнический музей",
      project: "Фестивали под открытым небом",
      email: "press@polymus.ru ;",
      place: 'Moscow',
      dates: "19/05/2020 - 20/05/2020  ",
      descr: "Масштабный научно-популярный проект под открытым небом от Политехнического музея. В выходные 19-20 мая фестиваль пройдет уже в шестой раз, и второй раз — на территории Парка Горького.",
      ageRestr: '10+',
      name:'Фестиваль Политех'
    }
  ];
  const partners =[
    {
      id:0,
      width:140,
      // link:,
      length:140,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:1,
      width:140,
      // link:,
      length:140,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:2,
      width:140,
      // link:,
      length:140,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:3,
      width:140,
      // link:,
      length:140,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:4,
      width:140,
      // link:,
      length:140,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:5,
      width:140,
      // link:,
      length:140,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:6,
      width:140,
      // link:,
      length:140,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:7,
      width:140,
      // link:,
      length:140,
      logo:"/images/Postnauka-logo.png",
    }
  ]
  const roles = [
    {
      name: 'Консультант',
      ageRestrict: '16+',
      descr: "Помогать посетителям определиться в выбором активности, которую они хотят посетить. Пояснение тонких художественных моментов в картинах.",
      required: 10,
      found: 7,
      left: 3
    },
    {
      name: 'Ведущий дискуссии',
      ageRestrict: '18+',
      descr: "Вести дискуссию после фильма. Помочь каждому высказаться и сформулировать, что ценного в этом фильме он нашёл.",
      required: 8,
      found: 6,
      left: 2
    },
    {
      name: 'Фотограф',
      ageRestrict: '12+',
      descr: "Создавать крутые фотографии, ловить момент и эмоции, не мешая гостям.",
      required: 15,
      found: 10,
      left: 5
    },
    {
      name: 'Ведущий мастер-класса',
      ageRestrict: '18+',
      descr: "Просвечивание плёнки, рассказ о старых технологиях фото- и видеосъёмки и о том, как старые материалы используются при создании документальных фильмов сегодня.",
      required: 10,
      found: 6,
      left: 4
    },
    {
      name: 'Аниматор',
      ageRestrict: '20+',
      descr: "Развлекать детей пока родители находятся на мероприятии с возрастным ограничением.",
      required: 3,
      found: 1,
      left: 2
    },
    {
      name: 'Стажёр-историк',
      ageRestrict: '0+',
      descr: "Составить информационые стенды, брошюры, описания к фестивальным фильмам с учётом исторического контекста. Доступ к архивам предпоставим.",
      required: 10,
      found: 7,
      left: 3
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
        info,
        partners
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
    overflow-x: hidden;
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
