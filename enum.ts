enum EnumRoles {
  ADMIN,
  GUEST,
  USER,
}

const enum EnumColors {
  black,
  green,
  pink,
}

interface IUser {
  role: EnumRoles;
  color: EnumColors;
}

const user: IUser = {
  role: EnumRoles.GUEST,
  color: EnumColors.pink,
};

// differents between declare enum by 'const' and withot:

// without - JS will compile at
// (function (EnumRoles) {
//     EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
//     EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
//     EnumRoles[EnumRoles["USER"] = 2] = "USER";
// })(EnumRoles || (EnumRoles = {}));

// by 'const' - simple compiling and as result we'll win in optimization
// var user = {
//     role: EnumRoles.GUEST,
//     color: 2 /* EnumColors.pink */,
// };
