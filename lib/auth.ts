import { supabase } from "./supabase"
import type { User, Session } from "@supabase/supabase-js"

export interface AuthUser extends User {
  // Add any custom user properties here
}

// Sign up with email and password
export async function signUp(email: string, password: string, metadata?: any) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
    },
  })

  return { data, error }
}

// Sign in with email and password
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return { data, error }
}

// Sign in with OAuth (Google, GitHub, etc.)
export async function signInWithOAuth(provider: "google" | "github" | "discord") {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  })

  return { data, error }
}

// Sign out
export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

// Get current session
export async function getSession(): Promise<{ session: Session | null; error: any }> {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession()
  return { session, error }
}

// Get current user
export async function getCurrentUser(): Promise<{ user: AuthUser | null; error: any }> {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  return { user: user as AuthUser, error }
}

// Reset password
export async function resetPassword(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/auth/reset-password`,
  })

  return { data, error }
}

// Update user profile
export async function updateProfile(updates: any) {
  const { data, error } = await supabase.auth.updateUser({
    data: updates,
  })

  return { data, error }
}

// Listen to auth state changes
export function onAuthStateChange(callback: (event: string, session: Session | null) => void) {
  return supabase.auth.onAuthStateChange(callback)
}
