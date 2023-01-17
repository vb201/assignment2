import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Radio,
  Input,
  InputNumber,
  Upload,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd/es/form';
import Header from '../../components/header';

const { TextArea } = Input;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',

  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  // mobile number validation
  number: {
    range: `Mobile number should be 10 digits`,
  },
};
/* eslint-enable no-template-curly-in-string */

const CheckboxGroup = Checkbox.Group;
const technologyOptions = [
  {
    label: 'C',
    value: 'C',
  },
  {
    label: 'C++',
    value: 'C++',
  },
  {
    label: 'Java',
    value: 'Java',
  },
  {
    label: 'Python',
    value: 'Python',
  },
  {
    label: 'Javascript',
    value: 'Javascript',
  },
];
const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const CreateUsers: React.FC = () => {
  const formRef = React.createRef<FormInstance>();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Header />
      {/* Create form body */}
      <Form
        ref={formRef}
        name="userForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Name"
          name="Name"
          rules={[
            { required: true, min: 2, max: 30 },
            {
              pattern: /^[a-zA-Z]+$/,
              message: 'Name should contain only alphabets',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mobile"
          name="mobile"
          rules={[
            {
              required: true,
              type: 'number',
              min: 1000000000,
              max: 9999999999,
            },
          ]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Technology" name="technology">
          <CheckboxGroup options={technologyOptions} />
        </Form.Item>

        {/* Profile  */}
        <Form.Item label="Dragger">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload.Dragger name="files" action="#">
              {/* <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p> */}
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              {/* <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p> */}
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        {/* Submit button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateUsers;
