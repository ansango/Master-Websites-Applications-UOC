/**
 * * Middle Man
 */

type Student = {
  id: number;
  name: string;
  semester: number;
};

let Collection: Array<Student>;

class Model {
  public insertOne(data: Student): boolean {
    try {
      Collection.push(data);
      return true;
    } catch (error) {
      return false;
    }
  }
}

class Controller {
  saveOne(id: number, name: string, semester: number) {
    const model = new Model();
    const tmp: Student = {
      id,
      name,
      semester,
    };
    model.insertOne(tmp);
  }
}
