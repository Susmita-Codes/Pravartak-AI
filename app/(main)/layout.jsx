"use client";

import React from "react";
import ProtectedRoute from "@/components/protected-route";

const MainLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <div className="container mx-auto mt-24 mb-20">{children}</div>
    </ProtectedRoute>
  );
};

export default MainLayout;
