import Chart from "../../chart/Chart";
import Featuredinfo from "../../featuredinfo/Featuredinfo";
import "./home.css";
import { userData } from "../../../dummyData";
import WidgetLg from "../../widgets/widgetLg/WidgetLg";
import Widgetsm from "../../widgets/Widgetsm";

export default function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart
        data={userData}
        title="Users Statistic"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <Widgetsm />
        <WidgetLg />
      </div>
    </div>
  );
}
