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
    this.service.bindUserTableChanged(this.onChangedUserTable);
    this.view.bindAddUserTable(this.handleAddUser);
    this.view.bindEditUserTable(this.handleEditUser);
    this.view.bindDeleteUserTable(this.handleDeleteUser);

    // Display initial todos
    this.onChangedUserTable(this.service.users);
  }
}
