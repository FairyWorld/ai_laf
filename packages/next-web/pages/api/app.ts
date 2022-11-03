import { NextApiRequest, NextApiResponse } from "next";

import { JsonResp } from "./response";

export default async function handler(req: NextApiRequest, resp: NextApiResponse) {
  JsonResp(
    {
      created: [
        {
          _id: "62da1bd9583927a711b311ad",
          name: "test",
          created_by: "62da1b79f631f388462444d3",
          appid: "kixjnr",
          status: "running",
          collaborators: [],
          runtime: { image: "docker.io/lafyun/app-service:0.8.7" },
          buckets: [
            { name: "data", mode: "public-read", quota: 1073741824 },
            { name: "public", mode: "public-read-write", quota: 1073741824 },
            { name: "testbk", mode: "private", quota: 1073741824 },
          ],
          packages: [
            { name: "lodash", version: "latest" },
            { name: "cheerio", version: "latest" },
            { name: "request", version: "latest" },
            { name: "aws-sdk", version: "2.1199.0" },
          ],
          created_at: "2022-07-22T03:39:03.882Z",
          updated_at: "2022-07-22T03:39:03.882Z",
          spec: {
            _id: "62da1bd7583927a711b311ac",
            appid: "kixjnr",
            start_at: "2022-07-22T03:39:03.882Z",
            end_at: "2099-12-31T00:00:00.000Z",
            enabled: true,
            spec: {
              _id: "627103c09e4d81d1bb1ff591",
              name: "starter",
              label: "starter",
              request_cpu: 5,
              request_memory: 67108864,
              limit_cpu: 500,
              limit_memory: 134217728,
              database_capacity: 1073741824,
              storage_capacity: 3221225472,
              bandwith: 10485760,
              out_traffic: 2147483648,
              priority: 0,
              enabled: true,
              created_at: "2022-05-03T10:28:16.424Z",
              updated_at: "2022-05-03T10:28:16.424Z",
            },
            created_at: "2022-07-22T03:39:03.883Z",
            updated_at: "2022-07-22T03:39:03.883Z",
          },
        },
        {
          _id: "62da1bd9583927a711b311ad",
          name: "test",
          created_by: "62da1b79f631f388462444d3",
          appid: "kixjnr22",
          status: "running",
          collaborators: [],
          runtime: { image: "docker.io/lafyun/app-service:0.8.7" },
          buckets: [
            { name: "data", mode: "public-read", quota: 1073741824 },
            { name: "public", mode: "public-read-write", quota: 1073741824 },
            { name: "testbk", mode: "private", quota: 1073741824 },
          ],
          packages: [
            { name: "lodash", version: "latest" },
            { name: "cheerio", version: "latest" },
            { name: "request", version: "latest" },
            { name: "aws-sdk", version: "2.1199.0" },
          ],
          created_at: "2022-07-22T03:39:03.882Z",
          updated_at: "2022-07-22T03:39:03.882Z",
          spec: {
            _id: "62da1bd7583927a711b311ac",
            appid: "kixjnr",
            start_at: "2022-07-22T03:39:03.882Z",
            end_at: "2099-12-31T00:00:00.000Z",
            enabled: true,
            spec: {
              _id: "627103c09e4d81d1bb1ff591",
              name: "starter",
              label: "starter",
              request_cpu: 5,
              request_memory: 67108864,
              limit_cpu: 500,
              limit_memory: 134217728,
              database_capacity: 1073741824,
              storage_capacity: 3221225472,
              bandwith: 10485760,
              out_traffic: 2147483648,
              priority: 0,
              enabled: true,
              created_at: "2022-05-03T10:28:16.424Z",
              updated_at: "2022-05-03T10:28:16.424Z",
            },
            created_at: "2022-07-22T03:39:03.883Z",
            updated_at: "2022-07-22T03:39:03.883Z",
          },
        },
        {
          _id: "62da1bd9583927a711b311ad",
          name: "test",
          created_by: "62da1b79f631f388462444d3",
          appid: "kixjnr33",
          status: "running",
          collaborators: [],
          runtime: { image: "docker.io/lafyun/app-service:0.8.7" },
          buckets: [
            { name: "data", mode: "public-read", quota: 1073741824 },
            { name: "public", mode: "public-read-write", quota: 1073741824 },
            { name: "testbk", mode: "private", quota: 1073741824 },
          ],
          packages: [
            { name: "lodash", version: "latest" },
            { name: "cheerio", version: "latest" },
            { name: "request", version: "latest" },
            { name: "aws-sdk", version: "2.1199.0" },
          ],
          created_at: "2022-07-22T03:39:03.882Z",
          updated_at: "2022-07-22T03:39:03.882Z",
          spec: {
            _id: "62da1bd7583927a711b311ac",
            appid: "kixjnr",
            start_at: "2022-07-22T03:39:03.882Z",
            end_at: "2099-12-31T00:00:00.000Z",
            enabled: true,
            spec: {
              _id: "627103c09e4d81d1bb1ff591",
              name: "starter",
              label: "starter",
              request_cpu: 5,
              request_memory: 67108864,
              limit_cpu: 500,
              limit_memory: 134217728,
              database_capacity: 1073741824,
              storage_capacity: 3221225472,
              bandwith: 10485760,
              out_traffic: 2147483648,
              priority: 0,
              enabled: true,
              created_at: "2022-05-03T10:28:16.424Z",
              updated_at: "2022-05-03T10:28:16.424Z",
            },
            created_at: "2022-07-22T03:39:03.883Z",
            updated_at: "2022-07-22T03:39:03.883Z",
          },
        },
      ],
      joined: [],
    },
    resp,
  );
}