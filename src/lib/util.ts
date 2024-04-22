export const getTokenFromLocalStorage = (): string | null => {
  const tokenString = localStorage.getItem('token');
  return tokenString ? JSON.parse(tokenString) : null;
};
