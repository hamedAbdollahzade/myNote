import React, { useState } from "react";
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
// - تایپ ها خیلی شبیه اینترفیس
// - با این تفاوت که تایپ ها عمومی تر هستین در صورتی ک تمرکز اینترفیس روی ابجکت ها می باشد
// ---------------------------------------------------------------------
let productHamed: "hamed" | "sepehr";

productHamed = "hamed";
productHamed = "sepehr";
// ------------------------------------------------------------------------------

type name = "hamed" | "sepehr";

let cartItem20: Array<name>;

cartItem20 = ["hamed", "sepehr"];

// --------------------------------------------------------------------------------
/* 
TypeScript " generic type " :
 To identify a generic type,
 you must prefix the function with <Type> where Type is the generic variable.
 Note: We often use T for generic types. However, it's not limited to any name. Let's redo the above function as a generic typed function
*/
type man<T> = {
  id: number;
  name: Array<T>;
  age: 25;
};

let man1: man<string> = {
  id: 1,
  name: ["KOBRA", "AZAM", "SOGHRA"],
  age: 25,
};

// --------------------------------------------------------------------------------------------

//? یکم قشنگ ترش کنیم مثال بالارو

type Data<T> = {
  dataType: Array<T>; //string , number , ...
};

type Pro = {
  title: string;
  price: number;
};

// اینجا کاستوم تایپ خودمون رو به عنوان ارگومان داینامیک پاس دادیم به تایپ دیتا
const info: Data<Pro> = {
  dataType: [
    { title: "pro1", price: 100 },
    { title: "pro2", price: 200 },
    { title: "pro3", price: 300 },
    //...
  ],
};

// -----------------------------------------------------------
// حالا داخل کامپوننت ها چجوری داستان ؟
function sum(a: number, b: number): number {
  return a + b;
}
// -------------
type Proooops = {
  name: string;
  title: string;
  sum: (a: number, b: number) => number;
  male?: boolean; // ==> optional (Not required)
  girlFriend?: "taranoom" | "tarane" | "fatima"; // ===> Union Type
  children: React.ReactNode; // ===> React Node Type
};
// --------------
export function Component({ name, sum, title, children }: Proooops) {
  return (
    <div className="p-4">
      <h1>Component Type Script Test</h1>
      <div>name : {name}</div>
      <div>Title : {title}</div>
      <div>sum(2,3) = {sum(2, 3)}</div>
      <div>{children}</div>
    </div>
  );
}
//----- مثال زیر مدل arrow Function () => {} ------
// export const Component: React.FC<Proooops> = ({
//   name,
//   sum,
//   title,
// }: Proooops) => {
//   return (
//     <div className="p-4">
//       <h1>Component Type Script Test</h1>
//       <div>name : {name}</div>
//       <div>Title : {title}</div>
//       <div>sum(2,3) = {sum(2, 3)}</div>
//     </div>
//   );
// };
// ---------------------------------------------------
const TypeScript = () => {
  return (
    <div className="h-screen bg-cyan-200 flex flex-col ">
      <h1 className="text-3xl font-extrabold p-2 m-2">TypeScript</h1>
      {/* اینچا نمیتونیم هر پراپی خواستیم پاس بدیم باید قبلش تایپ پراپ رو تعیین کنیم */}
      <Component name="hamed-ab" title="front-end Developer" sum={sum}>
        <h1>test Children</h1>
      </Component>
    </div>
  );
};

export default TypeScript;

// ------------------------------------------------------------------
const [state, setState] = useState<boolean>(2); // Error => type boolean for state

// ------برای بعضی شرایط ک هنوز دیتایی از بکند دریافت نکردیم این مدلی باید تایپ تعریف کنیم ---------
type state = { name: string; age: number };
const [data, setData] = useState<state | null>(null);
// -------------------------------------------------------------------------------

