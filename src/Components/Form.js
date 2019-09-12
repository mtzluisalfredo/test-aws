import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import StyledWrapper from './StyledWrapper';
import { Title6 } from './Text';
import Spinner from './Spinner';

const Form = ({ handleSubmit, clickBtn, loading, error }) => (
  <form>
    <Title6>Login</Title6>
    <Field
      name='username'
      type='text'
      labelInput='Nombre:'
      component={Input}
      id='username'
      placeholder='Benedict'
    />
    <Field
      name='password'
      type='password'
      labelInput='Descripción:'
      component={Input}
      id='password'
    />
    <StyledWrapper direction='row' width='525px' justify='space-between'>
      <Button
        id='btn-cancel-form'
        onClick={handleSubmit(val => clickBtn(val))}
        secondary
        value='cancel'
        marginTop='10px'
        width='200px'
      >
        {loading ? <Spinner /> : 'Iniciar'}
      </Button>
      {error ? error.message.toString() : ''}
    </StyledWrapper>
  </form>
);

Form.propTypes = {
  clickBtn: PropTypes.func,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  loading: PropTypes.bool,
};

const afterSubmit = (result, dispatch) => dispatch(reset('ItemForm'));

const OrdersTradesSearchForm = reduxForm({
  form: 'ItemForm',
  onSubmitSuccess: afterSubmit,
  enableReinitialize: true,
})(Form);

export default connect(() => {
  const initialValues_temp = { name: '', description: '' };

  return {
    initialValues: initialValues_temp,
  };
})(OrdersTradesSearchForm);
