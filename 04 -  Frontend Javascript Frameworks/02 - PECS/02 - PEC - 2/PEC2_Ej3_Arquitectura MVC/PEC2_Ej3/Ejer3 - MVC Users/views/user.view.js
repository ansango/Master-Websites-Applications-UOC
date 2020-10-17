/**
 * @class View
 *
 * Visual representation of the model.
 */
class UserView {
  constructor() {
    this.table = this.getElementById("table-user");
    this.addButton = this.getElementById("add-user");
    this.editButton = this.getElementById("edit-user");
    this.deleteButton = this.getElementById("delete-user");
    this.init();
  }

  init() {
  }

  getElementById(selector) {
    const element = document.getElementById(selector);
    return element;
  }

  bindAddUserTable(handler) {
    this.addButton.addEventListener("submit", event => {
        event.preventDefault()
    });
  }
}
