import useApi from 'src/composables/UseApi'

export default function postsService () {
  const { list, post, update, remove, getById } = useApi('users')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
