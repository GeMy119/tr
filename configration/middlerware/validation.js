const statusCodes = require("http-status-codes");
module.exports = (schema) => {
  return (req, res, next) => {
    const validationArr = [];
    const validationHeaders = ["body", "param", "query"];
    validationHeaders.forEach((key) => {
      if (schema[key]) {
        //console.log(req.body);
        const validationErr = schema[key].validate(req[key]);
        if (validationErr.error)
          validationArr.push(validationErr.error.details[0].message);
      }
    });
    if (validationArr.length) {
      //console.log(req.body);
      res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: validationArr.join() });
    } else {
      next();
    }
  };
};