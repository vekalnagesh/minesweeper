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
        marginTop: 5,
        marginBottom: 3,
        color: "#fff",
      }}
    >
      <LocalFireDepartmentIcon
        sx={{ color: "red", width: "50px", height: "50px" }}
      />{" "}
      {title}
    </Typography>
  );
};

export default Header;
