import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form, Button, Spinner } from '../../Components';
import './style.scss';
import * as counterActions from '../../actions';

class Content extends Component {
  loginAction = (type, val) => {
    const { login, signOut } = this.props;

    if (type === 'signOut') {
      signOut();
    }
    if (type === 'login') {
      login(val);
    }
  }

  render() {
    const { loading, idToken, attributes, error } = this.props;
    const style = classNames({
      grid: true,
      content: true,
      shadow: !attributes,
    });
    return (
      <div className={style}>
        {idToken
          ? (
            <div>
              <table width='400'>
                {Object.keys(attributes).map((value, idx) => (
                  <tr key={idx.toString()}>
                    <td>{value}</td>
                    <td>{attributes[value]}</td>
                  </tr>
                ))}
              </table>
              <Button
                id='btn-cancel-form'
                onClick={() => this.loginAction('signOut')}
                secondary
                value='cancel'
                marginTop='10px'
                width='200px'
              >
                {loading ? <Spinner /> : 'Salir'}
              </Button>
            </div>
          )
          : (
            <Form
              error={error}
              attributes={attributes}
              loading={loading}
              clickBtn={val => this.loginAction('login', val)}
            />
          )}
      </div>
    );
  }
}

Content.propTypes = {
  attributes: PropTypes.shape({}),
  error: PropTypes.shape({}),
  idToken: PropTypes.string,
  loading: PropTypes.bool,
  login: PropTypes.func,
  signOut: PropTypes.func,
};


const mapStateToProps = state => {
  const { loading, error, attributes, idToken } = state.counter;
  return { loading, error, attributes, idToken };
};

const actions = { ...counterActions };

export default connect(
  mapStateToProps,
  actions,
)(Content);
