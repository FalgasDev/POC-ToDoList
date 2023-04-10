function notFoundError() {
  return {
    name: "NotFoundError",
    message: "This task don't exist",
  };
}

function conflictError(message: string) {
  return {
    name: "ConflictError",
    message,
  };
}

export default {
  notFoundError,
  conflictError
}