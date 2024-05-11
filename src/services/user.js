const AUTH_USER_KEY = "auth-user";
const USERS_KEY = "aston-users";
const FAVORITS_KEY = "favorits"; 

const getUsers = () => {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY));
    return Array.isArray(users) ? users : [];
  } catch (e) {
    return [];
  }
};

const saveUsers = (users) =>
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

export class UserService {
  static async logIn({ email, password }) {
    const user = getUsers().find(
      (user) => user.email === email && user.password === password,
    );

    if (!user)
      throw new Error("Пользователь не найден. Проверьте логин или пароль.");
    
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    return user;
  }

  static async createUser(payload) {
    const users = getUsers();
    const findUserByLogin = getUsers().find(
      (user) => user.email === payload.email,
    );

    if (findUserByLogin)
      throw new Error("Пользователь c таким логином уже существует.");

    const newUser = {...payload, favorits: []}

    saveUsers([...users, newUser]);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(newUser));
    return newUser;
  }

  static async getProfile() {
    const user = JSON.parse(localStorage.getItem(AUTH_USER_KEY));

    if (user?.email && user?.password) return user;

    throw new Error("Невалидный пользователь.");
  }

  static logout() {
    localStorage.removeItem(AUTH_USER_KEY);
    window.location.href = "/";
  }
}
