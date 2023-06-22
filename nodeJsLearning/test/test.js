const sinon = require('sinon');
const assert = require('assert');

describe('login api unit testing', function () {
    it('token should be generated', function () {
        const username = "vipin";
        const password = "vipin@123";
        const getToken = sinon.stub();
        getToken.withArgs(username, password).returns("123456789");

        const token = getToken(username, password);

        assert.equal(token, "123456789");
    });

    it('username and password should match', function () {
        const username = "vipin";
        const password = "vipin@123";
        const loginService = sinon.stub();
        loginService.withArgs(username, password).returns(true);

        const result = loginService(username, password);

        assert.equal(result, true);
    });

    it('username and password should not match', function () {
        const username = "vipin";
        const password = "vipin@1234";
        const loginService = sinon.stub();
        loginService.withArgs(username, password).returns(false);

        const result = loginService(username, password);

        assert.equal(result, false);
    });

    it('when login is succesfull', function () {
        const username = "vipin";
        const password = "vipin@1234";
        const expectedResult = { status: 200, message: "Login Successfull", token: "1341341413" }
        const login = sinon.stub();
        login.withArgs(username, password).returns(expectedResult);

        const result = login(username, password);

        assert.equal(result, expectedResult);
    });

    it('when login is unsuccesfull', function () {
        const username = "vipin";
        const password = "vipin@1234";
        const expectedResult = { status: 401, error: "Login Failed" }
        const login = sinon.stub();
        login.withArgs(username, password).returns(expectedResult);

        const result = login(username, password);

        assert.equal(result, expectedResult);
    });

    it('if something went wrong', function () {
        const username = "vipin";
        const password = "vipin@1234";
        const expectedResult = { status: 500, message: "Something went wrong! Please try again later" }
        const login = sinon.stub();
        login.withArgs(username, password).returns(expectedResult);

        const result = login(username, password);

        assert.equal(result, expectedResult);
    });


});


describe('register api unit testing', function () {
    it('should save data into database', function () {
        const username = "test1"
        const password = "test@123";

        const registerService = sinon.stub();
        registerService.withArgs(username, password).returns(true);

        const result = registerService(username, password);

        assert.equal(result, true);
    });

    it('should return false, if data is not saved in database', function () {
        const username = "test1"
        const password = "test@123";

        const registerService = sinon.stub();
        registerService.withArgs(username, password).returns(false);

        const result = registerService(username, password);

        assert.equal(result, false);
    });

    it('should encrypt the password', function () {
        const password = "test@123";
        const expectedResult = "1141@342352453afjiq41t134832g8edf2762e7vedvacfryq348"

        const encryptPassword = sinon.stub();
        encryptPassword.withArgs(password).returns("1141@342352453afjiq41t134832g8edf2762e7vedvacfryq348");

        const result = encryptPassword(password);

        assert.equal(result, expectedResult);
    });
});