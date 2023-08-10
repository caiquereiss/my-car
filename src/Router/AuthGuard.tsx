import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  // Vou ter que criar um context para pegar o valor do signedIn
  const signedIn = false

  if (!signedIn && isPrivate) {
    return <Navigate to='/login' replace />
  }

  if (signedIn && !isPrivate) {
    return <Navigate to='/' replace />
  }


  return <Outlet />
}
