import { useMemo } from "react";
import { useHistory } from "react-router";
import routesJson from "components/Routes/routes.json";

type Routes = {
  [route in keyof typeof routesJson]: () => void;
};

const useRoutes: () => Routes = () => {
  const history = useHistory();

  const routes = useMemo(() => {
    const routes = Object.entries(routesJson).reduce((acc, route) => {
      const [name, attributes] = route;
      const temp: Record<string, () => void> = { ...acc };

      temp[name] = () => {
        history.push(attributes.path);
      };

      return temp;
    }, {}) as Routes;
    return routes;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return routes;
};

export default useRoutes;
