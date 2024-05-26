"use client";
const ErrorBoundry = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return <div>{error.message}</div>;
};

export default ErrorBoundry;
