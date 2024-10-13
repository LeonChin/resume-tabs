import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      console.log(jobs);
    } catch (error) {
      console.log("fetch data error", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      {/*button container */}
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/*job info */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
