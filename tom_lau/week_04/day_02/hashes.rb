#Array and Hash access

# How would you return the string "Erik"?
a = ["Anil", "Erik", "Jonathan"]
p a[1]
#
# # How would you add your name to the array?
a.push ["Tom"]
p a
#
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
#
# How would you return the string "One"?
p h[1]
#
# How would you return the string "Two"?
p h[:two]

# How would you return the number 2?
p h["two"]

# How would you add {3 => "Three"} to the hash?
p h[3] = "Three"

# How would you add {:four => 4} to the hash?
h[:four] = 4
p h
#
#
is = {true => "It's true!", false => "It's false"}
# What is the return value of is[2 + 2 == 4]?
"It's true!"

# What is the return value of is["Erik" == "Jonathan"]?
"It's false"

# What is the return value of is[9 > 10]?
"It's false"

# What is the return value of is[0]?
nil

# What is the return value of is["Erik"]?
nil


users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
p users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push 7
p users
# How would you add yourself to the users hash?
users["Joel"]= { :twitter  => "edward", favorite_numbers => }
# How would you return the array of Erik's favorite numbers?
users

# How would you return the smallest of Erik's favorite numbers?
# How would you return an array of Anil's favorite numbers that are also even?
# How would you return an array of the favorite numbers common to all users?
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
