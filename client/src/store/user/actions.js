import { AUTH } from 'boot/firebase'

export default {
  handler: () => {
  },

  async logout (ctx) {
    console.log('user/logout')
    AUTH.signOut()
  },

  async init (ctx) {
    console.log('user/init')
  },

  async loggedIn (ctx, firebaseUser) {
    console.log(firebaseUser)
    const user = {
      displayName: firebaseUser.displayName,
      email: firebaseUser.email,
      emailVerified: firebaseUser.emailVerified,
      photoUrl: firebaseUser.photoURL
    }
    console.log('loggedIn', user)

    ctx.commit('current', user)

    ctx.dispatch('openDBChannel', { uid: firebaseUser.uid })
  },

  setUserField (ctx, change) {
    ctx.dispatch('set', change)
  },

  async reset (ctx) {
    console.log('user/reset')

    AUTH.signOut()

    await ctx.dispatch('closeDBChannel', { clearModule: true })
    ctx.commit('current', {})
  }

}
