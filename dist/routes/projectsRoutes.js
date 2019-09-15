"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _projects = require("../controllers/projects.Controller");

//importando el controlador de proects
var router = (0, _express.Router)(); //metodos get

router.get('/', _projects.getProjects);
router.get('/:id', _projects.getOneProject); //metodos post

router.post('/', _projects.createProject); //delete routes

router["delete"]('/:id', _projects.deleteProject); //put routes

router.put('/:id', _projects.updateProject);
var _default = router;
exports["default"] = _default;