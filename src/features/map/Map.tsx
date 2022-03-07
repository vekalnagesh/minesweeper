import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Square, { SquareTypes } from "../square";

import LevelAndTimerWidget from "./LevelAndTimerWidget";
import { useAppSelector } from "../../app/hooks";
import { mapStyles } from "./map.styles";

interface MapProps {
  openSquare: (x: number, y: number) => void;
}

const Map = ({ openSquare }: MapProps) => {
  const mapList = useAppSelector((state) => state.gameState.map);

  return (
    <Paper sx={mapStyles.paper} elevation={3}>
      <LevelAndTimerWidget />
      <Box sx={mapStyles.paperContainer}>
        {mapList &&
          mapList.map((squareList: string, row: number) => {
            const squareData = Object.assign([], squareList);
            return (
              <div key={`square-${row}`} style={mapStyles.squareContainer}>
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
                    return (
                      <Square
                        key={`square-${row}-${column}`}
                        square={{
                          type: SquareTypes.UNCHECKED,
                          data: "",
                          icon: "",
                        }}
                        onPress={() => openSquare(column, row)}
                      />
                    );
                  }
                })}
              </div>
            );
          })}
      </Box>
    </Paper>
  );
};

export default Map;
