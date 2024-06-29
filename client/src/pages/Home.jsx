import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import TabCategoris from "../components/TabCategoris";

const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    return (
        <div>
            <Carousel/>
            <TabCategoris jobs={jobs}/>
        </div>
    );
};

export default Home;