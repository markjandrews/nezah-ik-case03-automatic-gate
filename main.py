basic.show_icon(IconNames.SCISSORS)
neZha.set_servo_angel(neZha.ServoTypeList._360, neZha.ServoList.S1, 180)

def on_forever():
    pass
basic.forever(on_forever)
