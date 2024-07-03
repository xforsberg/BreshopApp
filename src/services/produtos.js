import useApi from 'src/composables/UseApi'

export default function postsService () {
  const { list, post, update, remove, getById } = useApi('produtos')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
