const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for
//forEach
//filter


// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//forEach
// companies.forEach(function(company) {
//   console.log(company);
// })

//filter
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

//Filter all Retail companies
// const retailCompanies = companies.filter(function(company) {
//   return company.category === "Retail";
// });
// console.log(retailCompanies);

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// Get all companies started in 80s
// const eighiesCompanies = companies.filter(company => company.start > 1979 && company.start < 1990);
// console.log(eighiesCompanies);

//Get companies that lasted 10 years or more
// const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
// console.log(lastedTenYears);

//Get all company names
// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// (IMP) Get an array where each element is company name with start and end year.
// Use template string.
// const nameStartEnd = companies.map(function(company) {
//   return `${company.name} [${company.start} -  ${company.end}]`;
// });
// console.log(nameStartEnd);

// const nameStartEnd = companies
//         .map((company) => `${company.name} [${company.start} -  ${company.end}]`);
// console.log(nameStartEnd);

// Get square root of all ages in an array
// const agesSquared = ages.map(age => Math.sqrt(age));
// console.log(agesSquared);

// Get 2 times the squareroot of all ages
// const ageMap = ages
//           .map(age => Math.sqrt(age))
//           .map(age => age*2);
// console.log(ageMap);

// Sort companies by start year
// const sortedCompanies = companies.sort(function(company1, company2) {
//   if(company1.start > company2.start){
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// const sortedCompanies = companies.sort((a, b) => a.start > b.start ? 1 : -1);
// console.log(sortedCompanies);

// Sort ages in ascending order
// const sortedAges = ages.sort((a, b) => a - b);
// console.log(sortedAges);

// Sort ages in descending order
// const sortedAgesDescending = ages.sort((a, b) => b - a);
// console.log(sortedAgesDescending);

// Reduce and calculate the sum of all ages
// const sumAgesReduce = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);
// console.log(sumAgesReduce);

// const sumAgesReduce = ages.reduce((total, age) => total + age, 0);
// console.log(sumAgesReduce);

// Get total years for all the companies
// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start)
// }, 0);
// console.log(totalYears);

// Get total years for all the companies using arrow function
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);

// Combine methods
const combined = ages
                  .map(age => age * 2)
                  .filter(age => age >= 40)
                  .sort((a, b) => a - b)
                  .reduce((a, b) => a + b, 0);
console.log(ages);
console.log(combined); //798


