import express from "express";
// import dotenv from "dotenv";
import helmet from "helmet";
import webpack from "webpack";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
// import { createStore } from "redux";
import reducer from "../frontend/reducers";
import Layout from "../frontend/components/Layout";
import initialState from "../frontend/initialState";
import serverRoutes from "../frontend/routes/serverRoutes";
import getManifest from "./getManifest";

