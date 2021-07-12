import { ImageList, Card, CardActionArea, CardMedia } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Allimg = ({ query }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {query.map((query) => (
        <Link to={`/${query.id}`}>
          <Card style={{ padding: "10px", backgroundColor: "#2D4059" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="specific img"
                height="400"
                image={query.src.large}
                title="specific img"
              />
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </div>
  );
};
export default Allimg;
