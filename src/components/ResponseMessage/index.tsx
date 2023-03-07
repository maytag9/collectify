import { notification } from 'antd';
import './style.css';
import { Map as ImMap } from 'immutable';
import { ReactNode } from 'react';

const customMsg: any = notification;

const messageTypes = {
  success: {
    type: 'success',
    title: 'Success!'
  },
  error: {
    type: 'error',
    title: 'Error!'
  },
  notice: {
    type: 'warning',
    title: 'Notice!'
  }
};

const ResponseMessage = (
  message: ReactNode | string,
  customType?: 'success' | 'error' | 'notice',
  status?: any,
  response?: ImMap<string, any>
) => {
  const notification: { type: string; title: string } = customType
    ? messageTypes[customType]
    : (response && (response.get('statusCode') < 300 || response.get('status') < 300)) ||
      status < 300
    ? messageTypes.success
    : messageTypes.error;
  customMsg[notification.type]({
    duration: customType === 'error' ? 0 : 3,
    message: notification.title,
    description: message,
    className: `response-${notification.type}`
  });
};

export default ResponseMessage;
