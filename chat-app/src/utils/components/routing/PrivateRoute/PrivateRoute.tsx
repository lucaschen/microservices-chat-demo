import { ComponentType, FC, ReactElement } from "react";
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";

interface CommonProps extends RouteProps {
  allowVisit: boolean;
  redirectTo: string;
}

type Props =
  | ({
      component: ComponentType<RouteComponentProps>;
    } & CommonProps)
  | ({
      render: (props: RouteComponentProps) => ReactElement;
    } & CommonProps);

const PrivateRoute: FC<Props> = ({ allowVisit, component: Component, redirectTo, render, ...rest }) => {
  const renderedComponent = Component ? (props: RouteComponentProps) => <Component {...props} /> : render!;

  return (
    <Route
      {...rest}
      render={(props) =>
        allowVisit ? (
          renderedComponent(props)
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
