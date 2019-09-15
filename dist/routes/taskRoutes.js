"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks.controler");

var router = (0, _express.Router)(); //get routes

router.get('/', _tasks.allTasks);
router.get('/:id', _tasks.getOneTasks);
router.get('/projects/:project_id', _tasks.getTaskByProject); //post routes

router.post('/', _tasks.createTask); //put routes

router.put('/:id', _tasks.updateTask); //delte routes

router["delete"]('/:id', _tasks.deleteTask);
var _default = router;
exports["default"] = _default;