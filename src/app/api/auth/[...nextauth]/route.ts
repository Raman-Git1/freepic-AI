import NextAuth from "next-auth"
import { authOptions } from "@/utils/authOptions"

const handler = NextAuth(authOptions)
export { handler as Get, handler as  Post }  // export both Get and Post methods