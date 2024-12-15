import { serviceConfig } from "./serviceConfig";
import { gamesConfig } from "./serviceConfig";
import axios from "axios";
import config from "../config";
const timeout = 3000;
const baseUrl = config.baseUrl;

function constructUrl({ service, serviceType, queryString, id }) {
  const serviceUrl = serviceConfig[service];
  let url = `${baseUrl}${serviceUrl}/${serviceType}`;
  if (queryString) {
    url = `${url}?${encodeURI(queryString)}`;
  }
  return url;
}

async function find({ ...props }) {
  const url = constructUrl({ ...props, serviceType: gamesConfig["find"] });
  const res = await axios.get(url, {
    timeout,
  });
  return res.data;
}

async function save({ ...props }) {
  const url = constructUrl({ ...props, serviceType: gamesConfig["save"] });
  const res = await axios({
    method: props?.id ? "PUT" : "POST",
    url,
    data: props?.body,
  });
  return res.data;
}

async function remove({ ...props }) {
  const url = constructUrl({ ...props });
  const res = await axios.delete(url, {
    timeout,
  });
  return res.data;
}

function wrapper(service) {
  return {
    find: ({ ...args }) => {
      return find({ ...args, service });
    },
    save: ({ ...args }) => {
      return save({ ...args, service });
    },
    remove: ({ ...args }) => {
      return remove({ ...args, service });
    },
  };
}

const api = {};
Object.keys(serviceConfig).forEach((value) => {
  return (api[value] = wrapper(value));
});
Object.keys(gamesConfig).forEach((value) => {
  return (api[value] = wrapper(value));
});

export { api };
