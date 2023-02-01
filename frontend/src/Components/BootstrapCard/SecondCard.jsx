import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "../../assets/images/6.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../Hooks/userContext";
function SecondCard() {
  const navigate = useNavigate();
  const { setPackageValue } = useContext(userContext);
  function handlePurchase(e) {
    e.preventDefault();
    setPackageValue("3");
    navigate("/payment");
  }
  return (
    <Card>
      <Card.Img
        style={{ width: "200px", borderRadius: "5%" }}
        variant="top"
        src={image}
      />
      <Card.Body>
        <Card.Title
          style={{ fontSize: "25px", fontFamily: "monospace", marginTop: "5%" }}
        >
          Couple Package
        </Card.Title>
        <Card.Text
          style={{ fontSize: "20px", fontFamily: "monospace", marginTop: "5%" }}
        >
          Max. 3 users
        </Card.Text>
        <Button onClick={handlePurchase}
          variant="primary"
          style={{
            fontSize: "20px",
            fontFamily: "monospace",
            margin: "10% auto auto auto",
            height: "30px",
            width: "150px",
          }}
        >
          Purchase
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SecondCard;
