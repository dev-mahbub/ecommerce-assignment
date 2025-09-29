//@refresh
import MetaData from "@/hooks/useMetaData";
import HomeMainArea from "@/components/pagesUI/apps/home/HomeMainArea";

const Home = () => {
  return (
    <>
      <MetaData pageTitle="Home">
        <HomeMainArea />
      </MetaData>
    </>
  );
};

export default Home;
