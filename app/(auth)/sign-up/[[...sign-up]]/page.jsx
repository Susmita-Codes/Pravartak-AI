import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full">
      <SignUp 
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/onboarding"
        appearance={{
          elements: {
            formButtonPrimary: "bg-primary hover:bg-primary/90",
            card: "shadow-xl",
            headerTitle: "text-2xl font-bold",
            headerSubtitle: "text-muted-foreground",
          }
        }}
      />
    </div>
  );
}
