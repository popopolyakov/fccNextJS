// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { setupMaster } = require('cluster');

/* export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
} */

function sum(...args) {
  return args.reduce((acc, item) => acc+item, 0)
}

function curring(_f) {
  return (x) => (y) => (z) => _f(x,y,z)
}


console.log(sum(1,2,3));
console.log(curring(sum)(1)(2)(3));