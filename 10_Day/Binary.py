#!/bin/python3

import math
import os
import random
import re
import sys


if __name__ == '__main__':
    n = int(input())
    binary = []
    while n != 0:
        binary.insert(0, n % 2)
        n = n//2

    # intitialize count
    count = 0 
    # initialize max
    result = 0 
    for i in range(0, len(binary)):
        # Reset count when 0 is found
        if (binary[i] == 0):
            count = 0
        # If 1 is found, increment count
        # and update result if count
        # becomes more.
        else:
            # increase count
            count += 1
            result = max(result, count)

    print(result)
