import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <h1 className="header">This is an about Page</h1>
      <p>This app was developer by Prakhar Chaturvedi</p>
      <p>Connect- prakhar.585 on instagram</p>

      <Link to="/">back to homepage</Link>
    </Card>
  );
}

export default AboutPage;
