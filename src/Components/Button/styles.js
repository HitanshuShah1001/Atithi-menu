import Stylesheet from "reactjs-stylesheet";

export const styles = Stylesheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    display: "flex",
    flex: 0.2,
    flexDirection: "column",
  },
  header: {
    alignSelf: "center",
  },
  button: {
    width: 150,
    borderRadius: 20,
    border: "none",
    color: "white",
    marginRight: 20,
    height: 40,
    fontWeight: "700",
    marginTop: 20,
    backgroundColor: "orange",
  },
});
