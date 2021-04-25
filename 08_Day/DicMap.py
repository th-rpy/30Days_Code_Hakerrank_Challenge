# Enter your code here. Read input from STDIN. Print output to STDOUT
# Enter your code here. Read input from STDIN. Print output to STDOUT
import sys
data = [line.rstrip() for line in sys.stdin.readlines()]
n = int(data[0])
dic = {}

for d in data[1:n+1]:
    k = d.split(' ')[0]
    v = d.split(' ')[1]
    dic[k] = v

for t in data[n+1:]:
    if t in dic.keys():
        print(t + '=' + dic[t])
    else:
        print('Not found')
