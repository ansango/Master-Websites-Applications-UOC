type Student2 = {
  id: number;
  name: string;
  semester: number;
};

let Collection1: Array<Student2>;

class Model2 {
  public insertOne(data: Student2): boolean {
    try {
      Collection.push(data);
      return true;
    } catch (error) {
      return false;
    }
  }
}
