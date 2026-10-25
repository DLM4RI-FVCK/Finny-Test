

import { defineStore } from 'pinia'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export const usePostStore = defineStore('posts', {
  state: () => ({
    post: null as Post | null,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchPost() {
      this.loading = true
      this.error = null

      try {
        this.post = await $fetch<Post>('/api/videos')
      } catch (error) {
        this.error = error instanceof Error
          ? error.message
          : 'Could not load the post.'
      } finally {
        this.loading = false
      }
    },
  },
})
