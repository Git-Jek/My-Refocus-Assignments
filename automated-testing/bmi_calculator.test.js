const calcBMI = require("./bmi_calculator");

test("Check BMI if 177 & 80 is 25.535446391522232", () => {
    expect((80 / ((177 * 177) / 10000))).toBe(25.535446391522232);
});