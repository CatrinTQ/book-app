import { defineStore } from 'pinia'
const API_URL = import.meta.env.VITE_API_URL

const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    isAdmin: false,
    token: '', // ✅ Lägg till token här
  }),
  actions: {
    // Log in user and check Admin status
    async login(username: string, password: string) {
      console.log('Logging in:', username)

      try {
        const res = await fetch(`${API_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ username, password }),
        })

        console.log('Status:', res.status)

        const responseText = await res.json()
        console.log('Login response:', responseText)

        if (!res.ok) {
          throw new Error('Login failed')
        }

        this.isAuthenticated = true
        this.isAdmin = responseText.isAdmin
        this.token = responseText.token // ✅ Spara token i state

        console.log(`Login success! isAdmin: ${this.isAdmin}, token: ${this.token}`)

      } catch (err) {
        console.error('Login failed:', err)
        this.isAuthenticated = false
        this.isAdmin = false
      }
    },

    async logout() {
      console.log('Logging out')

      try {
        await fetch(`${API_URL}/auth/logout`, {
          method: 'POST',
          credentials: 'include',
        })

        this.isAuthenticated = false
        this.isAdmin = false
        this.token = '' // 🧹 Rensa token
        console.log('Logout success!')

      } catch (err) {
        console.error('Logout failed:', err)
        this.isAuthenticated = false
        this.isAdmin = false
        this.token = ''
      }
    },
  }
})

export default useAuthStore
