export default defineEventHandler(async () => {
  return await $fetch('https://jsonplaceholder.typicode.com/posts/1')
})
