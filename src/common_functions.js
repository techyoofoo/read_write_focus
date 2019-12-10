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
  const promise = new Promise(async (resolve, reject) => {
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
      return resolve(reply.response(queueName));
    }
    catch (error) {
      throw error
    }
  });
  return promise;
};

// Write focus method
//Can be made necessary changes based on requirments
export const writeFocus = async (req, reply) => {
  const promise = new Promise(async (resolve, reject) => {
    try {
      const config = {
        headers: {
          "content-type": "application/json"
        }
      };
      axios.post("http://localhost:3000/api/v1/genericlist", req.payload, config)
        .catch(error => {
          throw error
        });
      return resolve(reply.response("OK"));
    }
    catch (error) {
      throw error
    }
  });
  return promise;
};
