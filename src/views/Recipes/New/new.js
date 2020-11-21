import React from 'react';
import './New.css';
import { postNewRecipe } from 'service/recipe-service';
import NewForm from 'components/NewForm/new-form';

const PUBLISH_BUTTON_NAME = 'publicar';

const New = () => {
  const sendData = async values => {
    await postNewRecipe(values);
  };

  return <NewForm sendData={sendData} buttonName={PUBLISH_BUTTON_NAME} />;
};

export default New;
