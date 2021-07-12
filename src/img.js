import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ImageList } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CancelIcon from "@material-ui/icons/Cancel";

import { Picture } from "react-responsive-picture";
const Img = ({}) => {
  const { imgId } = useParams();

  return (
    <div className="one">
      <img
        className="specific"
        src={`https://images.pexels.com/photos/${imgId}/pexels-photo-${imgId}.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`}
        alt="specific img"
      />

      <Link className="specificb" to="/">
        <img src="https://img.icons8.com/material/48/ffffff/circled-chevron-left--v1.png" />
      </Link>
    </div>
  );
};

export default Img;
