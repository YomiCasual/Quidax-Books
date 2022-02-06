import { AllBooks, FeaturedBooks } from "./components";
import { DocumentHeader } from "../../reusables";

const Home = ({ title = "Home" }: { title?: string }) => {
  return (
    <>
      <DocumentHeader title={title} />
      <FeaturedBooks />
      <AllBooks />
    </>
  );
};

export default Home;
