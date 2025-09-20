import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn 
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
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
