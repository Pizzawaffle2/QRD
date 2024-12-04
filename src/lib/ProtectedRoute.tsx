const ProtectedRoute: React.FC<{ children: React.ReactNode; requiredRole?: string }> = ({
  children,
  requiredRole,
}) => {
  const { isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  const userHasRequiredRole = user?.['https://example.com/roles']?.includes(requiredRole);

  if (!isAuthenticated || (requiredRole && !userHasRequiredRole)) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
