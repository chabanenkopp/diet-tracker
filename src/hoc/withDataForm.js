import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { REGEX, ERRORS } from 'constants/constants'
import firebase from 'database'

const validateInput = (inputValue, isModalOpen) => {
  if (!inputValue && isModalOpen) return true
  if (inputValue) return true
  return false
}

const { EMAIL, PASSWORD } = {
  EMAIL: 'email',
  PASSWORD: 'password',
}

const {
  USER_NOT_FOUND,
  WRONG_PASSWORD,
  USER_ALREADY_IN_USE,
  WEAK_PASSWORD,
  UNKNOWN_ERROR,
} = ERRORS

const initialState = {
  [EMAIL]: '',
  [PASSWORD]: '',
  isEmailValid: true,
  isWarningVisible: false,
  isError: false,
  errorType: '',
}

const withDataForm = (formType) => (Form) => {
  class ComponentWithDataForm extends Component {
    state = initialState

    handleBlur = (value, name) => {
      const { isModalOpen } = this.props
      if (name === EMAIL)
        this.setState({
          isEmailValid: validateInput(REGEX.EMAIL_VAL.test(value), isModalOpen),
        })
    }

    handleWarning = () => {
      this.setState({ isWarningVisible: true })
      setTimeout(() => this.setState({ isWarningVisible: false }), 3000)
    }

    signInUser = () => {
      const { email, password } = this.state
      const { handleToggleModal } = this.props
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          handleToggleModal()
          this.setState(initialState)
        })
        .catch((error) => {
          switch (error.code) {
            case USER_NOT_FOUND:
              this.setState({ errorType: USER_NOT_FOUND })
              break
            case WRONG_PASSWORD:
              this.setState({ errorType: WRONG_PASSWORD })
              break
            default:
              this.setState({ errorType: UNKNOWN_ERROR })
              break
          }
          this.setState({ isError: true })
          this.handleWarning()
          setTimeout(() => this.setState({ isError: false }), 4000)
        })
    }

    createUser = () => {
      const { email, password } = this.state
      const { handleToggleModal } = this.props
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          handleToggleModal()
          this.setState(initialState)
        })
        .catch((error) => {
          switch (error.code) {
            case USER_ALREADY_IN_USE:
              this.setState({ errorType: USER_ALREADY_IN_USE })
              break
            case WEAK_PASSWORD:
              this.setState({ errorType: WEAK_PASSWORD })
              break
            default:
              this.setState({ errorType: UNKNOWN_ERROR })
              break
          }
          this.setState({ isError: true })
          this.handleWarning()
          setTimeout(() => this.setState({ isError: false }), 4000)
        })
    }

    handleSubmitForm = (e) => {
      e.preventDefault()
      const { email, password, isWarningVisible, isEmailValid } = this.state
      if (isWarningVisible) return
      if (email !== '' && password !== '' && isEmailValid) {
        if (formType === 'login') {
          this.signInUser()
        } else {
          this.createUser()
        }
      } else {
        this.handleWarning()
      }
    }

    handleInputChange = ({ target: { name, value } }) => {
      this.setState(
        {
          [name]: value,
        },
        () => this.handleBlur(value, name)
      )
    }

    render() {
      const {
        email,
        password,
        isEmailValid,
        isError,
        isWarningVisible,
        errorType,
      } = this.state
      return (
        <Form
          {...this.props}
          email={email}
          password={password}
          isEmailValid={isEmailValid}
          isError={isError}
          isWarningVisible={isWarningVisible}
          errorType={errorType}
          handleSubmitForm={this.handleSubmitForm}
          handleInputChange={this.handleInputChange}
          handleBlur={this.handleBlur}
        />
      )
    }
  }

  ComponentWithDataForm.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    handleToggleModal: PropTypes.func.isRequired,
  }
  return ComponentWithDataForm
}

export default withDataForm
