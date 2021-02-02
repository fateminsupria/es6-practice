const ages =[10,11,12,13,14];
const ages2 =[18,19,20,21];

// const allAges =ages.concat(ages2).concat[5];

const allAges =[...ages, ...ages2, 4];
console.log(allAges)