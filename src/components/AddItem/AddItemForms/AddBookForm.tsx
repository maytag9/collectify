import React from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
const { Option } = Select;
const AddBookForm = () => {
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
            name="url"
            label="Url"
            rules={[
              {
                required: true,
                message: 'Please enter cover url'
              }
            ]}
          >
            <Input style={{ width: '100%' }} placeholder="Please enter cover url" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="author"
            label="Author"
            rules={[
              {
                required: false,
                message: 'Please select an Author'
              }
            ]}
          >
            <Select placeholder="Please select an Author">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
            </Select>
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
            name="description"
            label="Description"
            rules={[
              {
                required: false,
                message: 'please enter url description'
              }
            ]}
          >
            <Input.TextArea rows={4} placeholder="please enter url description" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default AddBookForm;
