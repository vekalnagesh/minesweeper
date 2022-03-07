//css
export const mapStyles = {
  paper: {
    backgroundColor: "#135058a8",
    padding: "50px 50px",
    width: "80%",
    height: "80%",
  },
  paperContainer: {
    overflowX: "scroll",
  },
  squareContainer: {
    width: "100%",
    display: "inline-flex",
  },
};

export const gameControlStyles = {
  avatarPlayArrows: {
    bgcolor: "#135058a8",
    marginTop: 1,
    marginBottom: 1,
    cursor: "pointer",
  },
  buttonGroups: {
    marginTop: 2,
    marginBottom: 5,
  },
};

export const LevelAndTimerWidgetStyles = {
  containerBox: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 2,
    width: "100%",
    flexWrap: "wrap",
    p: 1,
  },
  levelContainer: {
    bgcolor: "#1350584f",
    marginBottom: 1,
    borderRadius: 2,
    display: "inline-flex",
    p: 1,
  },
  timerContainer: {
    bgcolor: "#1350584f",
    marginBottom: 1,
    borderRadius: 0,
    display: "inline-flex",
    p: 1,
  },
};
