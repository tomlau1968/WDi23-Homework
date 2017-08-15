# MTA Lab


require "pry"

plan_trip = {
  n_line = ["Times Square", "N 34th", "N 28th", "N 23rd", "Union Square", "N 8th"],
  l_line = ["L 8th", "L 6th", "Union Square", "L 3rd", "L 1st"],
  six_line = ["6 Grand Central", "6 33rd", "6 28th", "6 23rd", "Union Square", "6 Astor Place"]
}

# binding.pry

def n_line_trip(n_on_line, n_on_stop, n_off_stop)
  n_on_index = n_line.index n_on_stop
  n_off_index = n_line.index n_off_stop
  n_on_index..n_off_index
  n_line[ n_on_index..n_off_index ]
end

n_line_trip([n_line], "Times Square", "Union Square")
puts n_line_trip

def six_line_trip (six_line, six_on_stop, six_off_stop)
  six_on_index = six_line.index six_on_stop
  six_off_index = six_line.index six_off_stop
  six_on_index..six_off_index
  six_line[ six_on_index..six_off_index ]
  end

six_line_trip([six_line], "Union Square", "6 33rd")
puts six_line_trip.reverse






# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#

# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
#
# # Work out how you would do it on paper first! Then start to explain that process in Ruby.
# # Get the program to work for a single line before trying to tackle multiple lines.
# # Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# # Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# # The key to the lab is finding the index positions of each stop. (hint: index)
# # Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
