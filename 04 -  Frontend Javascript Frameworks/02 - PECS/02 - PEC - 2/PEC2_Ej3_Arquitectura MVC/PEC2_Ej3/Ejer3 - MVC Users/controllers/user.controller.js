/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

class UserController {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    // Explicit this binding
    this.service.bindUserChanged(this.onChangedUsers);
    this.view.bindAddUser(this.handleAddUser);
    //this.view.bindEditUser(this.handleEditUser);
    //this.view.bindDeleteUser(this.handleDeleteUser);

    // Display initial todos
    this.onChangedUsers(this.service.users);
  }
  onChangedUsers = (users) => {
    this.view.displayUsers(users);
  };
  handleAddUser = (user) => {
    this.service.addUser(user);
  };
}
