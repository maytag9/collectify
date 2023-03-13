import React from 'react';
import { Col, DatePicker, Form, Input, Row, Select } from 'antd';
const { Option } = Select;
const AddMovieForm = () => {
  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="Title"
            label="Title"
            rules={[
              {
                required: true,
                message: 'Please enter movie Title'
              }
            ]}
          >
            <Input placeholder="Please enter movie Title" />
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
            name="Director"
            label="Director"
            rules={[
              {
                required: false,
                message: 'Please select a Director'
              }
            ]}
          >
            <Select defaultValue="unknown" placeholder="Please select a Director">
              <Option value="unknown">N/A</Option>
              <Option value="spielberg">Steven Spielberg</Option>
              <Option value="scorsese">Martin Scorsese</Option>
              <Option value="hitchcock">Alfred Hitchcock</Option>
              <Option value="cameron">James Cameron</Option>
              <Option value="spike-lee">Spike Lee</Option>
              <Option value="tarantino">Quentin Tarantino</Option>
              <Option value="anderson">Paul Thomas Anderson</Option>
              <Option value="nolan">Christopher Nolan</Option>
              <Option value="kubrick">Stanley Kubrick</Option>
              <Option value="cuaron">Alfonso Cuarón</Option>
              <Option value="coppola">Francis Ford Coppola</Option>
              <Option value="jcoen">Joel Coen</Option>
              <Option value="ecoen">Ethan Coen</Option>
              <Option value="bigelow">Kathryn Bigelow</Option>
              <Option value="palma">Brian De Palma</Option>
              <Option value="fincher">David Fincher</Option>
              <Option value="ephron">Nora Ephron</Option>
              <Option value="almodovar">Pedro Almodovar</Option>
              <Option value="eastwood">Clint Eastwood</Option>
              <Option value="toro">Guillermo del Toro</Option>
              <Option value="demille">Cecil B. DeMille</Option>
              <Option value="ang-lee">Ang Lee</Option>
              <Option value="mann">Michael Mann</Option>
              <Option value="campion">Jane Campion</Option>
              <Option value="soderbergh">Steven Soderbergh</Option>
              <Option value="nichols">Mike Nichols</Option>
              <Option value="welles">Orson Welles</Option>
              <Option value="lumet">Sidney Lumet</Option>
              <Option value="lynch">David Lynch</Option>
              <Option value="scott">Ridley Scott</Option>
              <Option value="duvernay">Ava DuVernay</Option>
              <Option value="leone">Sergio Leone</Option>
              <Option value="burton">Tim Burton</Option>
              <Option value="kurosawa">Akira Kurosawa</Option>
              <Option value="linklater">Richard Linklater</Option>
              <Option value="zemeckis">Robert Zemeckis</Option>
              <Option value="capra">Frank Capra</Option>
              <Option value="aronofsky">Darren Aronofsky</Option>
              <Option value="lucas">George Lucas</Option>
              <Option value="wright">Edgar Wright</Option>
              <Option value="howard">Ron Howard</Option>
              <Option value="shyamalan">M. Night Shyamalan</Option>
              <Option value="villeneuve">Denis Villeneuve</Option>
              <Option value="joon-ho">Bong Joon-ho</Option>
              <Option value="lana-wachowski">Lana Wachowski</Option>
              <Option value="lilly-wachowski">Lilly Wachowski</Option>
              <Option value="peele">Jordan Peele</Option>
              <Option value="hughes">John Hughes</Option>
              <Option value="fletcher">Anne Fletcher</Option>
              <Option value="abrams">J.J. Abrams</Option>
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
        <Col span={12}>
          <Form.Item
            name="tags"
            label="Tags"
            rules={[
              {
                required: false,
                message: 'Please enter tags'
              }
            ]}
          >
            <Input placeholder="Please enter tags" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="year"
            label="Year"
            rules={[
              {
                required: true,
                message: 'Please choose the year'
              }
            ]}
          >
            <DatePicker picker="year" style={{ width: '100%' }} />
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
                message: 'please enter movie synopsis or description'
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

export default AddMovieForm;
