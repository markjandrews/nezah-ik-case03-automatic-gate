let i = 0
basic.showIcon(IconNames.Scissors)
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
basic.forever(function () {
    i = PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)
    if (i > 3 == i < 20) {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 240)
        basic.pause(5000)
    } else {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 180)
    }
})
