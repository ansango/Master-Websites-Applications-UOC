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
    this.users.push(new User(user));
    this._commit(this.users);
  }

  deleteUser(_id) {
    console.log(_id)
    this.users = this.users.filter(({ id }) => id !== _id);
    this._commit(this.users);
  }

  deleteUserSelected(users){

  }

  editUser(updatedUser) {
    console.log(updatedUser);
    this.users = this.users.map((user) =>
      user.id === updatedUser.id ? new User(updatedUser) : user
    );
    this._commit(this.users);
  }
}
