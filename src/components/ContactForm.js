import React, { Component } from "react";
import * as axios from "axios";
import styled, { keyframes } from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import PropTypes from "prop-types";
import { Title, SubTitle, Button } from "./Components";

const ModalAnimation = keyframes`
    0% {
        opacity: 0;
    }

    9% {
        opacity: 1;
    }

    91% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }

`;

const ContentWrapper = styled.article`
  width: calc(100% - 40px);
  max-width: 768px;
  margin: 40px auto;

  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
  font-family: "Barlow";

  @media (min-width: 1360px) {
    max-width: 1000px;
  }
`;

const HelperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1024px) {
    flex-direction: row;
    position: relative;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  width: calc(100% - 20px);
  position: relative;
  margin-top: 55px;
  @media (min-width: 1024px) {
    width: calc(100% / 4);
    &:nth-of-type(3) {
      margin-right: unset;
    }

    &.--last {
      margin-right: unset;
      padding-top: 39px;
      width: 100%;
    }
  }
  @media (min-width: 1360px) {
    width: 290px;
  }
`;

const Input = styled.input`
width: 100%;
  background-color: none;
  border: none;
  border-bottom: 2px solid #000;
  padding: 0 0 12px 12px;
  outline: none;
  font-size: 16px;
  color: #636d76;
  transition-property: border;
  transition-duration: 0.3s;

  &:focus {
    border-bottom: 2px solid #569358;
  }

  &.--error {
    color: #9f0a11;
    border-bottom: 2px solid #9f0a11;
    &::placeholder {
      color: #9f0a11;
    }
  }
`;

const TextArea = styled(TextareaAutosize)`
  width: 100%;
  background-color: none;
  border: none;
  border-bottom: 2px solid #000;
  padding-left: 12px;
  min-height: 32px;
  max-width: 100%;
  outline: none;
  font-size: 16px;
  color: #636d76;
  transition-property: border;
  transition-duration: 0.3s;

  &:focus {
    border-bottom: 2px solid #569358;
  }

  &.--error {
    color: #9f0a11;
    border-bottom: 2px solid #9f0a11;
    &::placeholder {
      color: #9f0a11;
    }
  }

  @media (min-width: 1024px) {
    min-width: 770px;
  }
  @media (min-width: 1360px) {
    min-width: 1000px;
  }
`;

const ErrorMessage = styled.p`
  position: absolute;
  left: 12px;
  top: calc(100% + 7px);
  color: #9f0a11;
  font-size: 14px;
  font-weight: 500;
`;

// const Button = styled.button`
// width: 280px;
// height: 60px;
// background-color: #569358;
// display: flex;
// justify-content: center;
// align-items: center;
// cursor: pointer;
// margin: 0 auto;
// margin-top: 70px;
// box-shadow: 0px 50px 60px 0px rgba(1, 9, 25, 0.4);
// border: none;

// @media (min-width: 1360px){
//     width: 325px;
// }
// `;

// const ButtonText = styled.p`
// font-weight: 700;
// font-size: 24px;
// color: white;
// text-transform: uppercase;
// transform: translate(0%, 2px);
// `;

const StyledButton = styled(Button)`
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  text-transform: uppercase;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  opacity: 0;
  transition: 0.3s;
  width: 100%;
  height: 100%;
  background-color: #00000052;
  z-index: 99;
  pointer-events: none;

  &.--active {
    display: block;
    animation: ${ModalAnimation} 3.66s;
  }
`;

const ThankYouMessage = styled.div`
  width: calc(100% - 40px);
  position: absolute;
  pointer-events: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  background-color: #ffffff;
  color: none;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 33px;

  @media (min-width: 1360px) {
    width: 100%;
    padding: 150px 0;
    font-size: 44px;
  }
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      inputName: "",
      number: "",
      text: "",
      emailError: "",
      textError: "",
      inputNameError: "",
      numberError: "",
      isInvalid: false,
      animate: false,
    };

    this.nameInputRef = React.createRef();
    this.numberInputRef = React.createRef();
    this.emailInputRef = React.createRef();
    this.questionInputRef = React.createRef();
  }

  onFormSubmit = (e) => {
    let result = this.submitValidation();

    if (result === false) {
      const formData = new FormData();
      formData.append("inputName", this.nameInputRef.current.value);
      formData.append("number", this.numberInputRef.current.value);
      formData.append("email", this.emailInputRef.current.value);
      formData.append("question", this.questionInputRef.current.value);

      axios.post("https://nikairu.github.io/send.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      e.preventDefault();

      this.setState({
        email: "",
        inputName: "",
        number: "",
        text: "",
        animate: true,
      });
      setTimeout(() => {
        this.setState({
          animate: false,
        });
      }, 2000);
    }
  };

  submitValidation = () => {
    let isInvalid = false;

    if (this.state.inputName === "") {
      this.setState({
        inputNameError: `Field required!`,
      });
      isInvalid = true;
    }
    if (this.state.email === "") {
      this.setState({
        emailError: `Field required!`,
      });
      isInvalid = true;
    } else if (!this.isEmailValid(this.state.email)) {
      this.setState({
        emailError: `Wrong e-mail address!`,
      });
      isInvalid = true;
    }
    // if (this.state.number === "") {
    //     this.setState({
    //         numberError: `Field required!`,
    //     })
    //     isInvalid = true;
    // } else if (!this.isNumberValid(this.state.number)) {
    //     this.setState({
    //         numberError: `Wrong format!`,
    //     })
    //     isInvalid = true;
    // } else if (this.state.number.length < 9) {
    //     this.setState({
    //         numberError: `Minimum 9 digits!`,
    //     })
    //     isInvalid = true;
    // }
    if (this.state.text === "") {
      this.setState({
        textError: `Field required!`,
      });
      isInvalid = true;
    }

    return isInvalid;
  };

  isEmailValid = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  isNumberValid = (number) => {
    const re = /^[+]*[0-9]{0,3}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return re.test(String(number).toLowerCase());
  };

  validateName = (inputName) => {
    const errors = {
      inputName: "",
    };

    if (inputName === "") {
      errors.inputName = `Field required!`;
    }

    this.setState({
      inputNameError: errors.inputName,
    });
  };

  validateText = (text) => {
    const errors = {
      text: "",
    };

    if (text === "") {
      errors.text = `Field required!`;
    }

    this.setState({
      textError: errors.text,
    });
  };

  validateNumber = (number) => {
    const errors = {
      number: "",
    };
    if (!this.isNumberValid(number)) {
      errors.number = `"Wrong format!`;
    } else if (number === "") {
      errors.number = `Field required!`;
    }

    this.setState({
      numberError: errors.number,
    });
  };

  validateEmail = (email) => {
    const errors = {
      email: "",
    };

    if (!this.isEmailValid(email)) {
      errors.email = `Wrong e-mail address!`;
    }

    this.setState({
      emailError: errors.email,
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });

    switch (name) {
      case "email":
        this.validateEmail(value);
        break;
      case "inputName":
        this.validateName(value);
        break;
      //   case "number":
      //     this.validateNumber(value);
      //     break;
      case "text":
        this.validateText(value);
        break;
      default:
        break;
    }
  };

  componentDidUpdate() {}

  render() {
    return (
      <>
        <ContentWrapper>
          <Modal className={this.state.animate ? "--active" : ""}>
            <ThankYouMessage>{"Thank you for contacting me!"}</ThankYouMessage>
          </Modal>
          <Title>{"Contact me"}</Title>
          <SubTitle>..Or just drop by to say Hi!</SubTitle>
          <Form>
            <HelperWrapper>
              <InputWrapper>
                <Input
                  type="text"
                  name="inputName"
                  placeholder={"name and last name"}
                  ref={this.nameInputRef}
                  onChange={this.handleChange}
                  value={this.state.inputName}
                  className={this.state.inputNameError !== "" ? "--error" : ""}
                />
                {this.state.inputNameError && (
                  <ErrorMessage>{this.state.inputNameError}</ErrorMessage>
                )}
              </InputWrapper>
              <InputWrapper>
                <Input
                  type="text"
                  name="number"
                  placeholder={"phone number"}
                  ref={this.numberInputRef}
                  onChange={this.handleChange}
                  value={this.state.number}
                  className={this.state.numberError !== "" ? "--error" : ""}
                />
                {this.state.numberError && (
                  <ErrorMessage>{this.state.numberError}</ErrorMessage>
                )}
              </InputWrapper>
              <InputWrapper>
                <Input
                  type="text"
                  name="email"
                  placeholder="e-mail"
                  ref={this.emailInputRef}
                  onChange={this.handleChange}
                  value={this.state.email}
                  className={this.state.emailError !== "" ? "--error" : ""}
                />
                {this.state.emailError && (
                  <ErrorMessage>{this.state.emailError}</ErrorMessage>
                )}
              </InputWrapper>
            </HelperWrapper>
            <InputWrapper className="--last">
              <TextArea
                type="text"
                name="text"
                placeholder={"question"}
                ref={this.questionInputRef}
                onChange={this.handleChange}
                value={this.state.text}
                className={this.state.textError !== "" ? "--error" : ""}
              />
              {this.state.textError && (
                <ErrorMessage>{this.state.textError}</ErrorMessage>
              )}
            </InputWrapper>
            <StyledButton
              as="button"
              onClick={this.onFormSubmit}
              type="button"
              className="--raised"
            >
              Send
            </StyledButton>
          </Form>
        </ContentWrapper>
      </>
    );
  }
}

ContactForm.propTypes = {
  translate: PropTypes.bool,
};

ContactForm.defaultProp = {
  translate: false,
};

export default ContactForm;
