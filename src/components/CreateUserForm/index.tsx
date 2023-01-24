import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Radio,
  Upload,
  UploadProps,
} from 'antd';
import { UserInterface, setUsers } from '../../features/users/userSlice';
import { useAppDispatch } from '../../hooks/redux';
import ViewUserCard from '../ViewUserCard/';

const CheckboxGroup = Checkbox.Group;

const CreateUserForm = () => {
  const [form] = Form.useForm();

  const initialState: UserInterface = {
    name: '',
    gender: '',
    email: '',
    mobile: 0,
    technology: [],
  };
  const [user, setUser] = useState<UserInterface>(initialState);
  // Redux dispatch
  const dispatch = useAppDispatch();
  // Modal state
  const [openModal, setOpenModal] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',

    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    // mobile number validation
  };
  /* eslint-enable no-template-curly-in-string */
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

  const validateImage = (imageType: string) => {
    // // check if image is png or jpg or jpeg
    const isPNG = imageType === 'image/png';
    const isJPG = imageType === 'image/jpg';
    const isJPEG = imageType === 'image/jpeg';

    if (!isPNG && !isJPG && !isJPEG) {
      message.error('Profile image is not in supported image format.');
      return false;
    }
    return true;
  };
  const onFinish = (values: any) => {
    // Submit form data
    console.log('Success:', values);
    const formData = {
      name: values.name,
      gender: values.gender,
      email: values.email,
      mobile: values.mobile,
      technology: values.technology,
    };

    if (values.dragger?.fileList.length > 0) {
      const image = values.dragger.fileList[0]?.originFileObj;
      const imagePromise: any = convertToBase64(image);
      imagePromise.then((result: string) => {
        const formDataWithProfilePicture = {
          ...formData,
          profilePicture: result,
        };
        dispatch(setUsers(formDataWithProfilePicture));
      });
    } else {
      dispatch(setUsers(formData));
    }
  };

  const convertToBase64 = async (file: any) => {
    return await new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const uploadProps: UploadProps = {
    beforeUpload: (file) => {
      const isPNG = file.type === 'image/png';
      const isJPG = file.type === 'image/jpg';
      const isJPEG = file.type === 'image/jpeg';
      if (!isPNG && !isJPG && !isJPEG) {
        message.error(`${file.name} is not in supported image format.`);
      }

      return false;
    },
  };

  // Modal functions
  const showModal = () => {
    form
      .validateFields()
      .then(() => {
        const formData = form.getFieldsValue();

        if (formData.dragger?.fileList.length > 0) {
          const image = formData.dragger.fileList[0]?.originFileObj;
          const imageType = formData.dragger.fileList[0]?.type;
          const isImageValid: boolean = validateImage(imageType);

          if (!(isImageValid ?? false)) {
            return;
          }
          const imagePromise: any = convertToBase64(image);
          imagePromise.then((result: string) => {
            // setUser({ ...initialState, profilePicture: '' });
            setUser({
              name: formData.name,
              gender: formData.gender,
              email: formData.email,
              mobile: formData.mobile,
              technology: formData.technology,
              profilePicture: result,
            });
          });
          setOpenModal(true);
        } else {
          // setUser(initialState);
          setUser({
            name: formData.name,
            gender: formData.gender,
            email: formData.email,
            mobile: formData.mobile,
            technology: formData.technology,
          });
          setOpenModal(true);
        }
      })
      .catch((errorInfo) => {
        message.error('Please fill all the required fields');
      });
  };

  const handleModalOk = () => {
    setConfirmLoading(true);
    submitForm();
    setTimeout(() => {
      setOpenModal(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleModalCancel = () => {
    setOpenModal(false);
  };

  const submitForm = () => {
    // validate form
    form
      .validateFields()
      .then(() => {
        form.submit();
        message.success('Form submitted successfully');
      })
      .catch(() => {
        message.error('Unable to submit form');
      });
  };

  return (
    <Form
      name="userForm"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      validateMessages={validateMessages}
      form={form}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          { required: true, min: 2, max: 30 },
          {
            pattern: /^[a-zA-Z\s]*$/,
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
          },
          {
            pattern: /^[6-9]\d{9}$/,
            message: 'Mobile number should be a valid Indian number',
          },
        ]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Technology" name="technology">
        <CheckboxGroup options={technologyOptions} />
      </Form.Item>

      {/* Profile  */}
      <Form.Item label="Profile Picture">
        <Form.Item name="dragger" valuePropName="profileImage">
          <Upload.Dragger name="profile" maxCount={1} {...uploadProps}>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      {/* Submit button */}
      <Form.Item
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button type="primary" onClick={showModal}>
          Preview
        </Button>

        {/* Modal */}
        <Modal
          title="Confirm"
          open={openModal}
          onOk={handleModalOk}
          confirmLoading={confirmLoading}
          onCancel={handleModalCancel}
        >
          {/* Modal Content */}
          <ViewUserCard {...user} border={false} />
        </Modal>
      </Form.Item>
    </Form>
  );
};

export default CreateUserForm;
