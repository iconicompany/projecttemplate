import { useSession } from 'next-auth/react';

const Access = ({ children, permission }) => {
  const { data: session } = useSession();
  const userPermissions = session?.user?.role?.permissions?.map(permission => permission.code) || [];

  return (
    <>{userPermissions.includes(permission) && children}</>
  )
};

export default Access;