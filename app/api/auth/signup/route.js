import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt'; 

export async function POST(request) {
    try {
        const { email, username, password } = await request.json();
    
        if (await db.user.findUnique({
            where: { email }
        })) 
            return NextResponse.json({user: null, message: "User with this email already exists"}, { status: 409});
    
        if (await db.user.findUnique({
            where: { username }
        })) 
            return NextResponse.json({user: null, message: "User with this username already exists"}, { status: 409});

        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: await hash(password, 10)
            }
        });
        const { password: newUserPassword, ...rest } = newUser;
    
        return NextResponse.json({ user: rest, message: "User created successfully"}, {status: 201})
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}