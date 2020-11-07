/**
 * @class Model
 *
 * Manages the data of the application.
 */

interface TodoInterface {
  text?: string;
  complete?: boolean;
}

export class Todo implements TodoInterface {
  id: string;
  text: string;
  complete: boolean;
  props: TodoInterface;

  constructor({ text, complete }: TodoInterface = { complete: false }) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete;
  }

  uuidv4(): string {
    return Date.now().toString();
  }
}

export type Todos = Todo[];
