const AuthLayout = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-background overflow-auto">
      <div className="min-h-full flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
