"use client";

// Helper function to set cookies with proper settings
export function setAuthCookie(name, value, maxAge = 3600) {
  const cookieValue = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax; Secure=${location.protocol === 'https:'}`;
  document.cookie = cookieValue;
  console.log("Setting cookie:", name, "with value length:", value.length);
}

export function removeAuthCookie(name) {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  console.log("Removing cookie:", name);
}