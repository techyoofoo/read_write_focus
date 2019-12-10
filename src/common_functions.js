import axios from 'axios';
import uniqueString from 'unique-string';

let request = {
  UB: {
    header: {
      Version: "1",
      Message_ID: "rogue.yoofoo.commission.periodlist"
    },
    data_body: null,
    footer: {
      Copyright: "Yoofoo",
      Year: 2020
    }
  },
  permission_type: "read",
  map_url: "http://localhost:6002/periodlist/967"
}

// Read focus method
//Can be made necessary changes based on requirments
export const readFocus = async (req, reply) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };

    let queueName = uniqueString()
    request.UB.data_body = { queue: queueName }

    axios.post("http://localhost:7003/send_msg", request, config)
      .catch(error => {
        throw error
      });
    return reply.response(queueName);
  }
  catch (error) {
    throw error
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
