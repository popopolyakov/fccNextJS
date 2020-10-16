
export interface IProduct {
    id: number | string;
    title: string;
    img: string;
    desc: string;
    src: string;
    outerLink: string
}


export interface IProductsArray extends Array<IProduct> {}




// Заглушка для Vercel
export const errorProjects: IProductsArray = [
  {
    "id": 1,
    "title": "ИЭЭ",
    "desc": "Делал давно по просьбе института. Сделан на Joomla, потому что нужно было быстро и много всего.",
    "img": "https://iee.mpei.ru/images/logo2x_.png",
    "src": "http://www.iee.mpei.ru",
    "outerLink": "true"
  },
  {
    "id": 2,
    "title": "OmenNuxt",
    "desc": "Проба Vue/Nuxt. Интересны были анимации в меню и рендер большого количества точек c ThreeJS.",
    "img": "https://nuxtjs.org/logos/nuxt-square.svg",
    "src": "http://www.omennuxt.herokuapp.ru",
    "outerLink": "true"
  },
  {
    "id": 3,
    "title": "GitHub",
    "desc": "Все новое будет там",
    "img": "http://pngimg.com/uploads/github/github_PNG40.png",
      "src": "https://github.com/popopolyakov",
      "outerLink": "true"
  },
  {
    "id": 4,
    "title": "Рисование Безье",
    "desc": "Рисовалка кривых Безье",
    "img": "https://www.seekpng.com/png/full/963-9634499_composite-bzier-curve-circle.png",
    "src": "/projects/bezie",
    "outerLink": "false"
  },
  {
    "id": 5,
    "title": "Карточки с котами 🐱",
    "desc": "🐱😍🐱😍🐱😍🐱😍🐱😍🐱",
    "img": "https://i.imgur.com/5rismzR.jpg",
    "src": "https://github.com/popopolyakov/catsPage",
    "outerLink": "true"
  },
  {
    "id": 6,
    "title": "Связь с GitHubAPI и React",
    "desc": "Работа через React с GitHubAPI, пагинация и поиск",
    "img": "http://pngimg.com/uploads/github/github_PNG40.png",
    "src": "https://github.com/popopolyakov/reactGithubApi",
    "outerLink": "true"
  },
  {
    "id": 7,
    "title": "Портфолио на котором вы сейчас",
    "desc": "Портфолио",
    "img": "http://techrocks.ru/wp-content/uploads/2017/12/fcc.png",
    "src": "https://github.com/popopolyakov/fccNextJS",
    "outerLink": "true"
  },
  {
    "id": 8,
    "title": "Таблица на Vue/Nuxt + Vuex",
    "desc": "Работа с таблице, верстка по макету с Figma, кастомные Select, пагинация, сортировка, удаление, изменение порядка отображения",
    "img": "http://techrocks.ru/wp-content/uploads/2017/12/fcc.png",
    "src": "https://github.com/popopolyakov/tableProductsVue",
    "outerLink": "true"
    }
  ]
