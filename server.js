const express = require("express");
const app = express();
const faker = require('faker');

class User{
  constructor(){
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company{
  constructor(){
    this.name = faker.company.companyName();
    this.street = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
  }
}

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get('/api/users/new', (req,res)=>{
  res.json(new User())
})

app.get('/api/companies/new', (req,res)=>{
  res.json(new Company())
})

app.get('/api/user/company', (req,res)=>{
  res.json({company: new Company(), user: new User()});
  // res.json(new User())
})



const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);