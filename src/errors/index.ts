function notFoundError() {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
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