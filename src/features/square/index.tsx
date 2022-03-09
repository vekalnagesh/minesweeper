import React, { MouseEvent } from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import Box from "@mui/material/Box";
import TourIcon from "@mui/icons-material/Tour";

export type SquareType = {
  type: SquareTypes;
  data: string;
  icon: string;
};

export enum SquareTypes {
  DATA = "DATA",
  UNCHECKED = "UNCHECKED",
  MINED = "MINED",
  FLAGGED = "FLAGGED",
}

interface SquaresProps {
  square: SquareType;
  onPress?: (e: MouseEvent) => void;
}

const squareStyles = {
  container: {
    display: "inline-flex",
    width: "25px",
    height: "25px",
    margin: "1px 1px",
    flexDirection: "column",
    cursor: "pointer",
  },
  dataContent: {
    width: "25px",
    height: "25px",
    margin: "1px 1px",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "red",
    width: "25px",
    height: "25px",
  },
  tourIcon: {
    color: "red",
    width: "15px",
    height: "15px",
  },
};
const SquareArea = ({ square, onPress, ...rest }: SquaresProps) => {
  return (
    <Box
      {...rest}
      onClick={onPress}
      onContextMenu={onPress}
      sx={{
        ...squareStyles.container,
        backgroundColor:
          square.type === SquareTypes.UNCHECKED ? "#F1F2B5" : "#f1f2b540",
      }}
    >
      {square.type === SquareTypes.MINED ? (
        <LocalFireDepartmentIcon sx={squareStyles.icon} />
      ) : (
        ""
      )}
      {square.type === SquareTypes.FLAGGED ? (
        <TourIcon sx={squareStyles.tourIcon} />
      ) : (
        ""
      )}
      <Box sx={squareStyles.dataContent}>
        &nbsp;
        {square.type === SquareTypes.DATA
          ? Number(square.data) === 0
            ? ""
            : square.data
          : ""}
      </Box>
    </Box>
  );
};

export default SquareArea;
