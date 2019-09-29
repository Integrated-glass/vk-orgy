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
    <EventApplied :applied="applied"/>
    <EventColleagues :colleagues="colleagues"/>
    <EventPartners :partners="partners"/>
    <EventSocials :socials="socials"/>
    <EventAccepted :accepted="accepted"/>
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
  import EventAccepted from "../components/event/accepted";

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
      length:80,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:1,
      width:140,
      // link:,
      length:80,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:2,
      width:140,
      // link:,
      length:80,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:3,
      width:140,
      // link:,
      length:80,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:4,
      width:140,
      // link:,
      length:80,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:5,
      width:140,
      // link:,
      length:80,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:6,
      width:140,
      // link:,
      length:80,
      logo:"/images/Postnauka-logo.png",
    },
    {
      id:7,
      width:140,
      // link:,
      length:80,
      logo:"/images/Postnauka-logo.png",
    }
  ];
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
  const colleagues = [
    {
      id:0,
      fullname:'Ирина Белых',
      descr:'Привлечение учёных для пиара в соцсетях',
      length:140,
      width:140,
      image:'',
    },
    {
      id:1,
      fullname:'Ирина Белых',
      descr:'Привлечение учёных для пиара в соцсетях',
      length:140,
      width:140,
      image:'',
    },
    {
      id:2,
      fullname:'Ирина Белых',
      descr:'Привлечение учёных для пиара в соцсетях',
      length:140,
      width:140,
      image:'',
    },
    {
      id:3,
      fullname:'Ирина Белых',
      descr:'Привлечение учёных для пиара в соцсетях',
      length:140,
      width:140,
      image:'',
    },
    {
      id:4,
      fullname:'Ирина Белых',
      descr:'Привлечение учёных для пиара в соцсетях',
      length:140,
      width:140,
      image:'',
    },
    {
      id:5,
      fullname:'Ирина Белых',
      descr:'Привлечение учёных для пиара в соцсетях',
      length:140,
      width:140,
      image:'',
    },
    {
      id:6,
      fullname:'Ирина Белых',
      descr:'Привлечение учёных для пиара в соцсетях',
      length:140,
      width:140,
      image:'',
    },
    {
      id:7,
      fullname:'Ирина Белых',
      descr:'Привлечение учёных для пиара в соцсетях',
      length:140,
      width:140,
      image:'',
    },
    {
      id:8,
      fullname:'Ирина Белых',
      descr:'Привлечение учёных для пиара в соцсетях',
      length:140,
      width:140,
      image:'',
    },
  ];

  const socials=[
    {
      id:0,
      link:'https://vk.com/polytech.one1',
      length:80,
      width:80,
      image:'',
    },
    {
      id:1,
      link:'https://www.facebook.com/polytech.one1/',
      length:80,
      width:80,
      image:'',
    },
    {
      id:2,
      link:'https://polymus.ru/ru/',
      length:80,
      width:80,
      image:'',
    },
    {
      id:3,
      link:'https://polymus.ru/ru/news/',
      length:80,
      width:80,
      image:'',
    },
    {
      id:4,
      link:'https://www.instagram.com/polytech.one/',
      length:80,
      width:80,
      image:'',
    }
  ];

  const applied=[
    {
      id:0,
      fullname:"Алексеева Полина",
      karma:83,
      age:18,
      experience:"Фотограф на публичных мероприятиях университета, монтирование видео",
      role1:"Фотограф",
      role2:"Консултант",
      role3:"Ведущий дискуссии"
    },
    {
      id:0,
      fullname:"Кирик Александр",
      karma:95,
      age:41,
      experience:"Помощь на хоккейных матчах,ведение лекции на научно-популярном мероприятии",
      role1:"Ведущий мастер-класса",
      role2:"Стажёр-историк",
      role3:"Фотограф"
    },
    {
      id:0,
      fullname:"Олеж Инокентий",
      karma:74,
      age:27,
      experience:"Консультирование участников конференции, работа на площадке, помощь в навигации",
      role1:"Консультант",
      role2:"Стажёр-историк",
      role3:"Аниматор"
    },
    {
      id:0,
      fullname:"Светличная Олеся",
      karma:88,
      age:33,
      experience:"Волонтёрство в детском дома, организация мероприятий на Новый год и другие праздники.",
      role1:"Стажёр-историк",
      role2:"Аниматор",
      role3:"Консультант"
    },
    {
      id:0,
      fullname:"Сидиров Алексей",
      karma:50,
      age:51,
      experience:"Консультант на площадке, постоянный волонтёр на экспозициях Гаража.",
      role1:"Кольсунтант",
      role2:"Ведущий мастер-класса",
      role3:"Ведущий дискусстт"
    }
  ];

  const accepted=[
    {
      id:0,
      fullname:"Яковлева Мария",
      role:'Фотограф',
      length:140,
      width:140,
      image:''
    },
    {
      id:1,
      fullname:"Эль-Факи Мария",
      role:'Ведущий дискуссии',
      length:140,
      width:140,
      image:''
    },
    {
      id:2,
      fullname:"Щинова Анастасия",
      role:'Стажёр-историк',
      length:140,
      width:140,
      image:''
    },
    {
      id:3,
      fullname:"Щербатых Иван",
      role:'Консультант',
      length:140,
      width:140,
      image:''
    },
    {
      id:4,
      fullname:"Щербанюк Алёна",
      role:'Аниматор',
      length:140,
      width:140,
      image:''
    },
    {
      id:5,
      fullname:"Шубина Снежана",
      role:'Ведущий мастер-класса',
      length:140,
      width:140,
      image:''
    }
  ];

  export default {
    components: {
      EventAccepted,
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
        partners,
        colleagues,
        socials,
        applied,
        accepted
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
