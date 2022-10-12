import { getSession } from 'next-auth/react';

export const filterObjByKey = (object, keys) => {
  return Object.keys(object)
    .filter(key => keys.includes(key))
    .reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {});
}

/**
 * Обновление страницы
 * @param router
 * @param scroll
 */
export const updatePage = (router, scroll = true) => {
  router
    .replace(
      {
        pathname: router.pathname,
        query: router.query
      },
      null,
      { scroll }
    )
};

export const ucfirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getUserPermissions = async () => {
  const session = await getSession();

  return session?.user?.relationMembers[0].role?.permissions?.map(permission => permission.code) || [];
};

export const checkAccess = async (permission) => {
  const userPermissions = await getUserPermissions();

  return userPermissions.includes(permission);
};

export const arrayColumn = (array, key) => {
  return array.map(item => item[key]);
};

export const objectFill = (keys, value) => {
  return keys.reduce((acc, cur) => {
    acc[cur] = value

    return acc;
  }, {})
};
