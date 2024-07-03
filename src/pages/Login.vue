<template>
  <div class="container q-mt-md">
    <div class="row absolute-center">
      <div class="col">
        <q-card class="my-card">
          <div class="text-center">
            <q-img src="/breshop.png" width="138px" heigth="197px" />
          </div>
          <q-card-section>
            <div class="text-h6">Logar</div>
          </q-card-section>
          <q-card-section>
            <q-form
              @submit="onSubmit"
              class="row q-col-gutter-sm"
            >
            <q-input
                  outlined
                  type="email"
                  v-model="form.email"
                  label="E-mail"
                  lazy-rules
                  class="col-lg-6 col-xs-12"
                  :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
                />
                <q-input
                  type="password"
                  outlined
                  v-model="form.senha"
                  label="Senha"
                  lazy-rules
                  class="col-lg-6 col-xs-12"
                  :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
                />

              <div class="col-12 q-gutter-sm">
                <q-btn
                  label="Entrar"
                  color="primary"
                  class="float-right"
                  type="submit"
                />
                <q-btn
                  label="Não possui conta? Cadastrar"
                  color="white"
                  class="float-right"
                  text-color="primary"
                  :to="{ name: 'postUser' }"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import usersService from 'src/services/users'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'FormPost',
  setup () {
    const { list } = usersService()
    const $q = useQuasar()
    const router = useRouter()
    const form = ref({
      user: '',
      email: '',
      senha: ''
    })

    const onSubmit = async () => {
      try {
        const response = await list()
        let test = false
        response.map(function (user, key) {
          if (user.email === form.value.email && user.senha === form.value.senha) {
            test = true
          }
          return test
        })

        if (!test) {
          $q.notify({ message: 'E-mail ou senha incorretos!', icon: 'check', color: 'negative' })
        } else {
          router.push({ name: 'home' })
        }
      } catch (error) {
        console.error(error)
      }
    }

    return {
      form,
      onSubmit
    }
  }
})
</script>
