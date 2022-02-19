import React, { Fragment } from "react";

import Header from "./Header";
import Body from "./Body";

const Welcome = () => {
  const [user, setUser] = React.useState("Anurag");
  return (
    <Fragment>
      <Header user={user} />
      <Body user={user} />
    </Fragment>
  );
};

export default Welcome;
