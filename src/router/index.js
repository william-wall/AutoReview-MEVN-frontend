import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Gallerys from '@/components/Gallery/Gallerys'
import CreateGallery from '@/components/Gallery/CreateGallery'
import Game from '@/components/Game/Game'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import ResetPassword from '@/components/User/ResetPassword'
import Gallery from '@/components/Gallery/Gallery'
import Reviews from '@/components/Review/Reviews'
import addreview from '@/components/Review/AddReview'
import editreview from '@/components/Review/EditReview'
import RoomList from '@/components/ChatRoom/RoomList'
import AddRoom from '@/components/ChatRoom/AddRoom'
import JoinRoom from '@/components/ChatRoom/JoinRoom'
import ChatRoom from '@/components/ChatRoom/ChatRoom'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/gallerys',
      name: 'Gallerys',
      component: Gallerys,
      beforeEnter: AuthGuard
    },
    {
      path: '/gallery/new',
      name: 'CreateGallery',
      component: CreateGallery,
      beforeEnter: AuthGuard
    },
    {
      path: '/gallerys/:id',
      name: 'Gallery',
      props: true,
      component: Gallery,
      beforeEnter: AuthGuard
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/reset',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/reviewlist',
      name: 'Reviews',
      component: Reviews,
      beforeEnter: AuthGuard
    },
    {
      path: '/reviews/add',
      component: addreview,
      name: 'addreview',
      beforeEnter: AuthGuard
    },
    {
      path: '/reviews/:id/edit',
      component: editreview,
      name: 'editreview',
      beforeEnter: AuthGuard
    },
    {
      path: '/roomlist',
      name: 'RoomList',
      component: RoomList
    },
    {
      path: '/add-room',
      name: 'AddRoom',
      component: AddRoom
    },
    {
      path: '/join-room/:id',
      name: 'JoinRoom',
      component: JoinRoom,
      beforeEnter: AuthGuard
    },
    {
      path: '/chat-room/:id/:nickname',
      name: 'ChatRoom',
      component: ChatRoom,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})
