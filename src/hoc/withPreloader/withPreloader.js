import React from "react";
import { useState } from "react";

export default (WrappedComponent, axios) => {
  const hocComponent = (props) => {
    const [loading, setLoading] = useState(false);
    axios.interceptors.request.use((res) => {
      setLoading(true);
      return res;
    });
    axios.interceptors.response.use((res) => {
        setLoading(false);
        return res;
      });
    return <><WrappedComponent {...props} /></>;
  };
  return hocComponent;
};
