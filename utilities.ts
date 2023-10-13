interface ICar {
  id: number;
  name: string;
  price: number;
  yearBuilt: number;
}

interface ICarCreate extends Omit<ICar, "id"> {} // we use Omit when we want exclude some key of existing interface

interface ICarId extends Pick<ICar, "id"> {} // we use Pick when we want to get only this key for new interface

interface IOptionalCar extends Partial<ICar> {} // when want to make all  values are not necessary - id? name? price? yearBuilt?

interface IRequiredCar extends Required<ICar> {} // opposite to Optional

type TypeCarRecord = Record<"name" | "price", string | number>; // another way to create smth like interface or type

type TypeGetName = () => string;
type Return = ReturnType<TypeGetName>; // use ReturnType to understand what func will return

const car: TypeCarRecord = {
  name: "Pavel",
  price: 2500,
};

type NotNull = NonNullable<string | boolean | null | undefined | number>; // will return all except null & undefined
