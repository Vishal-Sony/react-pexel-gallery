import { useState } from "react";
import { ImageList, Card, CardActionArea, CardMedia } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";
import Allimg from "./allimg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Img from "./img";

const Body = ({ query }) => {
  return (
    <body>
      <Router>
        <Route path="/react-pexel-gallery/:imgId" component={() => <Img query={query} />} />
        {/* <ImageList rowHeight={300} cols={3}>
          {query.map((query) => (
            <ImageListItem>
              <img src={query.src.large} />
            </ImageListItem>
          ))}
        </ImageList> */}
        {/* <div style={{}}>
          {query.map((query) => (
            <Link>
              <img
                src={query.src.large}
                style={{ width: "32%", padding: "10px" }}
              />
            </Link>
          ))}
        </div> */}
        <Route path="/react-pexel-gallery/" exact component={() => <Allimg query={query} />} />
        {/* <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {query.map((query) => (
            <Link to="/img">
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
        </div> */}
      </Router>
    </body>
  );
};

export default Body;
