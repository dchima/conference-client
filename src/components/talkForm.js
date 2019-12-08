import React from 'react';
import styled from 'styled-components';
import useForm from 'react-hook-form';
import { Basics, Screen } from 'styles';

const Form = styled.form`
  margin-top: 100px;
  margin-left: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px ${Basics.colors.chalkBlue};
  background-color: ${Basics.colors.washOrange};
  position: relative;
  display: flex;
  width: 50%;
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
const TalkForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    const talkData = values;
    talkData.isVerified = true;
    talkData.talkImage = 'https://www.images.com';
    console.log(talkData);
    fetch('https://conference-talks.herokuapp.com/api/talks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === 'success') return alert('Talk registration successful');
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
          Register Talk
        </FormTitle>
        <ul>
          <li>
            <input
              name="presenterName"
              placeholder=" presenter name in full"
              ref={register({
                required: 'Required',
                minLength: 5,
              })}
            />
            <Errors>
              {errors.presenterName && errors.presenterName.message}
              {errors.firstName && errors.firstName.type === 'minLength' && <span>name too short</span> }
            </Errors>
          </li>
          <li>
            <input
              name="talkTitle"
              placeholder=" talk title"
              ref={register({
                required: 'Required',
                minLength: 5,
              })}
            />
            <Errors>
              {errors.talkTitle && errors.talkTitle.message}
              {errors.talkTitle && errors.talkTitle.type === 'minLength' && <span>title too short</span> }
            </Errors>
          </li>
          <li>
            <input
              name="venue"
              placeholder=" venue / address"
              ref={register({
                required: 'Required',
                minLength: 5,
              })}
            />
            <Errors>
              {errors.venue && errors.venue.message}
              {errors.venue && errors.venue.type === 'minLength' && <span>address too short</span> }
            </Errors>
          </li>
          <li>
            <input
              name="talkDuration"
              placeholder=" talk duration, e.g 30 minutes"
              ref={register({
                required: 'Required',
                pattern: {
                  value: /^\d+\s(hour|hours|minutes)$/i,
                  message: 'invalid, e.g 2 minutes/hours',
                },
              })}
            />
            <Errors>
              {errors.talkDuration && errors.talkDuration.message}
            </Errors>
          </li>
          <li>
            <input
              name="talkDate"
              placeholder=" talk date, yyyy-mm-dd"
              ref={register({
                required: 'Required',
                pattern: {
                  value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/i,
                  message: 'invalid, use: yy-mm-dd',
                },
              })}
            />
            <Errors>
              {errors.talkDate && errors.talkDate.message}
            </Errors>
          </li>
          <li>
            <input
              name="organization"
              placeholder=" organization"
              ref={register({
                required: 'Required',
                minLength: 2,
              })}
            />
            <Errors>
              {errors.organization && errors.organization.message}
              {errors.organization && errors.organization.type === 'minLength' && <span>name too short</span> }
            </Errors>
          </li>
          <li>
            <Button type="submit">Register</Button>
          </li>
        </ul>
      </ContentContainer>
    </Form>
  );
};
export default TalkForm;
