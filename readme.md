# Define moment object 
  today(moment object) is defined

# Display time blocks
  Today's 24 time blocks
    1. Display today(moment object) at the top part
    2. Displays Time('HH') + saved text(if exists in local storage) in that day. 

# If user clicks Save btn
  Save data in Localstorage(key, value)

    key : today(moment object)'s date('YYYYMMDD') + Hour('HH') of the selected block        
    value : '<input>' element's value

# Local Storage Structure
  key : YYYYMMDDHH
  value : user's input


# Navigate through days
    Iincrease or decrease today's value
      1. display today(moment object) at the top part again.
      2. Displays Time('HH') + saved text(if exists in local storage) in that day again.


# GUI
  If user mouseover or mouseout 
  Toggle Icons/black.png and Icons/white.png
      
      
