
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'doadores', name: 'doadores', component: () => import('pages/ListDoadores.vue') },
      { path: 'produtos', name: 'produtos', component: () => import('pages/ListProdutos.vue') },
      { path: 'user-post/:id?', name: 'postUser', component: () => import('pages/FormUsuario.vue') },
      { path: 'produto-post/:id?', name: 'postProduto', component: () => import('pages/FormProduto.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
