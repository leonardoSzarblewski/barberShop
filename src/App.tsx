import { Flex, Typography } from 'antd'
import { strings } from './constants/strings'
import 'antd/dist/reset.css'
import { SchedulingForm } from './components/SchedulingForm'


function App() {
  
  return (
    <div>
      <Flex className='containerRight'>
        <Flex vertical justify="center" style={{ height: '20%', padding: '40px'}}>
         <Typography.Title 
            level={3}
            style={{ color: '#F5F4F5'}}
          >
            {strings.scheduling.title}
          </Typography.Title>

          <Typography.Paragraph
            style={{ color: '#98959D', maxWidth: 360 }}
          >
            {strings.scheduling.description}
          </Typography.Paragraph>
          
          <SchedulingForm/>
        </Flex>
      </Flex>
    </div>
  )
}

export default App
