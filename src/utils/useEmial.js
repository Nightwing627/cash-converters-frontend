import { useState } from "react";

export const UseEmail = (endpointUrl) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const sendEmail = (data) => {
    setLoading(true);
    setSubmitted(false);
    setError(undefined);

    fetch(endpointUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (response.status === 422) {
        throw new Error("Are you robot?");
      }

      if (response.status !== 200) {
        throw new Error(`${response.statusText} (${response.status})`);
      }

      return response.json();
    })
    .then(() => {
      setSubmitted(true);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.toString());
      setLoading(false);
    });
  };

  return {
    submitted, loading, error, sendEmail
  }
};

const SendMessage = (data) => {
  
  // Object.keys(data).map(key => console.log(key, data[key]));
  
  fetch("/send", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
  })
  .catch(err => console.log(err));
}

export default SendMessage;