import React, { ComponentProps, useEffect, useRef, useState } from "react";

// --------------------------------------------------------------
//? تایپ‌های ابتدایی (Primitive Types):

// number: برای اعداد (صحیح و اعشاری)
// string: برای رشته‌ها
// boolean: برای مقادیر درست یا نادرست
// null: برای مقادیر null
// undefined: برای مقادیر تعریف‌نشده
// symbol: برای مقادیر یکتا (معرفی شده در ES6)
// --------------------------------------------------------------
//? تایپ های ترکیبی (Composite Types):

//? آرایه‌ها (Arrays)
let numbers: number[] = [1, 2, 3];

//? شیء‌ها (Objects):
let person: { name: string; age: number } = { name: "John", age: 30 };

//? تاپل‌ها (Tuples):
let tuple: [string, number] = ["hello", 10];

//? تایپ‌های خاص (Special Types):

//? any: تایپی که می‌تواند هر نوع داده‌ای را بپذیرد. استفاده از این تایپ توصیه نمی‌شود مگر در موارد خاص.
let anything: any = 5;
anything = "Hello";

//? unknown: مشابه any، اما نوعی امن‌تر است و نیاز به بررسی تایپ قبل از استفاده دارد.
let maybe: unknown = 10;
if (typeof maybe === "number") {
  let number = maybe; // now TypeScript knows maybe is a number
}

//? void: برای توابعی که مقدار بازگشتی ندارند.
function log(message: string): void {
  console.log(message);
}
// never: برای توابعی که هرگز مقدار بازگشتی ندارند (مثل توابعی که همیشه خطا می‌اندازند یا حلقه‌های بی‌نهایت).
function error(message: string): never {
  throw new Error(message);
}

//? تایپ‌های اتحاد (Union Types):

// اجازه می‌دهند متغیرها بیش از یک نوع داشته باشند.
let value: string | number;
value = "Hello";
value = 10;

//? تایپ‌های تقاطعی (Intersection Types):
interface A {
  a: string;
}
interface B {
  b: number;
}
let c: A & B = { a: "Hello", b: 42 };

//? تایپ‌های جنسیتی (Generics):

// برای ایجاد تایپ‌های عمومی که می‌توانند با انواع مختلف داده کار کنند.
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString");

//? Type Assertions
// Sometimes you will have information about the type of a value that TypeScript can’t know about.
// In this situation, you can use a type assertion to tell TypeScript that you know the value is of a specific type.
// For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of Element, but you might know that your page will always have an HTMLDivElement with a given ID.
// In this case, you can use a type assertion to tell TypeScript that you know the value is a HTMLDivElement:
const myDiv = document.getElementById("main_div") as HTMLDivElement;


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
// Type Aliases نام مستعار
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
// - با این تفاوت که تایپ ها عمومی تر هستین در صورتی ک تمرکز "اینترفیس" روی "ابجکت" ها می باشد
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
 Note: We often use T for generic types. However, it's not limited to any name.
  Let's redo the above function as a generic typed function
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

// extends in Type:
type TUser1 = {
  name: string;
  age: number;
};
type TUser2 = TUser1 & {
  address: {
    city: string;
    country: string;
  };
};

let userMan: TUser2 = {
  name: "hamed",
  age: 29,
  address: {
    city: "mashhad",
    country: "iran",
  },
};

// extends in Interface :
interface IUser {
  name: string;
  age: number;
}
interface IUser2 extends IUser {
  address: {
    city: string;
    country: string;
  };
}

let userJadid: IUser2 = {
  name: "hamed",
  age: 30,
  address: {
    city: "tehran",
    country: "iran",
  },
};
// ------------------------------------------------------
// type Button = {
//     size: "small" | "medium" | "large";
//     color: "primary" | "secondary" | "danger";
//     disabled?: boolean;
//     onClick?: () => void; // ==> optional (Not required)
//   }

//? age nakhaim yeki yeki type props haro taeen konim mitunim az khode React komak begirim chejuri ? injuri :)

type Button = ComponentProps<"button"> & { title: string };
// injuri dg harchi props khasti pas bede khodesh typesh ro mifahme
// onayy ham k tu type button nist va ma mikhaym ezafe konim be component ro ye "&" mizarim ezafe mikonim :)
const Button = ({ type, title }: Button) => {
  return (
    <div>
      <div>{title}</div>
      <button type={type}>Click Me</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Button title={"title mored nazar"} />
    </div>
  );
};
// ---------------------------------------------------------------------

const handlerClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e);
};
const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

// حالا در مثال زیر میخوایم ی ایونتی رو پاس بدیم ولی از ما تایپ میخواد چه تایپی بدیم ؟
const App2 = () => {
  return (
    <div>
      {/* inja miaym dakhel onclick (e)=>{} in ro mizarim mouse ro k hover konim ru "e" behemun typesh ro mide copy mikonim :)  */}
      <button onClick={handlerClick}></button>
      <input onChange={handlerChange}></input>
    </div>
  );
};
// ----------------------------------------------------------------------------
// Baraye Tarif Type Ref :

const App3 = () => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <button ref={ref}>click Me</button>
      <input type="text" />
    </div>
  );
};
// -------------------------------------------------------------------------
// Hala bebinim Omit Chie ? res => zamani k mikhaym yeki az type haro kam konim az Omit Estefade mikonim !
//kheily Kam estefade mishe vali tu mosahebe ha miporsan ehtemalan !

type moein = {
  name: string;
  age: number;
};

type moein2 = Omit<moein, "age">;
//! ru moein2 Hover kon ! didi ? alan copy gereft az type moein va "age" ro hazf kard !

// type moein2 = Omit<moein, "age" | "name">;
// ! va hata mituni begi "name" ro ham nemikham !
// Nagu vay bargam vay pashmam begu che jaleb :D

// ------------------------------------------------------------------------------------------------
const App4 = () => {
  useEffect(() => {
    // const storage = JSON.parse(localStorage.getItem("info"));
    //! chon emkan dare "null" bashe ziresh khat mikeshe error mide baraye rafe in mitunim "as" be onvan => "string" bezarim ke begim in string gir nade !

    const storage = JSON.parse(localStorage.getItem("info") as string);
    console.log(storage);
  }, []);

  return <div>TEST</div>;
};
// ------------------------------------------------------------------------------------
