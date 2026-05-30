import React from 'react'
import { DatePicker, Form } from "antd";
import { CalendarOutlined, DownOutlined } from '@ant-design/icons'
import { strings } from '../constants/strings'
import dayjs, { Dayjs } from 'dayjs'

const datePickerStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'transparent',
    border: '1px solid var(--color-border)',
    padding: '13px',
    color: 'var(--color-text-secondary)',
    gap: '8px',
}

export function SchedulingForm() {
    const disabledData = (current: Dayjs) => current && current < dayjs().startOf('day')
    
    return (
        <Form layout="vertical">
            <Form.Item label={strings.scheduling.dateLabel} name="data">
                <DatePicker
                    placeholder={strings.scheduling.datePlaceholder}
                    style={datePickerStyle}
                    size="large"
                    disabledDate={disabledData}
                    format="DD/MM/YYYY"
                    prefix={<CalendarOutlined style={{ color: 'var(--color-primary)', fontSize: '20px' }} />}
                    suffixIcon={<DownOutlined style={{ color: 'var(--color-text-secondary)' }} />}
                />
            </Form.Item>
        </Form>
    )
}