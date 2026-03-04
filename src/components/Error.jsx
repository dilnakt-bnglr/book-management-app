import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>
        {error.status} - {error.statusText}
      </h2>
      <p>{error.error.message}</p>
    </div>
  );
}
export default Error;
