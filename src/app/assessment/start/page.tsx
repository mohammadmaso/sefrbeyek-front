import React from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import './index.css';
import { json } from '../survey';
import 'survey-core/defaultV2.min.css';
import { themeJson } from './theme';

function SurveyComponent() {
  const survey = new Model(json);
  survey.onComplete.add((sender: any, options: any) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  survey.applyTheme(themeJson);
  survey.data = {
    'nps-score': 9,
    'promoter-features': ['performance', 'ui'],
  };
  return <Survey model={survey} />;
}

export default SurveyComponent;
