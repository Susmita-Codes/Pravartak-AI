// This is a simplified approach for development
// In production, you should use Firebase Admin SDK

import { cookies } from "next/headers";
import { db } from "@/lib/prisma";

export async function getAuthenticatedUser() {
  try {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('firebase-user');
    
    console.log("Auth Debug - Cookie store:", cookieStore.getAll().map(c => c.name));
    console.log("Auth Debug - User cookie exists:", !!userCookie);
    
    if (!userCookie) {
      throw new Error("No authentication found - firebase-user cookie missing");
    }

    const userData = JSON.parse(decodeURIComponent(userCookie.value));
    const firebaseUserId = userData.uid;
    
    console.log("Auth Debug - Firebase UID:", firebaseUserId);

    const user = await db.user.findUnique({
      where: { firebaseUserId },
    });

    console.log("Auth Debug - User found in DB:", !!user);

    if (!user) {
      throw new Error(`User not found in database for UID: ${firebaseUserId}`);
    }

    return user;
  } catch (error) {
    console.error("Authentication error:", error);
    throw new Error(`Unauthorized: ${error.message}`);
  }
}