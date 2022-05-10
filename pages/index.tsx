import type { NextPage } from 'next'
import SampleButton from '../components/SampleButton'
import { Button } from '../components/styled-components/ButtonStyles'
import { CenterFlexContainer } from '../components/styled-components/Flex'
import { LabelledField } from '../components/styled-components/TextField'

const Home: NextPage = () => {
  return (
    <CenterFlexContainer minHeight="100vh">
      <div>
        <LabelledField label={'TextField'} />
      </div>
      <div>Hello World</div>
      <div>
        <SampleButton text={'sample button'} onClick={() => {}} />
        <Button data-testid="home-button">Button</Button>
      </div>
    </CenterFlexContainer>
  )
}

export default Home
