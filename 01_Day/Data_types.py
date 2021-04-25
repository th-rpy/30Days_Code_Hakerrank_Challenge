i = 4
d = 4.0
s = 'HackerRank '
# Declare second integer, double, and String variables.
i_2 = None
d_2 = None
s_2 = None
# Read and save an integer, double, and String to your variables.
i_2 = int(input()) #int() to convert the input()'s output to a int (from string)
d_2 = float(input()) #int() to convert the input()'s output to a float (from string)
s_2 = input() #may not use str() car the input()'s output is a string.
# Print the sum of both integer variables on a new line.
int_sum = i + i_2
print(int_sum)
# Print the sum of the double variables on a new line.
float_sum = d + d_2
print(float_sum)
# Concatenate and print the String variables on a new line
# The 's' variable above should be printed first.
string_concat = s + s_2 #use '+' for concatenate two strings. 
print(string_concat)