/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

//type : password/data
export const updateSettings = async (data, type) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url:
        type === 'password'
          ? '/api/v1/users/updateMyPassword'
          : '/api/v1/users/updateMe',
      data,
    });
    if (res.data.status === 'success') {
      showAlert(
        'success',
        `${type === 'data' ? 'Data' : 'Password'} updated successfully!`,
      );
      //   location.reload(true);
    }
  } catch (err) {
    showAlert('error', err.response?.data?.message || err.message);
  }
};
