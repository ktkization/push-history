import PageSignIn from './pages/SignIn'
import PageSearch from './pages/Search'

export default [
  {
    path: "/",
    component: PageSignIn
  },
  {
    path: "/search",
    name: 'search',
    component: PageSearch
  }
];
