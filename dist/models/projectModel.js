"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _taskModel = _interopRequireDefault(require("./taskModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProjectModel = _database.sequelize.define('projects', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  priority: {
    type: _sequelize["default"].INTEGER
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  deliverdate: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

ProjectModel.hasMany(_taskModel["default"], {
  foreingKey: 'project_id',
  sourceKey: 'id'
});

_taskModel["default"].belongsTo(ProjectModel, {
  foreingKey: 'project_id',
  sourceKey: 'id'
});

var _default = ProjectModel;
exports["default"] = _default;