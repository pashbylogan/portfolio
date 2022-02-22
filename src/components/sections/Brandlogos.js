import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "https://img.icons8.com/color/96/000000/python--v2.png",
  },
  {
    id: 2,
    image: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png",
  },
  {
    id: 3,
    image: "https://img.icons8.com/color/96/000000/html-5--v1.png"
  },
  {
    id: 4,
    image: "https://img.icons8.com/color/96/000000/css3.png",
  },
  {
    id: 5,
    image: "https://img.icons8.com/color/96/000000/angularjs.png",
  },
  {
    id: 6,
    image: "https://img.icons8.com/ultraviolet/80/000000/react--v2.png",
  },
  {
    id: 9,
    image: "https://img.icons8.com/color/96/000000/nodejs.png",
  },
  {
    id: 7,
    image: "https://img.icons8.com/color/96/000000/mysql-logo.png",
  },
  {
    id: 10,
    image: "https://img.icons8.com/color/96/000000/kubernetes.png",
  },
  {
    id: 8,
    image: "https://img.icons8.com/fluency/96/000000/docker.png",
  },
];

function Brandlogos() {
  return (
    <div id="branglogos">
      <div className="container">
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <img src={brandlogo.image} alt="client-name" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
