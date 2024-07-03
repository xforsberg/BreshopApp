<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-light-blue-4">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-avatar>
          <img src="/breshop.png">
        </q-avatar>
        <q-toolbar-title>
          Breshop
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menus
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Login',
    caption: '',
    icon: 'login',
    route: { name: 'login' }
  },
  {
    title: 'Doadores',
    caption: '',
    icon: 'list',
    route: { name: 'doadores' }
  },
  {
    title: 'Produtos',
    caption: '',
    icon: 'list',
    route: { name: 'produtos' }
  },
  {
    title: 'Sair',
    caption: '',
    icon: 'logout',
    route: ''
  }

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
