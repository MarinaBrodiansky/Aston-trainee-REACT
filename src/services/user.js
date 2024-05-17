const AUTH_USER_KEY = "auth-user";
const USERS_KEY = "aston-users";

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
    try {
      const user = getUsers().find(
        (user) => user.email === email && user.password === password
      );

      if (!user)
        throw new Error("Пользователь не найден. Проверьте логин или пароль.");

      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));

      window.location.href = "/";
    } catch (e) {
      alert(e.message);
    }
  }

  static async createUser(payload) {
    try {
      const users = getUsers();
      const findUserByLogin = getUsers().find(
        (user) => user.email === payload.email
      );

      if (findUserByLogin)
        throw new Error("Пользователь c таким логином уже существует.");

      const newUser = { ...payload, favorits: [], history: [] };

      saveUsers([...users, newUser]);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(newUser));
      window.location.href = "/";
    } catch (e) {
      alert(e.message);
    }
  }

  static updateUser(user) {
    const users = getUsers();
    saveUsers(
      users.map((dbUser) => {
        if (user.email === dbUser.email) return user;
        return dbUser;
      })
    );
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
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
