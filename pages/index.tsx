import type { NextPage } from 'next'
import SampleButton from '../components/SampleButton'
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
      </div>
    </CenterFlexContainer>
  )
}

export default Home
