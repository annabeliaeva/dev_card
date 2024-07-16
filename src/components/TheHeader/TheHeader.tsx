import styles from './TheHeader.module.scss'

import { ThemeSwitcher } from 'components/ThemeSwitcher'

interface TheHeaderProps {}

export const TheHeader = ({}: TheHeaderProps) => (
  <div className={styles.header}>
    <div className={styles.logo}>Find Developer</div>
    <ThemeSwitcher />
  </div>
)
