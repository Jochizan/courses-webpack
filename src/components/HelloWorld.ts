export class HelloWorld {
  name: String;
  constructor(name: String) {
    this.name = name;
  }

  greet(): String {
    return `¡Hola Mundo, Webpack con ${this.name}`;
  }
}
