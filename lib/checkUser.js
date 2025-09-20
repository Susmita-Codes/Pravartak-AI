import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return null;
    }

    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();
    const email = user.emailAddresses?.[0]?.emailAddress;

    if (!email) {
      console.error("No email found for user");
      return null;
    }

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: name || "User",
        imageUrl: user.imageUrl || "",
        email: email,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error in checkUser:", error.message);
    return null;
  }
};
