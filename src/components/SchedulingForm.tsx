import { Button, DatePicker, Form, Input } from "antd";
import { CalendarOutlined, DownOutlined, UserOutlined } from '@ant-design/icons'
import { strings } from '../constants/strings'
import dayjs, { Dayjs } from 'dayjs'

import './SchedulingForm.css'


export function SchedulingForm() {
    const disabledData = (current: Dayjs) => current && current < dayjs().startOf('day')
    
    return (
        <Form layout="vertical">
            <Form.Item 
                label={strings.scheduling.dateLabel} 
                name="data"
            >
                <DatePicker
                    placeholder={strings.scheduling.datePlaceholder}
                    className="scheduling-field"
                    size="large"
                    prefix={<CalendarOutlined className="scheduling-icon" />}
                    suffixIcon={<DownOutlined style={{ color: 'var(--color-text-secondary)' }} />}
                    format="DD/MM/YYYY"
                    disabledDate={disabledData}
                />
            </Form.Item>

            <Form.Item 
                label={strings.scheduling.clientLabel}
                name="cliente"
            >
                <Input 
                    placeholder={strings.scheduling.clientPlaceholder} 
                    className="scheduling-field"
                    prefix={<UserOutlined className="scheduling-icon" />}
                    size="large"
                />
            </Form.Item>

            <Button
               className="scheduling-button"
            >
                {strings.scheduling.submitButton}
            </Button>

        </Form>
    )
}