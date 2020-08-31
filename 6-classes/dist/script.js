/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to get private field on non-instance\"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError(\"attempted to set private field on non-instance\"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } return value; }\n\nvar _privatepassword = new WeakMap();\n\nvar User = /*#__PURE__*/function () {\n  function User(fname, lname, email, password) {\n    _classCallCheck(this, User);\n\n    _privatepassword.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _defineProperty(this, \"changePassword\", function (newPassword) {\n      _classPrivateFieldSet(this, _privatepassword, newPassword);\n    });\n\n    this.fName = fname;\n    this.lName = lname;\n    this.email = email;\n\n    _classPrivateFieldSet(this, _privatepassword, password);\n  } //  not able to change\n\n\n  _createClass(User, [{\n    key: \"fullName\",\n    value: function fullName() {\n      return this.fName + '' + this.lName;\n    }\n  }, {\n    key: \"password\",\n    set: function set(value) {\n      console.log('hey you can not change password for user');\n    } //  able to use it ore to see that without get will show you undefined\n    ,\n    get: function get() {\n      return _classPrivateFieldGet(this, _privatepassword);\n    }\n  }], [{\n    key: \"description\",\n    value: function description() {\n      return 'i am static methode';\n    }\n  }]);\n\n  return User;\n}(); // call static\n\n\nconsole.log(User.description());\n/* let someUser ={       static class is not gut to use\n    email:'tim@jfj.com',\n    fName : 'tim' ,\n    lName : 'kjjlj',\n    password: 'fdfddd',\n    fullName : function(){\n        return this.fName + '' + this.lName\n    }\n}\n */\n// \n\nvar someUser = new User('Tim', 'Breuel', 'tim@hdhd.com', '123456');\nvar someUser1 = new User('shirin', 'valizadeh', 'sh@hdhd.com', '12345446'); //prototype\n\nUser.prototype.checkUser = function (email, password) {\n  if (email === this.email && password === this.password) {\n    return true;\n  } else {\n    return false;\n  }\n}; // to override  fullName methode from class user \n\n\nUser.prototype.fullName = function () {\n  return 'i am ' + this.fName + '' + this.lName;\n}; //console.log(someUser.fullName());\n\n\nvar Employee = /*#__PURE__*/function (_User) {\n  _inherits(Employee, _User);\n\n  var _super = _createSuper(Employee);\n\n  function Employee(lname, fname, email, password, officeNum, department) {\n    var _this;\n\n    _classCallCheck(this, Employee);\n\n    //call constracture fram father\n    _this = _super.call(this, fname, lname, email, password);\n    _this.officeNum = officeNum;\n    _this.department = department;\n    return _this;\n  }\n\n  _createClass(Employee, [{\n    key: \"showDetails\",\n    value: function showDetails() {\n      return \"i am an employee and my name is \".concat(this.fname, \" and i am working in \").concat(this.department, \" pass \").concat(this.password);\n    }\n  }], [{\n    key: \"employeeDescription\",\n    value: function employeeDescription() {\n      return 'i am static methode from employee ';\n    }\n  }]);\n\n  return Employee;\n}(User);\n\nconsole.log(Employee.employeeDescription());\nvar someEmployee = new Employee('valizadeh', 'shirin', 'sh@hfh.com', '1112121', 'fbw5', 'web-dev'); //console.log(someEmployee.fullName());\n//console.log(someEmployee.showDetails());\n//?prototype User to add a new methode called changePassword \n//?it should change password\n\n/* User.prototype.changePassword = function( newPassword){\n    if ( newPassword !== this.password) {\n\n        this.#privatepassword = newPassword\n    }\n \n} */\n//someEmployee.changePassword('123');\n//! someEmployee.password = '123'   // can not change password so because of #privat  you need to use change passworde methode\n// change pssword using methode\n\nsomeEmployee.changePassword('123');\nconsole.log(someEmployee.password); //dont let user to change password from this way   someEmployee.password = '123'\n//* will be not equal because they are object \n//! ANSWER >> JSON.stringify(obj1) === JSON.stringify(obj2)  \n\nvar user1 = new User('user1', 'luser1', 'user@gfg.com', '1111');\nvar user2 = new User('user1', 'luser1', 'user@gfg.com', '11112');\n/* if (user1 === user2) {\n    console.log('equal');\n}else{\n    console.log('not');\n} */\n//! or answer   they have yet same place in memory\n\nvar user3 = user1;\n\nif (user1 === user3) {\n  console.log('equal');\n} else {\n  console.log('not');\n}\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

/******/ });