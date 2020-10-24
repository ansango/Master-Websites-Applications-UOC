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

    this.editName = document.querySelector("#edit-name");
    this.editEmail = document.querySelector("#edit-email");
    this.editAddress = document.querySelector("#edit-address");
    this.editPhone = document.querySelector("#edit-phone");

    this.formAddUser = document.querySelector("#add-user-form");
    this.formEditUser = document.querySelector("#edit-user-form");
    this.formDeleteUser = document.querySelector("#delete-user-form");

    this.tbody = document.querySelector("tbody");

    this.init();
  }

  init() {
    $(document).ready(function () {
      // Activate tooltip
      $('[data-toggle="tooltip"]').tooltip();
      const userSelected = [];
      // Select/Deselect checkboxes
      const checkbox = $('table tbody input[type="checkbox"]');
      $("#selectAll").click(function () {
        if (this.checked) {
          checkbox.each(function () {
            this.checked = true;
          });
        } else {
          checkbox.each(function () {
            this.checked = false;
          });
        }
      });
      checkbox.click(function () {
        const selectedRow = $(this).parents("tr")[0];
        if (this.checked) {
          selectedRow.setAttribute("data-selected", "true");
        }
        if (!this.checked) {
          selectedRow.setAttribute("data-selected", "false");
          $("#selectAll").prop("checked", false);
        }
      });
    });
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
      td1.className = "name";

      const td2 = this.createElement("td");
      td2.innerText = `${user.email}`;
      td2.className = "email";

      const td3 = this.createElement("td");
      td3.innerText = `${user.address}`;
      td3.className = "address";

      const td4 = this.createElement("td");
      td4.innerText = `${user.phone}`;
      td4.className = "phone";

      const td5 = this.createElement("td");
      const edit = this.createElement("a", "edit");
      edit.href = "#editEmployeeModal";
      edit.id = user.id;
      edit.setAttribute("data-toggle", "modal");
      const iEdit = this.createElement("i", "material-icons");
      iEdit.innerText = "create";
      iEdit.setAttribute("data-toggle", "tooltip");
      edit.append(iEdit);

      const del = this.createElement("a", "delete");
      const iDel = this.createElement("i", "material-icons");
      del.href = "#deleteEmployeeModal";
      del.id = user.id;
      del.setAttribute("data-toggle", "modal");
      iDel.innerText = "delete";
      iDel.setAttribute("data-toggle", "tooltip");
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

  bindDeleteUser(handler) {
    this.tbody.addEventListener("click", (event) => {
      if (event.target.parentElement.className === "delete") {
        const id = event.target.parentElement.id;
        this.formDeleteUser.className = id;
      }
    });

    this.formDeleteUser.addEventListener("click", (event) => {
      const id = this.formDeleteUser.className;
      handler(id);
    });
  }

  bindEditUser(handler) {
    this.tbody.addEventListener("click", (event) => {
      if (event.target.parentElement.className === "edit") {
        const id = event.target.parentElement.id;
        const name =
          event.target.parentElement.parentElement.parentElement.childNodes[1]
            .innerText;
        const email =
          event.target.parentElement.parentElement.parentElement.childNodes[2]
            .innerText;
        const address =
          event.target.parentElement.parentElement.parentElement.childNodes[3]
            .innerText;
        const phone =
          event.target.parentElement.parentElement.parentElement.childNodes[4]
            .innerText;

        this.formEditUser.className = id;
        this.editName.value = name;
        this.editEmail.value = email;
        this.editAddress.value = address;
        this.editPhone.value = phone;
      }
    });

    this.formEditUser.addEventListener("submit", (event) => {
      const updatedUser = {
        id: this.formEditUser.className,
        name: this.editName.value,
        email: this.editEmail.value,
        address: this.editAddress.value,
        phone: this.editPhone.value,
      };
      handler(updatedUser);
    });
  }

  bindDeleteUserSelected(handler) {}
}
