import { Container } from 'components/Container'
import { Search } from 'components/Search'
import { TheHeader } from 'components/TheHeader'
import { UserCard } from 'components/UserCard'

import { defaultUser } from 'mock/index'

function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError={false} onSubmit={() => {}} />
      <UserCard {...defaultUser} />
    </Container>
  )
}

export default App
