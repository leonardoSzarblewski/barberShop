import React from 'react'
import { Button, DatePicker, Form, Input } from "antd";
import { CalendarOutlined, DownOutlined, UserOutlined } from '@ant-design/icons'
import { strings } from '../constants/strings'
import dayjs, { Dayjs } from 'dayjs'

const fieldStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'transparent',
    border: '1px solid var(--color-border)',
    padding: '13px',
    color: 'var(--color-text-secondary)',
}

const buttonStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'var(--color-primary)',
    border: 'none',
    padding: '30px',
    color: 'black',
    fontWeight: '600'
}

const iconsStyle: React.CSSProperties = {
    color: 'var(--color-primary)', 
    fontSize: '20px'
}


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
                    style={fieldStyle}
                    size="large"
                    prefix={<CalendarOutlined style={ iconsStyle } />}
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
                    style={fieldStyle}
                    prefix={<UserOutlined style={ iconsStyle } />}
                    size="large"
                />
            </Form.Item>

            <Button
               style={buttonStyle}
            >
                {strings.scheduling.submitButton}
            </Button>

        </Form>
    )
}