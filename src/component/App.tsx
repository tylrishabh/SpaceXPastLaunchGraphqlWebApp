import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { getSpacexData } from "../store/action/spacexAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpacexData());
  }, [dispatch]);
  const data: any = useSelector((state) => console.log(state));

  return (
    <div className={data ? "bg-aquamarine" : ""}>
      <div className="text-center w-2/4">
        <h2>Welcome To SpaceX</h2>
        {/* <button onClick={() => getAPIResp()}>Show more details</button> */}
      </div>
      {data ? (
        <div className="w-2/4">
          <h2>SpaceX Mission Names:</h2>
          {data.launchesPast.map((val: any) => (
            <div>
              <li>{val.mission_name}</li>
            </div>
          ))}
          <h2>SpaceX Launch Site:</h2>
          {data.launchesPast.map((val: any) => (
            <div>
              <li>{val.launch_site.site_name_long}</li>
            </div>
          ))}
          <h2>SpaceX Video Ref:</h2>
          {data.launchesPast.map((val: any) => (
            <div>
              <li>
                <a href={val.links.video_link} rel="noreferrer" target="_blank">
                  {val.links.video_link}
                </a>
              </li>
            </div>
          ))}
          <h2>SpaceX Rocket Names:</h2>
          {data.launchesPast.map((val: any) => (
            <div>
              <li>{val.rocket.rocket_name}</li>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
