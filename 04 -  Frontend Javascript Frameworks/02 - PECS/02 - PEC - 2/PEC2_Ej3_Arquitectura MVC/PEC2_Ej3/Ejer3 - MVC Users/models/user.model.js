/**
 * @class Model
 *
 * Manages the data of the application.
 */

class User {
  constructor({ name, email, address, phone }) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }
}
