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
    width: "100%",
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
  containerBox: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 2,
    width: "80%",
    flexWrap: "wrap",
    p: 1,
  },
  levelContainer: {
    display: "inline-flex",
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 3,
    paddingBottom: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "calc(80vw/4)",
    minWidth: "200px",
  },
  buttonContainerBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  buttonGroupContainer: {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  },
};

export const LevelAndTimerWidgetStyles = {
  containerBox: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 2,
    width: "100%",
    flexWrap: "wrap",
    p: 1,
  },
  levelContainer: {
    bgcolor: "#1350584f",
    marginBottom: 1,
    //borderRadius: 2,
    display: "inline-flex",
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 1,
    paddingBottom: 1,
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "calc(80vw/4)",
    minWidth: "200px",
  },
  tourIcon: {
    color: "#83c186",
    width: "25px",
    height: "25px",
    marginRight: "8px",
  },
};
