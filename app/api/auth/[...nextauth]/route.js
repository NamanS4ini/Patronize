import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import mongoose from "mongoose"
import User from "@/models/user"
import Payment from "@/models/payment"
export const authOptions = NextAuth( {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === 'google' || account.provider === 'github') {
        //connect to database
        const client = await mongoose.connect( process.env.MONGODB_URI)
        const currentUser = await User.findOne({email: profile.email})
        console.log(currentUser);
        // console.log(currentUser);
        if(!currentUser){
          console.log("New");
          const newUser = new User({
            email: user.email,
            name: profile.name,
            username: user.email.split('@')[0]
          })
          await newUser.save()
          user.name = newUser.name
        }
        else{
          console.log("Current");
          user.name = currentUser.name
        }

        return true
      }
    }
  }
})

export {authOptions as GET, authOptions as POST}