/**
 * @class Service
 *
 * Manages the data of the application.
 */

class UserService {
  constructor() {
    this.users = (JSON.parse(localStorage.getItem("users")) || []).map(
      (user) => new User(user)
    );
  }

  bindUserChanged(callback) {
    this.onChangedUsers = callback;
  }

  _commit(users) {
    this.onChangedUsers(users);
    localStorage.setItem("users", JSON.stringify(users));
  }

  addUser(user) {
    console.log("servicio",user)
    this.users.push(new User(user));
    this._commit(this.users);
  }
}
