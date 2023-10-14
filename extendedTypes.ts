// basic

type TypeIsNumber<T> = T extends number ? "yes" : "no";

type Type1 = TypeIsNumber<number>;
type Type2 = TypeIsNumber<string>;

// feature

type TypeBrand = "bmw" | "mclaren" | "mercedes";
type TypePrice = "$100000" | "$400000" | "$50000";

type TypeCar = `${TypeBrand} ${TypePrice}`;

const car1: TypeCar = "bmw $50000";
const car2: TypeCar = "mercedes $100000";
const car3: TypeCar = "mclaren $400000";
