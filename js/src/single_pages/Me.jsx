import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Loading from "../components/Loading";
import { setLoggedOut } from "Utils/Token";

// eslint-disable-next-line no-unused-vars
import log from "Log";

const LOGOUT = gql`
    mutation logout {
        logout
    }
`;

const ME = gql`
    query me {
        me {
            uName
            anonymus
        }
    }
`;

class MeForm extends React.Component {
  render() {
      log(this.props.data);
    return (
      <div>
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
        Me
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    this.props.logout();
                }}
            >
                Sign out
            </button>

            <button
                onClick={() => {
                    this.props.refetch();
                }}
            >
                Refetch
            </button>
        </p>
      </div>
    );
  }
}

MeForm.propTypes = {
    logout: PropTypes.func,
    refetch: PropTypes.func,
    data: PropTypes.object,
    answer: PropTypes.bool
};

export default function Me({ location, history }) {
    const [answer, setAnswer] = useState(null);
    const [logout, { loading, error }] = useMutation(LOGOUT, {
        onCompleted({ logout: logoutAnswer }) {
            setAnswer(logoutAnswer );
        }
    });

  const {  data, refetch } = useQuery(ME);
    if (loading) return <Loading />;
    if (error) return <p>An error occurred</p>;
    if (answer) {
        setLoggedOut();
        history.push("/");
    }

    return <MeForm logout={logout} answer={answer} data={data} refetch={refetch} />;
}
