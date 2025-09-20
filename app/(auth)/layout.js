const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex items-center justify-center min-h-screen px-4">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
