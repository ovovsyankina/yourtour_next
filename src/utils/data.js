import * as Yup from "yup";

export const navLinks = [
  { name: "Туры", path: "#selectTour", index: 1 },

  {
    name: "Создать тур",
    path: "#collectTour",
    index: 2,
  },
  {
    name: "Отзывы",
    path: "#reviews",
    index: 3,
  },
  {
    name: "Истории",
    path: "#historyTravel",
    index: 4,
  },
];

export const tabsSelectTour = [
  { name: "Популярные", path: "/", index: 1, isActive: true },

  {
    name: "Авторские",
    index: 2,
    isActive: false,
  },
  {
    name: "Походы",
    index: 3,
    isActive: false,
  },
  {
    name: "Сплавы",
    index: 4,
    isActive: false,
  },
  {
    name: "Велопрогулки",
    index: 5,
    isActive: false,
  },
];

export const cardsSelectTour = [
  {
    index: 1,
    srcImg: "/image/card_tour1.jpg",
    title: "Путешествие в горы",
    description: "от 80 000 руб",
  },
  {
    index: 2,
    srcImg: "/image/card_tour2.jpg",
    title: "Путешествие в горы",
    description: "от 80 000 руб",
  },
  {
    index: 3,
    srcImg: "/image/card_tour3.jpg",
    title: "Путешествие в горы",
    description: "от 80 000 руб",
  },
  {
    index: 4,
    srcImg: "/image/card_tour4.jpg",
    title: "Путешествие в горы",
    description: "от 80 000 руб",
  },
  {
    index: 5,
    srcImg: "/image/card_tour5.jpg",
    title: "Путешествие в горы",
    description: "от 80 000 руб",
  },
  {
    index: 6,
    srcImg: "/image/card_tour6.jpg",
    title: "Путешествие в горы",
    description: "от 80 000 руб",
  },
];

export const cardsHistoryTour = [
  {
    index: 1,
    srcImg: "/image/history_photo1.jpg",
    title: "Автостопом в Стамбул",
    description:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
    descriptionDop: ["вкусная еда", "дешевый транспорт", "красивый город."],
    socialNetwork: ["instagram", "facebook", "YouTube"],
  },

  {
    index: 2,
    srcImg: "/image/history_photo2.jpg",
    title: "Автостопом в Стамбул",
    description:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
    socialNetwork: ["instagram", "ВКонтакте"],
  },
  {
    index: 3,
    srcImg: "/image/history_photo3.jpg",
    title: "Автостопом в Стамбул",
    description:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
    socialNetwork: ["instagram", "facebook", "ВКонтакте"],
  },
];

export const socialNetwork = [
  {
    index: 1,
    srcImg: "/image/svg/inst.svg",
    title: "instagram",
  },
  {
    index: 2,
    srcImg: "/image/svg/fb.svg",
    title: "facebook",
  },
  {
    index: 3,
    srcImg: "/image/svg/vk.svg",
    title: "vkontakte",
  },
];

export const imgTravelPhoto = [
  {
    index: 1,
    srcImg: "/image/travel_photo1.jpg",
    noneTablet: false,
    noneMobile: false,
  },
  {
    index: 2,
    srcImg: "/image/travel_photo2.jpg",
    noneTablet: true,
    noneMobile: true,
  },
  {
    index: 3,
    srcImg: "/image/travel_photo3.jpg",
    noneTablet: false,
    noneMobile: true,
  },
  {
    index: 4,
    srcImg: "/image/travel_photo4.jpg",
    noneTablet: false,
    noneMobile: false,
  },
  {
    index: 5,
    srcImg: "/image/travel_photo5.jpg",
    noneTablet: false,
    noneMobile: false,
    smallImage: true,
  },
  {
    index: 6,
    srcImg: "/image/travel_photo6.jpg",
    noneTablet: false,
    noneMobile: true,
    smallImage: true,
  },
  {
    index: 7,
    srcImg: "/image/travel_photo7.jpg",
    noneTablet: true,
    noneMobile: true,
    smallImage: true,
  },
  {
    index: 8,
    srcImg: "/image/travel_photo8.jpg",
    noneTablet: false,
    noneMobile: false,
    smallImage: true,
  },
  {
    index: 9,
    srcImg: "/image/travel_photo9.jpg",
    noneTablet: false,
    noneMobile: false,
    smallImage: true,
  },
  {
    index: 10,
    srcImg: "/image/travel_photo10.jpg",
    noneTablet: false,
    noneMobile: false,
  },
  {
    index: 11,
    srcImg: "/image/travel_photo11.jpg",
    noneTablet: false,
    noneMobile: false,
  },
  {
    index: 12,
    srcImg: "/image/travel_photo12.jpg",
    noneTablet: false,
    noneMobile: true,
  },
  {
    index: 13,
    srcImg: "/image/travel_photo13.jpg",
    noneTablet: true,
    noneMobile: true,
  },
];

export const dataInput = {
  initialValues: {
    firstName: "",
    direction: "",
    email: "",
    phone: "",
    dateFrom: "",
    dateBefore: "",
    comment: "",
    is18: "",
    isAgree: false,
  },

  validationSchema: Yup.object({
    firstName: Yup.string()
      .max(15, "Имя не должно превышать 15 символов")
      .required("Введите имя"),

    email: Yup.string()
      .email("Неверный адрес электронной почты")
      .required("Введите адрес электронной почты"),
    phone: Yup.string()
      .matches(/(\+7)[0-9]{3}[0-9]{4}/, "Номер телефона введен неверно")
      .required("Введите свой номер телефона"),
    direction: Yup.string().required("Выберите один из пунктов"),
    dateFrom: Yup.date().required("Введите дату начала"),

    dateBefore: Yup.date()
      .required("Введите дату окончания")
      .min(
        Yup.ref("dateFrom"),
        "Дата окончания не может быть раньше времени начала"
      ),
    comment: Yup.string().max(105, "Должно быть не более 105 символов"),
    is18: Yup.string().required("Выберите значение"),
    isAgree: Yup.bool()
      .oneOf([true], "Поставьте галочку")
      .required("Выберите значение"),
  }),

  fields: [
    {
      id: "firstName",
      fieldName: "Имя",
      type: "text",
      placeholder: "Введите Ваше имя",
    },
    {
      id: "direction",
      fieldName: "Направление",
      type: "select",
      placeholder: "Куда хотите ехать",
      options: ["Пункт 1 выбран", "Пункт 2 выбран"],
    },
    {
      id: "email",
      fieldName: "Email",
      type: "email",
      placeholder: "example@mail.com",
    },
    {
      id: "phone",
      fieldName: "Телефон",
      type: "tel",
      placeholder: "+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _",
    },
    {
      id: "dateFrom",
      type: "date",
      fieldName: "Дата от",
    },
    {
      id: "dateBefore",
      type: "date",
      fieldName: "Дата до",
    },
  ],
};
