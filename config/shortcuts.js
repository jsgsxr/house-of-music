import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
faUserFriends, faUsers, faShoppingCart, faVideo, faCompactDisc
} from "@fortawesome/free-solid-svg-icons"

const shortcuts = [
  {
    label: "Friends",
    path: "/friends",
    icon: <FontAwesomeIcon icon={faUserFriends} size="2x" />,
  },
  {
    label: "Groups",
    path: "/groups",
    icon: <FontAwesomeIcon icon={faUsers} size="2x" />,
  },
  {
    label: "Market",
    path: "/marketplace",
    icon: <FontAwesomeIcon icon={faShoppingCart} size="2x" />,
  },
  {
    label: "Watch",
    path: "/watch",
    icon: <FontAwesomeIcon icon={faVideo} size="2x" />,
  },
  {
    label: "Listen",
    path: "/listen",
    icon: <FontAwesomeIcon icon={faCompactDisc} size="2x" />,
  }
]

export default shortcuts;