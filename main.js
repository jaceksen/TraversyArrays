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

  //forEach
  //filter
  //map
  //sort
  //reduce

  //forEach ************************************************************************************
  //porównanie z for

  for(let i =0; i < companies.length; i++){
      console.log(companies[i]);
  }

  //forEach bierze callback function (synchroniczna)
  //bierze trzy parametry: nazwę iteratora, index, i całą tablicę
  //companies.forEach(function(company, index, companies) {});

  companies.forEach(function(company){
    console.log(company);
    console.log(company.name);
  });

  //filetr ******************************************************************************************
  //chcemy pobrać z ages te które są >= 21
  //przykład za pomocą for

  let canDrink = [];
  for(let i = 0; i<ages.length; i++){
      if(ages[i] >= 21){
          canDrink.push(ages[i]);
      }
  }
  console.log(canDrink);

//tu z użyciem callback function 
//bierze trzy parametry: nazwę iteratora, index, i całą tablicę

const canDrink2 = ages.filter(function(age){
    if(age >= 21) {
        return true;
    }
});
console.log(canDrink2);

//tu z użyciem ES6 arrow function

const canDrink3 = ages.filter(age => age >= 21);
console.log(canDrink3);

//wyszukanie firm z kategorią RETAIL

//wersja ES5
const retailCompanies = companies.filter(function(company) {
    if(company.category === 'Retail') {
        return true;
    }
});
console.log(retailCompanies);

//wersja ES6
const retailCompanies2 = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies2);

//wyszukanie firm które starują w 198. latach
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);

//wyszukanie firm które trwały >= 10lat
const tenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(tenYears);

const tenYears2 = companies.filter(company => (company.end - company.start >= 10));
tenYears2.forEach(function(company){
    console.log(company);
    console.log(company.end - company.start);
  });
  //wersja ES6 forEach
  tenYears2.forEach(company => {console.log(company.end - company.start)});
  tenYears2.forEach((company,indeks,tablica) => {
      console.log(indeks);
      console.log(company.end - company.start);
      console.log(tablica[indeks].name);
    });

//map **********************************************************************************************************
//tworzymy nową array z istniejącej array

//tworzymy tablicę company names
const companyNames = companies.map(function(company){
    return company.name;
});
console.log(companyNames);

const companyNames2 = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(companyNames2);

const companyNames3 = companies.map(company => 
    `${company.name} [${company.start} - ${company.end}]`
);
console.log(companyNames2);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

const agesTimesTwo = ages.map(age => age*2 );
console.log(agesTimesTwo);

const agesSquareTimesTwo = ages.map(age => Math.sqrt(age)).map(age => age*2);
console.log(agesSquareTimesTwo);

//sort *****************************************************************************************************

const sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedCompanies);

//jezeli c1.start>c2.start zwroc 1 lub (:) zwroc -1
const sortedCompanies2 = companies.sort((c1,c2) => (c1.start > c2.start ? 1 : -1));
console.log(sortedCompanies2);

//zle sortuje - tylko ze wzgledu na pierwszy znak
const sortAges = ages.sort();
console.log(sortAges);

const sortAges2 = ages.sort((a,b) => a - b);
console.log(sortAges2);

//reduce ********************************************************************************************
// np dodanie wszyskich ages do siebie

//0 po przecinku oznacza że total na starcie ma wartość 0
const ageSum = ages.reduce(function(total, age) {
    return total + age;
}, 0);
console.log(ageSum);

const ageSum2 = ages.reduce((total,age) => total + age, 0);
console.log(ageSum2);

//get total years for all companies
const totalYears = companies.reduce(function(total, company) {
    return total + (company.end - company.start);
},0);
console.log(totalYears);

const totalYears2 = companies.reduce((total, company) => (total + (company.end - company.start)),0);
console.log(totalYears2);

//combine methods

const combined = ages.map(age => age * 2).filter(age => age >= 40).sort((a,b) => a -b);
console.log(combined);