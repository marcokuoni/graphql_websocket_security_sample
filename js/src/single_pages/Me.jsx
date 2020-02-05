import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Loading from "../components/Loading";
import { setLoggedOut, setIsLoggedIn } from "Utils/Token";

// eslint-disable-next-line no-unused-vars
import log from "Log";

const LOGOUT = gql`
    mutation logout {
        logout {
            authToken
            error
        }
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
    return (
      <div>
          <br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/>
        Me
        <p>
            Welcome {this.props.data ? this.props.data.me.uName : ''} {this.props.data ? this.props.data.me.anonymus : ''}
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
            setIsLoggedIn(logoutAnswer.authToken);
            setLoggedOut();
            history.push("/login");
        }
    });

  const {  data, refetch } = useQuery(ME);
    if (loading) return <Loading />;
    if (error) return <p>An error occurred</p>;

    return <MeForm logout={logout} answer={answer} data={data} refetch={refetch} />;
}
