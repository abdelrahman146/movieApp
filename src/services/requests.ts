import constants from "../config/constants";
import { ErrorObject, FailedResponse, Response } from "./types";

const cache: Record<string, Response<any>> = {};

export const get = async <T>(
  path: string,
  cached = true,
  options?: {
    params?: Record<string, string>;
    headers?: Record<string, string>;
  }
): Promise<Response<T>> => {
  try {
    const params = new URLSearchParams({
      api_key: constants.apiKey,
      ...(options?.params ? options.params : {}),
    });
    const requestUrl = `${constants.baseUrl}${path}?${params}`;
    if (cache[requestUrl] && cached) return cache[requestUrl] as Response<T>;
    const res = await fetch(requestUrl, {
      ...(options?.headers ? options.headers : {}),
    });
    const json = await res.json();
    if (!res.ok) {
      return {
        status: "FAILED",
        data: json as ErrorObject,
      };
    }
    cache[requestUrl] = {
      status: "SUCCESS",
      data: json as T,
    };
    return cache[requestUrl];
  } catch (err) {
    return {
      status: "FAILED",
      data: {
        success: false,
        status_code: -1,
        status_message: "Request failed, Please check your internet connection",
      },
    };
  }
};
