/**
 * @class View
 *
 * Visual representation of the model.
 */
class UserView {
  constructor() {
    this.newName = document.querySelector("#new-name");
    this.newEmail = document.querySelector("#new-email");
    this.newAddress = document.querySelector("#new-address");
    this.newPhone = document.querySelector("#new-phone");
    this.formAddUser = document.querySelector("#add-user-form");
    this.formEditUser = document.querySelector("#add-user-form");
    this.formDeleteUser = document.querySelector("#add-user-form");
    this.tbody = document.querySelector("tbody");
    this.tbody.innerHTML = "";
  }

  get _newUserInputs() {
    return {
      name: this.newName.value,
      email: this.newEmail.value,
      address: this.newAddress.value,
      phone: this.newPhone.value,
    };
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  displayUsers(users) {
    users.forEach((user, i) => {
      const tr = this.createElement("tr");

      const td0 = this.createElement("td");
      const span = this.createElement("span", "custom-checkbox");
      const input = this.createElement("input");
      input.type = "checkbox";
      input.id = `checkbox${i}`;
      input.name = "options[]";
      input.value = "1";
      const label = this.createElement("label", `checkbox${i}`);
      span.append(input, label);
      td0.append(span);

      const td1 = this.createElement("td");
      td1.innerText = `${user.name}`;

      const td2 = this.createElement("td");
      td2.innerText = `${user.email}`;

      const td3 = this.createElement("td");
      td3.innerText = `${user.address}`;

      const td4 = this.createElement("td");
      td4.innerText = `${user.phone}`;

      const td5 = this.createElement("td");
      const edit = this.createElement("a", "edit");
      edit.id = "#editEmployeeModal";
      edit.setAttribute("data-toggle", "modal");

      const iEdit = this.createElement("i", "material-icons");
      iEdit.innerText = "create";

      edit.append(iEdit);

      const del = this.createElement("a", "delete");
      const iDel = this.createElement("i", "material-icons");
      iDel.innerText = "delete";
      del.append(iDel);

      td5.append(edit, del);

      tr.append(td0, td1, td2, td3, td4, td5);

      this.tbody.append(tr);
    });
  }

  bindAddUser(handler) {
    this.formAddUser.addEventListener("submit", (event) => {
      handler(this._newUserInputs);
    });
  }
}
