// ! typescript
// - زبان تایپ اسکریپت بر اساس جاوا اسکریپت ساخته شده
// - برنامه ساخته شده با تایپ اسکریپت به جاوا اسکریپت کامپایل میشود
// --------------------------------------------------------------------------
// تایپ اسکریپت به دستورات جاوااسکریپت امکان * را افزوده
// {*} == Type Safety || Type checking

// ---------Java Script--------------------

function addProduct(title, price) {
  return title + price;
}
addProduct("Prudoct ", "99"); // Product 99

// ---------Type Script------------------

function addProductTs(title: string, price: number) {
  return title + price;
}
addProductTs("Prudoct ", "99"); // Error

// -------------در نتیجه توسعه نرم افزار با خطای کمتر و کد بهینه تر--------------------------------













