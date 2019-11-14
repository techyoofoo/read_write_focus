import axios from 'axios';


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
export const readFocus = async (req, h) => {
  const promise = new Promise(async (resolve, reject) => {
    try {
      const config = {
        headers: {
          "content-type": "application/json"
        }
      };
      
      request.UB.data_body = req.payload

      axios.post("http://localhost:7003/send_msg", request, config)
        .then((response) => {
          return resolve(response.data);
        })
        .catch(error => {
          throw error
        });
    }
    catch (error) {
      throw error
    }
  });
  return promise;
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
