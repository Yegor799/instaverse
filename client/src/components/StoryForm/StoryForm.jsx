import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Form, Input, Typography, Button } from 'antd';
import 'antd/dist/antd.css';
import FileBase64 from "react-file-base64";
import styles from './styles';
import { createStory } from '../../redux/actions/stories';

const { Title } = Typography;

const StoryForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onSubmit = (formValues) => {
    dispatch(createStory(formValues));
  };

  return (
    <Card
      style={styles.formCard}
      title={
        <Title level={4} style={styles.formTitle}>
        
        </Title>
      }
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        size="middle"
        onFinish={onSubmit}
      >
        <Form.Item name="username" label="Username" rules={[{required: true}]}>
          <Input allowClear/>
        </Form.Item>
        <Form.Item name="caption" label="Caption" rules={[{required: true}]}>
          <Input.TextArea allowClear autoSize={{minRows: 2, maxRows: 6}} />
        </Form.Item>
        <Form.Item name="tags" label="Tags">
          <Input.TextArea allowClear autoSize={{minRows: 2, maxRows: 6}}/>
        </Form.Item>
        <Form.Item name="image" label="Image" rules={[{required: true}]}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={(e) => {
              form.setFieldsValue({
                image: e.base64
              })
            }}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 16,
            offset: 6
          }}
        >
          <Button
            type="primary"
            block
            htmlType="submit"
          >
            Share
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default StoryForm;