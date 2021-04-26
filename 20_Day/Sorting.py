#!/bin/python3

import sys

n = 7 #int(input().strip())
arr = [3,2,1,0,4,8,9] #list(map(int, input().strip().split(' ')))
# Write Your Code Here
sorted = 0
i = 0
num_swaps = 0

for i in range(n):
    for j in range(n - 1):
        if arr[j] > arr[j + 1]:
            tmp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = tmp
            num_swaps += 1

    if num_swaps == 0:
        break
print("Array is sorted in " + str(num_swaps) + " swaps.")
print("First Element: " + str(arr[0]))
print("Last Element: " + str(arr[len(arr) - 1]))
    

