/**
 * @class Model
 *
 * Manages the data of the application.
 */

export default class Todo implements TodoLike {
  public id: string;
  constructor(public text: string, public complete: boolean = false, id?: string) {
    this.id = id || this.uuidv4();
  }

  private uuidv4() {
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: number) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
}

export interface TodoLike {
  text: string;
  complete: boolean;
  id: string;
}

export type Todos = Todo[];