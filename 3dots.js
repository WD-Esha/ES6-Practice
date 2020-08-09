const ages = [12,22 , 24 , 26 ,13, 20 ];
const ages2 = [15, 16 ,17];
const ages3 = [34, 35 ,33];
const allAges = ages.concat(ages2).concat(ages3);
const allages2 = [...ages,...ages3, ...ages2 ];

// console.log(allages2);


const buissnesssman = 650 ;
const minister = 450 ; 
const sochib = 250 ; 
const takapoisa =   [650 , 450 , 250 , 850 ];
const maximum = Math.max(...takapoisa);
console.log(maximum);