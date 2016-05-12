var expect = require("chai").expect;
var should = require('chai').should();
var employeesDAO = require("../src/app/models/dao/EmployeesDAO.js");
var usersDAO = require("../src/app/models/dao/UsersDAO.js");
var commonValidator = require("../src/app/utils/commonValidator.js");

//EMPLOYEES DAO:
describe("CRUD de empleados", function() {
	describe("Lista de empleados", function() {
		 it("Trae la lista de todos los empleados dados de alta en la base de datos", function() {
		 	employeesDAO.findAll(function (error, empleados){
		 		should.not.exist(error);
		 		should.exist(empleados);
		 	});
    	});
	});
	describe("Datos del empleado", function() {
		 it("Trae los datos de un empleado en la base de datos de acuerdo a su id", function() {
		 	employeesDAO.findById(function (error, empleado){
		 		should.not.exist(error);
		 		should.exist(empleados);
		 	});
    	});
	});
	describe("Crear empleado", function() {
		 it("Dar de alta un empleado en la base de datos", function() {
		 	 var employee={
    			name: "Carla",
    			lastName: "Prieto",
    			secondLastName: "Chavez",
    			RFC: "PICC940806MC",
    			socialSecurityNumber: "080694",
    			dailySalary: 100,
    			hiringDate: new Date("October 13, 2014 11:13:00"),
   				workingDays: 5
  			};
		 	employeesDAO.create(employee, function (error, empleado){
		 		should.not.exist(error);
		 		should.exist(empleado);
		 	});
    	});
	});
	describe("Editar un empleado", function() {
		 it("Editar un empleado en la base de datos de acuerdo a su identificador (id)", function() {
		 	var employee={
    			name: "Anabelle",
    			lastName: "Prieto",
    			secondLastName: "Chavez",
    			RFC: "PICC940806MC",
    			socialSecurityNumber: "080694",
    			dailySalary: 100,
    			hiringDate: new Date("October 13, 2014 11:13:00"),
   				workingDays: 5
  			};
		 	employeesDAO.updateById(1, employee, function (error, empleado){
		 		should.not.exist(error);
		 		should.exist(empleado);
		 	});
    	});
	});
	describe("Eliminar empleado", function() {
		 it("Borrar a un empleado en la base de datos de acuerdo a su id", function() {
		 	var employee={
    			name: "Anabelle",
    			lastName: "Prieto",
    			secondLastName: "Chavez",
    			RFC: "PICC940806MC",
    			socialSecurityNumber: "080694",
    			dailySalary: 100,
    			hiringDate: new Date("October 13, 2014 11:13:00"),
   				workingDays: 5
  			};
		 	employeesDAO.removeById(1,employee,function (error, empleado){
		 		should.not.exist(error);
		 		should.exist(empleado);
		 	});
    	});
	});
});
//USER DAO
describe("Inicio de Session del Usuario", function() {
	describe("Buscar contraseña", function() {
		 it("Verifica que la combinación usuario-contraseña exista en la base de datos", function() {
		 	usersDAO.findUserPassword(function (error, usuario){
		 		should.not.exist(error);
		 		should.exist(usuario);
		 	});
    	});
	});
});
// COMMON VALIDATOR
describe("Validador común de entradas al sistema", function() {
	describe("Validar Nombre", function() {
		 it("Valida que el nombre no sea mayor a 50 caracteres", function() {
		 	var long_name = "asdfghjklñasdfghjklñasdfghjklñasdfghjklñasdfghjklñasdfghjklñ";
		 	var validate_name = commonValidator.validateName(long_name);
		 	expect(validate_name).to.not.be.ok;
		 });
    });
    describe("Validar Contraseña", function() {
		 it("Valida que el nombre no sea mayor a 50 caracteres, no menor a 8 y no contenga caracteres incorrectos", function() {
		 	var long_password = "asdfghjklñasdfghjklñasdfghjklñasdfghjklñasdfghjklñasdfghjklñ";
		 	var validate_long_password = commonValidator.validatePassword(long_password);
		 	var short_password = "abc";
		 	var validate_short_passsword = commonValidator.validatePassword(short_password);
		 	expect(validate_long_password).to.not.be.ok;
		 	expect(validate_short_passsword).to.not.be.ok; 
		 });
    });
    describe("Validar RFC", function() {
		 it("Valida los caracteres y la longitud del RFC ingresado", function() {
		 	var invalid_rfc = "asdfghjk*";
		 	var validate_rfc = commonValidator.validateRFC(invalid_rfc);
		 	expect(validate_rfc).to.not.be.ok;
		 });
    });
});
//COMMON OPERATIONS (ISR Y IMSS)
describe("Inicio de Session del Usuario", function() {
	describe("Buscar contraseña", function() {
		 it("Verifica que la combinación usuario-contraseña exista en la base de datos", function() {
		 	usersDAO.findUserPassword(function (error, usuario){
		 		should.not.exist(error);
		 		should.exist(usuario);
		 	});
    	});
	});
});


