// we use decorators when we want to expand functionality of existing entity

function LogClass(constructor: Function) {
  console.log(constructor.name);
}

function LogMethod(target: Object, key: string, decriptor: PropertyDescriptor) {
  console.log(key);
}

@LogClass
class Plane {
  private id: number;

  constructor(id: number) {
    this.id = id;
  }

  @LogMethod
  getId() {
    return this.id;
  }
}
