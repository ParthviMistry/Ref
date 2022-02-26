const isAuth = () => {
  return localStorage.getItem('token');
};

export const userType = () => {
  return localStorage.getItem('types');
};

export default isAuth;
