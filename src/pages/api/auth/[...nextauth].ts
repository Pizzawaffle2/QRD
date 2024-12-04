import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface Credentials {
    email: string;
    password: string;
}

interface User {
    id: string;
    name: string;
    email: string;
}

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials: Credentials | undefined): Promise<User | null> {
                const user: User = { id: '1', name: 'Admin', email: 'admin@example.com' };
                if (
                    credentials?.email === 'admin@example.com' &&
                    credentials?.password === 'password'
                ) {
                    return user;
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/auth/login',
    },
});
