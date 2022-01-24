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
      name: "Ericka",
      contactNo: "(335) 846-8796",
      street: "Barton Ports",
      city: "North Jaeden",
      country: "Berkshire",
      zip: "67023",
      mail: "Lenny.White88@yahoo.com",
      photo: "http://placeimg.com/640/480/transport",
      id: 0,
    },
    {
      name: "Lewis",
      contactNo: "1-264-371-8422",
      street: "Kuphal Knolls",
      city: "Columbia",
      country: "Avon",
      zip: "97483",
      mail: "Hazle_Runolfsson@hotmail.com",
      photo: "http://placeimg.com/640/480/abstract",
      id: 1,
    },
    {
      name: "Berniece",
      contactNo: "693.604.8772",
      street: "Fannie Point",
      city: "East Hollyside",
      country: "Borders",
      zip: "44695-3587",
      mail: "Johan.Greenfelder68@hotmail.com",
      photo: "http://placeimg.com/640/480/fashion",
      id: 2,
    },
    {
      name: "Rafael",
      contactNo: "(912) 561-5464 x83576",
      street: "Olson Forge",
      city: "Handtown",
      country: "Buckinghamshire",
      zip: "12577-8031",
      mail: "Vada.Gaylord26@yahoo.com",
      photo: "http://placeimg.com/640/480/people",
      id: 3,
    },
    {
      name: "Hudson",
      contactNo: "858.924.7561",
      street: "Brycen Camp",
      city: "North Trinityville",
      country: "Berkshire",
      zip: "66060-0407",
      mail: "Kennith28@hotmail.com",
      photo: "http://placeimg.com/640/480/food",
      id: 4,
    },
    {
      name: "Austyn",
      contactNo: "315.570.7201 x59202",
      street: "Gusikowski Hill",
      city: "Donburgh",
      country: "Avon",
      zip: "35806",
      mail: "Clifford_Grady@gmail.com",
      photo: "http://placeimg.com/640/480/business",
      id: 5,
    },
    {
      name: "Isaias",
      contactNo: "704.441.0352 x6103",
      street: "Daisha Creek",
      city: "Randiville",
      country: "Buckinghamshire",
      zip: "50070-3276",
      mail: "Dee82@yahoo.com",
      photo: "http://placeimg.com/640/480/technics",
      id: 6,
    },
    {
      name: "King",
      contactNo: "795.857.1558 x90869",
      street: "Dickens Roads",
      city: "Wiegandbury",
      country: "Avon",
      zip: "30799-3445",
      mail: "Rita35@hotmail.com",
      photo: "http://placeimg.com/640/480/food",
      id: 7,
    },
    {
      name: "Leo",
      contactNo: "920-280-6571 x477",
      street: "Skiles Fields",
      city: "Port Rosalynberg",
      country: "Borders",
      zip: "20946-1300",
      mail: "Torrey94@gmail.com",
      photo: "http://placeimg.com/640/480/transport",
      id: 8,
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