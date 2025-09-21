import { db } from "./prisma";

export const checkUser = async (firebaseUser) => {
  try {
    if (!firebaseUser) {
      return null;
    }

    const loggedInUser = await db.user.findUnique({
      where: {
        firebaseUserId: firebaseUser.uid,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const email = firebaseUser.email;
    const name = firebaseUser.displayName || "User";

    if (!email) {
      console.error("No email found for user");
      return null;
    }

    const newUser = await db.user.create({
      data: {
        firebaseUserId: firebaseUser.uid,
        name: name,
        imageUrl: firebaseUser.photoURL || "",
        email: email,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error in checkUser:", error.message);
    return null;
  }
};
