import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
faUserFriends, faUsers, faShoppingCart, faVideo, faCompactDisc
} from "@fortawesome/free-solid-svg-icons"

const shortcutData = [
  {
    label: "Friends",
    path: "/comingSoon",
    icon: <FontAwesomeIcon icon={faUserFriends} size="2x" />,
  },
  {
    label: "Groups",
    path: "/comingSoon",
    icon: <FontAwesomeIcon icon={faUsers} size="2x" />,
  },
  {
    label: "Market",
    path: "/comingSoon",
    icon: <FontAwesomeIcon icon={faShoppingCart} size="2x" />,
  },
  {
    label: "Watch",
    path: "/comingSoon",
    icon: <FontAwesomeIcon icon={faVideo} size="2x" />,
  },
  {
    label: "Listen",
    path: "/comingSoon",
    icon: <FontAwesomeIcon icon={faCompactDisc} size="2x" />,
  }
]

export default shortcutData;