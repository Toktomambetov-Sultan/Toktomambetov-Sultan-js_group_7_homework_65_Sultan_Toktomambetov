import React from "react";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

function withPreloader(WrappedComponent, axios) {
  return (props) => {
    const [loading, setLoading] = useState(null);
    axios.interceptors.request.use((res) => {
      setLoading(true);
      return res;
    });
    axios.interceptors.response.use((res) => {
      setLoading(false);
      return res;
    });
    console.log(props);
    return (
      <div>
        <Spinner show={loading} />
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withPreloader;
