import Button from "react-bootstrap/Button";
import "./FourthCard.css";

function Card() {
  return (
    <div className="card">
      <div className="title">
        <a href="/">Single's Tent</a>
      </div>
      <div className="points">
        <li>Common Restroom</li>
        <li>Capacity – 1 Adult</li>
        <li>Rate of 1 Tent =</li>
        <li>Sleeping Bag</li>
        <li>
          Meals Included: (Tea& Snacks, Barbeque, Dinner , Morning Tea &
          Breakfast)
        </li>
        <li>Hot Water Availability</li>
        <li>Parking</li>
        <li>Bring your own toiletries</li>
        <li>Separate Seating Area</li>
        <li>Individual Restroom</li>
        <li>Hot Water Availability</li>
        <li>Parking</li>
        <li>Bring your own toiletries</li>
      </div>
      <div className="button">
        <Button variant="primary">Book</Button>
      </div>
    </div>
  );
}

export default Card;
