# Enter your code here. Read input from STDIN. Print output to STDOUT
import sys
data = [line.rstrip().split()[0] for line in sys.stdin.readlines()]

def even_odd_indexed(string):
    even_indexed = ''
    odd_indexed = ''
    for i in range(0, len(string)):
        if i%2 == 0:
            even_indexed+=string[i]
        else:
            odd_indexed+=string[i]
    print(even_indexed + ' ' + odd_indexed)


test_cases = data[1:]
for test in test_cases:
    even_odd_indexed(test)



