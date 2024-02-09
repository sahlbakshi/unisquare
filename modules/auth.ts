import supabase from "./supabase"

export const signInWithGoogle = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          redirectTo: 'http://localhost:3000/mode'
        },
      })
    } catch (error) {
      console.error('Error signing in with Google:', error)
    }
}

export const signOut = async () => {
  try {
    await supabase.auth.signOut()
  } catch (error) {
    console.error('Error signing out:', error)
  }
}

export const session = async () => {
  try {
      const { data } = await supabase.auth.getSession()
      return data
  } catch (error) {
      console.log(error)
  }
}
