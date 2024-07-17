import { UserStat } from 'components/UserStat'
import { LocalGithubUser } from 'types'
import styles from './UserCard.module.scss'
import { UserTitle } from 'components/UserTitle'

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img className={styles.avatar} src={props.avatar} alt={props.login} />
      <UserTitle {...props} />
      <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>
      <UserStat {...props} />
    </div>
  )
}
