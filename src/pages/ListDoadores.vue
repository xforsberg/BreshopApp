<template>
  <q-page padding>
    <q-table
      title="Doadores"
      :rows="posts"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:top>
        <span class="text-h5">Doadores</span>
        <q-space />
        <q-btn color="primary" label="Novo" :to="{ name: 'postUser' }" />
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="q-gutter-sm">
          <q-btn icon="edit" color="info" dense size="sm" @click="handleEditPost(props.row.id)" />
          <q-btn icon="delete" color="negative" dense size="sm" @click="handleDeletePost(props.row.id)" />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import doadoresService from 'src/services/users'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const posts = ref([])
    const { list, remove } = doadoresService()
    const columns = [
      { name: 'id', field: 'id', label: 'ID', sortable: true, align: 'left' },
      { name: 'name', field: 'name', label: 'Nome Doador', sortable: true, align: 'left' },
      { name: 'email', field: 'email', label: 'E-mail', sortable: true, align: 'left' },
      { name: 'senha', field: 'senha', label: 'Senha', sortable: true, align: 'left' },
      { name: 'actions', field: 'actions', label: 'Ações', align: 'right' }
    ]
    const $q = useQuasar()
    const router = useRouter()

    onMounted(() => {
      getPosts()
    })

    const getPosts = async () => {
      try {
        const data = await list()
        posts.value = data
      } catch (error) {
        console.error(error)
      }
    }

    const handleDeletePost = async (id) => {
      try {
        $q.dialog({
          title: 'Deletar',
          message: 'Deseja deletar este doador ?',
          cancel: true,
          persistent: true
        }).onOk(async () => {
          await remove(id)
          $q.notify({ message: 'Apagado com sucesso', icon: 'check', color: 'positive' })
          await getPosts()
        })
      } catch (error) {
        $q.notify({ message: 'Erro ao apagar o doador', icon: 'times', color: 'negative' })
      }
    }

    const handleEditPost = (id) => {
      router.push({ name: 'postUser', params: { id } })
    }

    return {
      posts,
      columns,
      handleDeletePost,
      handleEditPost
    }
  }
})
</script>
