type TypeLength = {
  length: number;
};

function getNameLength<T extends TypeLength>(entity: T): number {
  return entity.length;
}

getNameLength("Pavel Topsky");
