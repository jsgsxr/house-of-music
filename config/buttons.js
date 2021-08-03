import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGlobe,
  faComments,
  faBell,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons"

const navButtons = [
    {
      label: "Explore",
      path: "/comingSoon",
      icon: <FontAwesomeIcon icon={faGlobe} size="lg" />,
    },
    {
      label: "Messages",
      path: "/comingSoon",
      icon: <FontAwesomeIcon icon={faComments} size="lg" />,
    },
    {
      label: "Notifications",
      path: "/comingSoon",
      icon: <FontAwesomeIcon icon={faBell} size="lg" />,
    },
    {
      label: "Account",
      path: "/comingSoon",
      icon: <FontAwesomeIcon icon={faUserAlt} size="lg" />,
    }
];

export default navButtons;