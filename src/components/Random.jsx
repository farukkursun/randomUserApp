import React, { useEffect, useState } from "react";
import axios from "axios";
const Random = () => {
  const [eleman, setEleman] = useState([]);

  useEffect(() => {
    apiGetir();
  }, []);

  const apiGetir = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setEleman(res.data.results))
      .catch((error) => console.log(error));
  };

  console.log(eleman);
  return (
    <div>
      {eleman.map((kisi) => {
        const { id, name, email, phone, location, picture, registered } = kisi;

        return (
          <div className="container" key={id}>
            <div className="menu">
              <div className="div">
                <div className="resim" >
                  <img src={picture.large} alt="" />
                  <i>📧</i>
                  <i>☎️</i>
                  <i>🗺️</i>
                </div>
                <div className=" mail">
                  <h4 className="baslik">
                    {name.tittle} {name.first} {name.last}
                  </h4>
                  <p>{email}</p>
                  <p>{phone}</p>
                  <p>
                    
                    {location.state}-{location.country}
                  </p>
                </div>
              </div>

              <div className="age">
                <p className="age1">Age:{registered.age}</p>
                <p>Registered Date:{registered.date.slice(0, 10)}</p>
              </div>
            </div>
            <div>
              <button onClick={apiGetir} className="btn">
                Random User
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Random;
