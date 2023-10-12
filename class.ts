class Car {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  protected getInfo(): string {
    return `${this.name} - ${this.price}`;
  }
}

class Bus extends Car {
  constructor(name: string, price: number) {
    super(name, price);
  }

  test() {
    return this.getInfo();
  }
}

// new Car("BMW", 100000).getInfo(); - 'protected' have the similar behavior like 'private'
// but also we can use it in extends classes
