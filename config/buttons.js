import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faComments,
  faBell,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
    {
      label: "Explore",
      path: "/explore",
      icon: <FontAwesomeIcon icon={faGlobe} size="lg" />,
    },
    {
      label: "Messages",
      path: "/userMessages",
      icon: <FontAwesomeIcon icon={faComments} size="lg" />,
    },
    {
      label: "Notifications",
      path: "/notifications",
      icon: <FontAwesomeIcon icon={faBell} size="lg" />,
    },
    {
      label: "Account",
      path: "/userAccount",
      icon: <FontAwesomeIcon icon={faUserAlt} size="lg" />,
    }
];

export default navButtons;