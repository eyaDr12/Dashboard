import "./widgetSm.css";
import { AiFillEye }  from "react-icons/ai";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Users</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">zayneb Keller</span>
            <span className="widgetSmUserTitle">zaynebKeller@gmail.com</span>
          </div>
          <button className="widgetSmButton">
            <AiFillEye className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">chayma Khedra</span>
            <span className="widgetSmUserTitle">chaymaKhedra@gmail.com</span>
          </div>
          <button className="widgetSmButton">
            <AiFillEye className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">dhouha zrelli</span>
            <span className="widgetSmUserTitle">dhouhazrelli@gmail.com</span>
          </div>
          <button className="widgetSmButton">
            <AiFillEye className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">tayma jameli</span>
            <span className="widgetSmUserTitle">taymajameli@gmail.com</span>
          </div>
          <button className="widgetSmButton">
            <AiFillEye className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">AnnaKeller@gmail.com</span>
          </div>
          <button className="widgetSmButton">
            <AiFillEye className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
