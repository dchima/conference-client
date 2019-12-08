import React from 'react';
import styled from 'styled-components';
import useForm from 'react-hook-form';
import { Basics, Screen } from 'styles';

const Form = styled.form`
  margin-top: 100px;
  margin-left: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px ${Basics.colors.chalkBlue};
  background-color: ${Basics.colors.washBlue};
  position: relative;
  display: flex;
  width: 45%;
  flex-direction: column;
  ul {
    list-style:none;
    padding:0;
    margin:0;
  }
  li {
    display: block;
    padding: 9px;
  }
  input {
    border: 1px solid ${Basics.colors.chalkBlue};
    border-radius: 5px;
    width: 90%;
    height: 35px;
    line-height: 25px;
    font-size: 16px;
    &:hover,
    &:focus {
      box-shadow: 0px 0px 3px ${Basics.colors.chalkBlue};
    }
    ${Screen.largePhone`
      width: 100%;
    `};
  }

  ${Screen.largePhone`
    width: 100%;
    margin: 50px 2px;
  `};
`;
const ContentContainer = styled.div`
  padding: 10px 10px;
  overflow: hidden;
  ${Screen.largeScreen`
  padding: 5px 5px;
  `};
  ${Screen.tablet`
    padding: 5px 10px;
  `};
`;
const Button = styled.button`
  border: 2px solid ${Basics.colors.solidBlue};
  color: ${Basics.colors.solidBlue};
  background-color: ${Basics.colors.white};
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
  padding: 20px 30px;
  line-height: 0px;
  height: 40px;
  width: 130px;
  &:hover,
  &:focus {
    background-color: ${Basics.colors.solidBlue};
    color: ${Basics.colors.white};
  }
`;

const Errors = styled.div`
  color: ${Basics.colors.fadedRed};
`;
const FormTitle = styled.h1`
  position: relative;
  //border: 1px solid black;
  color: ${Basics.colors.deepBlue};
  font-size: 60px;
  font-weight: 600;
  margin: 0;
  ${Screen.tablet`
    font-size: 60px;
    font-weight: 500;
    line-height: 70px;
  `};
  ${Screen.smallPhone`
  font-size: 40px;
  `};
`;
const AttendeeForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    console.log(values);
    fetch('https://conference-talks.herokuapp.com/api/attendee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === 'success') return alert('Registration successful');
        return alert(response.error.message);
      })
      .catch((err) => {
        alert(`Problem with registration: ${err}`);
      });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ContentContainer>
        <FormTitle>
          Register Attendee
        </FormTitle>
        <p>You must register as an attendee before joining any of our talks</p>
        <ul>
          <li>
            <input
              name="firstName"
              placeholder=" first name"
              ref={register({
                required: 'Required',
                minLength: 2,
              })}
            />
            <Errors>
              {errors.firstName && errors.firstName.message}
              {errors.firstName && errors.firstName.type === 'minLength' && <span>name too short</span> }
            </Errors>
          </li>
          <li>
            <input
              name="lastName"
              placeholder=" last name"
              ref={register({
                required: 'Required',
                minLength: 2,
              })}
            />
            <Errors>
              {errors.lastName && errors.lastName.message}
              {errors.lastName && errors.lastName.type === 'minLength' && <span>name too short</span> }
            </Errors>
          </li>
          <li>
            <input
              name="email"
              placeholder=" email"
              ref={register({
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'invalid email address',
                },
              })}
            />
            <Errors>{errors.email && errors.email.message}</Errors>
          </li>
          <li>
            <Button type="submit">Register</Button>
          </li>
        </ul>
      </ContentContainer>
    </Form>
  );
};
export default AttendeeForm;
