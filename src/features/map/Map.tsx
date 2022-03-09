import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Square, { SquareTypes } from "../square";
import Typography from "@mui/material/Typography";
import LevelAndTimerWidget from "./LevelAndTimerWidget";
import { useAppSelector } from "../../app/hooks";
import { mapStyles } from "./map.styles";
import { MouseEvent } from "react";

export type OpenSquareXY = {
  x: number;
  y: number;
  message: string;
};

interface MapProps {
  openSquare: (e: MouseEvent, x: number, y: number) => void;
}

const Map = ({ openSquare }: MapProps) => {
  const mapList = useAppSelector((state) => state.gameState.map);
  const markedFlags = useAppSelector((state) => state.flagState.markedFlags);

  return (
    <Paper sx={mapStyles.paper} elevation={3}>
      <LevelAndTimerWidget />
      <Box sx={mapStyles.paperContainer}>
        {mapList &&
          mapList.map((squareList: string, row: number) => {
            const squareData = Object.assign([], squareList);
            return (
              <Box key={`square-${row}`} style={mapStyles.squareContainer}>
                {squareData.map((data, column: number) => {
                  if (data === "*") {
                    return (
                      <Square
                        key={`square-${row}-${column}`}
                        square={{
                          type: SquareTypes.MINED,
                          data: "",
                          icon: "M",
                        }}
                      />
                    );
                  } else if (data !== "□") {
                    return (
                      <Square
                        key={`square-${row}-${column}`}
                        square={{ type: SquareTypes.DATA, data, icon: "" }}
                      />
                    );
                  } else {
                    const showFlag = markedFlags.find(
                      (flag: OpenSquareXY) =>
                        flag.x === column && flag.y === row
                    );
                    if (showFlag) {
                      return (
                        <Square
                          key={`square-${row}-${column}`}
                          square={{
                            type: SquareTypes.FLAGGED,
                            data: "",
                            icon: "",
                          }}
                        />
                      );
                    } else {
                      return (
                        <Square
                          key={`square-${row}-${column}`}
                          square={{
                            type: SquareTypes.UNCHECKED,
                            data: "",
                            icon: "",
                          }}
                          onPress={(e: MouseEvent) =>
                            openSquare(e, column, row)
                          }
                        />
                      );
                    }
                  }
                })}
              </Box>
            );
          })}
        <Typography
          id="modal-modal-title"
          color="#fff"
          variant="body2"
          component="h2"
          sx={{ marginTop: "15px", color: "gray" }}
        >
          * Right click to add flags on cell
        </Typography>
      </Box>
    </Paper>
  );
};

export default Map;
