import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
  base: '/vue2.0-demo/',
  routes:[
  {
    name: 'home',
    path:'/home',
    component: require('../components/home/home.vue'),
    children: [
        {
          path: 'movie',
          name: 'movie',
          component: require('../components/movie/movie.vue'),
          children:[
              {
                path: 'movie_list_coming',
                name: 'movie_list_coming',
                component: require('../components/movie/movie_list_coming.vue')
              },
              {
                path: 'movie_list_hot',
                name: 'movie_list_hot',
                component: require('../components/movie/movie_list_hot.vue')
              },
              {
                path: 'movie_list_top250',
                name: 'movie_list_top250',
                component: require('../components/movie/movie_list_top250.vue')
              },
              {
                path: '',
                redirect: '/home/movie/movie_list_top250'
              }
          ]
        },
        {
          path: 'music',
          name: 'music',
          component: require('../components/music/music.vue'),
        },
        {
          path: 'book',
          name: 'book',
          component: require('../components/book/book.vue')
        },
        {
          path: 'photo',
          name: 'photo',
          component: require('../components/photo/photo.vue')
        },
        {
          path:'/home',
          redirect:'/home/movie'
        }
      ]
  },
  {
    name: 'login', 
    path:'/login',
    component: require('../components/login/login.vue')
  },  
  {
    name: 'regist', 
    path:'/regist',
    component: require('../components/regist/regist.vue')
  },  
  {
    path: '/home/movie/detail/:id',
    name: 'movie-detail',
    component: require('../components/movie/movie_detail.vue'),
  },
  {
    path: '/home/music/list/:listId',
    name: 'music-list',
    component: require('../components/music/music_list.vue'),
  },
  {
    path: '/home/music/list/:listId/song/:songId',
    name: 'music-play',
    component: require('../components/music/music_play.vue'),
  },
  {
    path: '/home/photo/detail/:id',
    name: 'photo-detail',
    component: require('../components/photo/photo_detail.vue'),
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: require('../components/common/navbar.vue')
  },
  {
    path: '/headerBack',
    name: 'headerBack',
    component: require('../components/common/header_back.vue')
  },
  {
    path:'*', redirect: './login'
  }]

});


export default router;