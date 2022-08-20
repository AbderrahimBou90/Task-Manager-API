const {people} = require('../data')


const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res
    .status(201)
    .json({ success: true, person: [...people, { name, id: 45 }] });
};


const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, person: newPerson });
};

const deletePerson = (req, res) => {
  const { id } = req.params;

  console.log(id);
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, data: `no person with id ${id}` });
  }
  const newArrPeoples = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ success: true, data: newArrPeoples });
  // res.status(200).send('data deleted')
};


module.exports = {
 getPeople,
 createPerson,
 createPersonPostman,
 updatePerson,
 deletePerson
}