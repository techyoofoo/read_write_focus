// Read focus method
//Can be made necessary changes based on requirments
export const readFocus = async (req, h) => {
  try {
    console.log("--payload--", req.payload);
    return h.response(req.payload).code(200);
  } catch (error) {
    return h.response(error).code(201);
  }
};

// Write focus method
//Can be made necessary changes based on requirments
export const writeFocus = async (req, h) => {
  try {
    console.log("--payload--", req.payload);
    return h.response(req.payload).code(200);
  } catch (error) {
    return h.response(error).code(201);
  }
};
