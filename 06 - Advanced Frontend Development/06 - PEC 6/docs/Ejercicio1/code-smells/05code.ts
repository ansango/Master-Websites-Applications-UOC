/**
 * * Temporary Field
 */

// tslint:disable-next-line: typedef
function nameToObject(name) {
  const fullName = name.split(' ');
  const firstName = fullName[0];
  const lastName = fullName[1];

  return {
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  };
}
