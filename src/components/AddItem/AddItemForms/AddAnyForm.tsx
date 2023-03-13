import React from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
const { Option } = Select;
const AddAnyForm = () => {
  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                message: 'Please enter a title'
              }
            ]}
          >
            <Input placeholder="Please enter a title" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="privacy"
            label="Privacy Setting"
            rules={[
              {
                required: false,
                message: 'Please choose a privacy setting'
              }
            ]}
          >
            <Select defaultValue="private" placeholder="Please choose a privacy setting">
              <Option value="private">Private</Option>
              <Option value="public">Public</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="url"
            label="Url"
            rules={[
              {
                required: true,
                message: 'Please enter url'
              }
            ]}
          >
            <Input
              style={{
                width: '100%'
              }}
              placeholder="Please enter url"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'please enter description'
              }
            ]}
          >
            <Input.TextArea rows={4} placeholder="please enter description" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default AddAnyForm;
