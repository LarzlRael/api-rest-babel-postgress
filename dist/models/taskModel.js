"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var taskModel = _database.sequelize.define('tasks', {
  id: {
    primaryKey: true,
    type: _sequelize["default"].INTEGER
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  done: {
    type: _sequelize["default"].BOOLEAN
  },
  project_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = taskModel;
exports["default"] = _default;