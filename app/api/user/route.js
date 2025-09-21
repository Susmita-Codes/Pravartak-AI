import { NextResponse } from 'next/server';
import { db } from '@/lib/prisma';

export async function POST(request) {
  try {
    const { firebaseUser } = await request.json();
    
    if (!firebaseUser || !firebaseUser.uid) {
      console.error('Invalid user data received:', firebaseUser);
      return NextResponse.json(
        { error: 'Invalid user data' },
        { status: 400 }
      );
    }

    console.log('Checking/creating user for UID:', firebaseUser.uid);

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: {
        firebaseUserId: firebaseUser.uid,
      },
    });

    if (existingUser) {
      console.log('User already exists:', existingUser.id);
      return NextResponse.json({ user: existingUser });
    }

    // Create new user
    const email = firebaseUser.email;
    const name = firebaseUser.displayName || "User";

    if (!email) {
      console.error('No email found for user:', firebaseUser.uid);
      return NextResponse.json(
        { error: 'No email found for user' },
        { status: 400 }
      );
    }

    console.log('Creating new user with email:', email);

    const newUser = await db.user.create({
      data: {
        firebaseUserId: firebaseUser.uid,
        name: name,
        imageUrl: firebaseUser.photoURL || "",
        email: email,
      },
    });

    console.log('User created successfully:', newUser.id);
    return NextResponse.json({ user: newUser });
  } catch (error) {
    console.error("Error in user API:", error);
    return NextResponse.json(
      { error: `Failed to create/check user: ${error.message}` },
      { status: 500 }
    );
  }
}