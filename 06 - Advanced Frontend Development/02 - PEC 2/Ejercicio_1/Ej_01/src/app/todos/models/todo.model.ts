export class Todo {
  public id: number;
  public title: string;
  public done: boolean;

  constructor(title: string) {
    this.id = new Date().getTime();
    this.title = title;
    this.done = false;
  }
}
