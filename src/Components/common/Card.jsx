import { Link } from "react-router-dom";

const Card = ({ user }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div
      className="card"
      style={{
        border: "2px solid black",
        width: "300px",
        height: "400px",
      }}
    >
      <img
        src={user.image}
        style={{ widht: "100%", height: 200, objectFit: "coverr" }}
      />
      <h2>{user.litle}</h2>

      {/* En cada card deberan mostrar en name - username y el id ***  name, username, id,*** */}

      <Link to={"/detalle/${user.id}"}>Ver detalle</Link>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">        
      </button>
    </div>
  );
};

export default Card;
