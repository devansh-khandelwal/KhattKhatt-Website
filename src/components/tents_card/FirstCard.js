import Button from "react-bootstrap/Button";
import "./FirstCard.css";

function Card() {
  return (
    <div className="card">
      <div className="title">
        <a href="/">Tree Hut</a>
      </div>
      <div className="points">
        <li>Capacity - 2 Adult 1 Kid (Below 10 years)</li>
        <li>Rate of 1 Hut = 6500</li>
        <li>Twin Size Mattress</li>
        <li>
          Meals Included: (Tea & Snacks, Barbeque, Dinner, Morning Tea &
          Breakfast)
        </li>
        <li>Splash Pool</li>
        <li>Personal Barbeque</li>
        <li>Resting Chairs</li>
        <li>Personal LED Projector</li>
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
