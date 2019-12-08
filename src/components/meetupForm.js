import React from 'react';
import styled from 'styled-components';
import useForm from 'react-hook-form';
import { Basics, Screen } from 'styles';

const Form = styled.form`
  margin-bottom: 20px;
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px ${Basics.colors.chalkBlue};
  background-color: ${Basics.colors.white};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  p {
    color: ${Basics.colors.deepBlue};
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style:none;
    padding:0;
    margin:0;
  }
  li {
    display: block;
    padding: 9px;
  }
  input {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid ${Basics.colors.chalkBlue};
    border-radius: 5px;
    width: 100%;
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
  border: 2px solid ${Basics.colors.rose};
  color: ${Basics.colors.rose};
  background-color: ${Basics.colors.white};
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
  padding: 0px 30px;
  line-height: 0px;
  height: 40px;
  width: 130px;
  &:hover,
  &:focus {
    background-color: ${Basics.colors.rose};
    color: ${Basics.colors.white};
  }
`;

const Errors = styled.div`
  color: ${Basics.colors.fadedRed};
`;
const FormTitle = styled.h1`
  position: relative;
  //border: 1px solid black;
  color: ${Basics.colors.rose};
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
    fetch(`https://conference-talks.herokuapp.com/api/attendee/attend?talkId=${values.talkId}&email=${values.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === 'success') return alert('You\'ve been added successful');
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
          Join a Talk
        </FormTitle>
        <p>
          Feel free to join any of the talks below. <br />
          Simply input the talk id and your email address. <br />
          Note: You must be a registered attendee to join a talk.
        </p>
        <ul>
          <li>
            <input
              name="talkId"
              placeholder=" talk id"
              ref={register({
                required: 'Required',
                pattern: {
                  value: /\d+/,
                  message: 'please enter a number',
                },
              })}
            />
            <Errors>
              {errors.talkId && errors.talkId.message}
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
            <Button type="submit">Join</Button>
          </li>
        </ul>
      </ContentContainer>
    </Form>
  );
};
export default AttendeeForm;
