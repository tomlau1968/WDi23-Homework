# // Warmup - Raindrops
# //
# // Write a program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
# //
# // If the number contains 3 as a factor, output 'Pling'.
# // If the number contains 5 as a factor, output 'Plang'.
# // If the number contains 7 as a factor, output 'Plong'.
# // If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
# // Examples
# //
# // 28 has 7 as a factor.
# // In raindrop-speak, this would be a simple "Plong".
# // 1755 has 3 and 5 as factors.
# // In raindrop-speak, this would be a "PlingPlang".
# // 34 has neither 3, 5 nor 7 as a factor.
# // Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".


require "pry"
def pling num
  str = ""

  str += "Pling" if num % 3 == 0

  str += "Plang" if num % 5 == 0

  str += "Plong" if num % 7 == 0

  str += num.to_s if str.empty?

  str
end


puts pling 3 #calling
puts pling 1755 #calling
puts pling 34 #calling

#start of empty num as str = ""
