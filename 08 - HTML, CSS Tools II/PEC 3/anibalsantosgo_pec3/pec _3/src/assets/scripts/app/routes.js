import { lazy } from "react";

export default [
  {
    name: "home",
    path: "/",
    component: lazy(() => import("./views/Home")),
  },
  {
    name: "band",
    path: "/band",
    component: lazy(() => import("./views/Band")),
  },
  {
    name: "tour",
    path: "/tour",
    component: lazy(() => import("./views/Tour")),
  },
  {
    name: "404",
    path: "*",
    component: lazy(() => import("./views/NotFound")),
  },
];
