import Typography from "@mui/material/Typography";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Typography
      variant="h3"
      align="center"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <LocalFireDepartmentIcon
        sx={{ color: "red", width: "50px", height: "40px" }}
      />{" "}
      {title}
    </Typography>
  );
};

export default Header;
