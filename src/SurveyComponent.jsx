import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

function SurveyComponent() {
  const survey = new Model(json);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
    console.log(process.env);
    options.showSaveInProgress();
    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://vhmpchntns.eu-west-1.awsapprunner.com/transfo_ui_save"
    );
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = xhr.onerror = function () {
      if (xhr.status == 200) {
        options.showSaveSuccess();
      } else {
        options.showSaveError();
      }
    };
    xhr.send(JSON.stringify(sender.data));
  });
  return <Survey model={survey} />;
}

export default SurveyComponent;