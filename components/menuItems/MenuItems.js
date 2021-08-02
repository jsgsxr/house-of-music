import styles from '../../styles/userMenu.module.css'
import MenuItemCard from './MenuItemCard'

const MenuItems = props => (
  <div className={styles.menuItemDiv}>
    {props.menuData.map(button => (
      <MenuItemCard
        action={button.action}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </div>
)

export default MenuItems;