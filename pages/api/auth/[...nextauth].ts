import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:8000/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.username,
            password: credentials?.password,
          }),
        });
        if (res && res.status === 200) {
          const user = await res.json();
          // Any object returned will be saved in `user` property of the JWT
          return { ...user, accessToken: user.accessToken };
        } else {
          // Handle the error here
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      // If user data includes an accessToken, store it in the token
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }

      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
