// ! typescript
// - زبان تایپ اسکریپت بر اساس جاوا اسکریپت ساخته شده
// - برنامه ساخته شده با تایپ اسکریپت به جاوا اسکریپت کامپایل میشود
// --------------------------------------------------------------------------
// تایپ اسکریپت به دستورات جاوااسکریپت امکان * را افزوده
// {*} == Type Safety || Type checking

// --------- "Java Script" VS "Type Script" --------------------

// function addProduct(title, price) {
//   return title + price;
// }
// addProduct("Prudoct ", "99"); // Product 99

function addProductTs(title: string, price: number) {
  return title + price;
}
addProductTs("Prudoct ", "99"); // Error

// ------------------------------------------------------------------
// -در نتیجه توسعه نرم افزار با خطای کمتر و کد بهینه تر
// تایپ اسکریپت توسط ماکروسافت توسعه داده شده
// INSTALL Extension ==>  JavaScript and TypeScript Nightly
// ----------------------------------------------------------------
let product: {
  id: number;
  title: string;
  price: number;
  exist: boolean;
};

product = {
  id: 1,
  title: "pro1",
  price: 100,
  exist: true,
};
// ----------------------------------------------------------------
let cartItem: Array<string>;
// VS
let cartItem2: string[];

// for example
cartItem = ["apple", 4, "orange"];
cartItem2 = ["apple", "banana", 3];

// ----------------------------------------------------------------
let cartItem3: Array<string | number>;
// VS
let cartItem4: (string | number)[];

// for example
cartItem3 = ["apple", 4, "orange"];
cartItem4 = ["apple", "banana", 3];
// -------------------------------------------------------------------
// Custom Type : harf aval bozorg bayad bezarim !
type FnType = (userId: number, isAdmin: boolean) => void;

function createUser(id: number, email: string, role: FnType) {
  role(3, true);
}

// Union Type :
type Product = string | number;
let productId: Product = 123;
productId = "id123";
// ---------------------------------------------------------------------
type productMan = {
  id: number;
  name: string;
  price: number;
  exist: boolean;
};

let pro: productMan = {
  id: 1,
  name: "pro1",
  price: 100,
  exist: true,
};
// ---interface----VS----Type-------
interface productMan2 {
  id: number;
  name: string;
  price: number;
  exist: boolean;
}

let pro2: productMan2 = {
  id: 1,
  name: "pro1",
  price: 100,
  exist: true,
};
// ----------------------------------------------------------------