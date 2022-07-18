interface ErrorFallbackProps {
  error?: {
    message: string;
  };
}

function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
    </div>
  );
}

export default ErrorFallback;
