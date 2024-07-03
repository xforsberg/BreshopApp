import useApi from 'src/composables/UseApi'

export default function postsService () {
  const { list, post, update, remove, getById } = useApi('doadores')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
