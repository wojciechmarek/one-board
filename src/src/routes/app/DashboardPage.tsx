import { Button } from "@material-tailwind/react";
import { account } from "../../api/app-write";
import { useNavigate } from "react-router";

type Props = {};

const DashboardPage = (props: Props) => {
  const navigate = useNavigate();

  const handleOnLogOutClick = async () => {
    await account.deleteSession("current");
    navigate("/login");
  };

  return (
    <Button placeholder={undefined} onClick={handleOnLogOutClick}>
      Logout
    </Button>
  );
};

export default DashboardPage;
