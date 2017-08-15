# ###1. Create an array of the days of the week
#
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday
# ###2. My calendar says the first day is Sunday...
#

#

# ###4. Remove either the weekdays or the weekends Your choice...
#
# ###5. Sort the remaining days alphabetically
require'pry'

def days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  # Remove Sunday from the last postion and move it to the first position. Use array methods.
  # ###3. Create a new array of the days of the week:
  moving_day = days_of_the_week.pop
  days_of_the_week.unshift moving_day

  days_of_the_week.unshift(days_of_the_week.pop) #in 1 line

  days_of_the_week.rotate!-1 #even better


  # The first inner array should be the weekdays
  # The second inner array should be the weekend days
  weekdays = [
    days_of_the_week[1..5],
[

]



end
