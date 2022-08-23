import "./Featuredinfo.css";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

export default function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitled">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,000</span>
          <span className="featuredMoneyRate">
            -11.4 <MdArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitled">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,200</span>
          <span className="featuredMoneyRate">
            -2.4 <MdArrowDownward />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitled">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <MdArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
