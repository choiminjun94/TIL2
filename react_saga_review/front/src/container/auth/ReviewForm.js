// container/auth//ReviewForm.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewForm from "../../components/auth/ReviewForm";

const ReviewForm = (history) => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const {} = useSelector(({}) => ({}));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
        filed
    );
  };
};

export default ReviewForm;
