const employee = [
  {
    id: 1,
    firstName: "NISH",
    lastName: "JAM",
    slug:"001",
    stateId: 1,
    email: "njam@blueribbon.com"
  },
  {
    id: 2,
    firstName: "Miv",
    lastName: "Sam",
    slug:"002",
    stateId: 1,
    email: "msam@blueribbon.com"
  },
  {
    id: 3,
    firstName: "Tim",
    lastName: "Cook",
    slug:"003",
    stateId: 1,
    email: "tcook@blueribbon.com"
  },
  {
    id: 4,
    firstName: "Tom",
    lastName: "kit",
    slug:"004",
    stateId: 3,
    email: "tkit@bluribbon.com"
  },
  {
    id: 5,
    firstName: "Jerry",
    lastName: "Mouse",
    slug:"005",
    stateId: 3,
    email: "jmouse@blueribbon.com"
  },
  {
    id: 6,
    firstName: "Petter",
    lastName: "Jam",
    slug:"006",
    stateId: 3,
    email: "pjam@blueribbon.com"
  },
  {
    id: 7,
    firstName: "Matt",
    lastName: "Cool",
    slug:"007",
    stateId: 2,
    email: "mcool@blueribbon.com"
  },
  {
    id: 8,
    firstName: "Sam",
    lastName: "Watt",
    slug:"008",
    stateId: 2,
    email: "s.watt@blueribbon.comm"
  },
  {
    id: 9,
    firstName: "Tom",
    lastName: "Jones",
    slug:"009",
    stateId: 2,
    email: "tjones@blueribbon.com"
  }
];

const states = [
  { id: 1, name: "GA" },
  { id: 2, name: "TX" },
  { id: 3, name: "NY" }
];

const newEmployee = {
  id: 0,
  firstName: "",
  lastName:"",
  stateId: 0,
  email: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newEmployee,
  employee,
  states
};
