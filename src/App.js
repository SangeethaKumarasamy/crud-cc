import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { AddContactPage } from "./AddContacts";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";

function App() {
  const contactList = [
    {
      name: "Agnes",
      contactNo: "011-7894561230",
      street: "aaa",
      city: "New York",
      country: "USA",
      zip: "123456",
      mail: "agnes@yahoo.com",
      photo: "https://i2.wp.com/www.getbeautified.com/storage/2019/10/29.-agnes.png?w=259&ssl=1",
      id: 0,
    },
    {
      name: "Stuart",
      contactNo: "188-7854632198",
      street: "bbb",
      city: "Columbia",
      country: "Avon",
      zip: "654879",
      mail: "stuart@gmail.com",
      photo: "https://i0.wp.com/www.getbeautified.com/storage/2019/10/18.-stuart.png?resize=300%2C277&ssl=1t",
      id: 1,
    },
    {
      name: "Chris",
      contactNo: "789123654",
      street: "ccc",
      city: "East Hollyside",
      country: "Borders",
      zip: "44697",
      mail: "chris@gmail.com",
      photo: "https://i0.wp.com/www.getbeautified.com/storage/2019/10/21.-chris.png?resize=224%2C300&ssl=1",
      id: 2,
    },
    {
      name: "donny",
      contactNo: "5616483576",
      street: "ddd",
      city: "Handtown",
      country: "Buckinghamshire",
      zip: "127031",
      mail: "donny26@yahoo.com",
      photo: "https://i0.wp.com/www.getbeautified.com/storage/2019/10/24.-donny.jpg?resize=263%2C300&ssl=1",
      id: 3,
    },
    {
      name: "Dr.Gru",
      contactNo: "4585227561",
      street: "eee",
      city: "North Trinityville",
      country: "Berkshire",
      zip: "660407",
      mail: "drgru8@hotmail.com",
      photo: "https://i2.wp.com/www.getbeautified.com/storage/2019/10/25.-dr.-gru.jpg?resize=251%2C300&ssl=1",
      id: 4,
    },
    {
      name: "Jorge",
      contactNo: "31569559202",
      street: "fff",
      city: "Donburgh",
      country: "Avon",
      zip: "35806",
      mail: "jorgeminion@gmail.com",
      photo: "https://i2.wp.com/www.getbeautified.com/storage/2019/10/23.-jorge.jpg?resize=245%2C300&ssl=1",
      id: 5,
    },
    {
      name: "Margo",
      contactNo: "7003886103",
      street: "ggg",
      city: "Randiville",
      country: "Buckinghamshire",
      zip: "7073276",
      mail: "margopretty@yahoo.com",
      photo: "https://i1.wp.com/www.getbeautified.com/storage/2019/10/27.-margo.jpg?resize=547%2C1024&ssl=1s",
      id: 6,
    },
    {
      name: "edith",
      contactNo: "8571550869",
      street: "hhh",
      city: "Wiegandbury",
      country: "Avon",
      zip: "307445",
      mail: "edithgru@hotmail.com",
      photo: "https://i0.wp.com/www.getbeautified.com/storage/2019/10/28.-edith.jpg?resize=768%2C951&ssl=1",
      id: 7,
    },
    
  ];
  const [contact, setContact] = useState(contactList);

  const setCon = (newContact) => {
    setContact([...contact, newContact]);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home contact={contact} setContact={setContact} />}
        />
        <Route
          path="/add-contact"
          element={<AddContactPage setCon={setCon} />}
        />
        <Route
          path="/edit-contact/:id"
          element={<EditContact contact={contact} setContact={setContact} />}
        />
      </Routes>
    </div>
  );
}

function EditContact({ contact, setContact }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const cont = contact[id];
  const [name, setName] = useState(cont.name);
  const [contactNo, setContactNo] = useState(cont.contactNo);
  const [mail, setMail] = useState(cont.mail);
  const [street, setStreet] = useState(cont.street);
  const [city, setCity] = useState(cont.city);
  const [country, setCountry] = useState(cont.country);
  const [zip, setZip] = useState(cont.zip);
  const [photo, setPhoto] = useState(cont.photo);
  return (
    <div>
      <NavBar />
      <div className="form-div">
        <TextField
          required
          className="standard-basic"
          label="Full Name"
          defaultValue={cont.name}
          variant="filled"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Phone No."
          defaultValue={cont.contactNo}
          variant="filled"
          onChange={(event) => setContactNo(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Mail ID"
          defaultValue={cont.mail}
          variant="filled"
          onChange={(event) => setMail(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Street"
          defaultValue={cont.street}
          variant="filled"
          onChange={(event) => setStreet(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="City"
          defaultValue={cont.city}
          variant="filled"
          onChange={(event) => setCity(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Country"
          defaultValue={cont.country}
          variant="filled"
          onChange={(event) => setCountry(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Zip Code"
          defaultValue={cont.zip}
          variant="filled"
          onChange={(event) => setZip(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Photo URL"
          defaultValue={cont.photo}
          variant="filled"
          onChange={(event) => setPhoto(event.target.value)}
        />
        <Button
          className="buttn"
          variant="contained"
          onClick={() => {
            const updatedCont = {
              name,
              contactNo,
              mail,
              street,
              city,
              country,
              zip,
              photo,
            };
            const contactCopy = [...contact];
            contactCopy[id] = updatedCont;
            setContact(contactCopy);
            navigate("/");
          }}
        >
          <div className="addbtn">Save Contact</div>
        </Button>
      </div>
    </div>
  );
}

export default App;