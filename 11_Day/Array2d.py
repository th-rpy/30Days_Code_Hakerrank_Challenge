#!/bin/python3

import math
import os
import random
import re
import sys


if __name__ == '__main__':
    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))

    result = []

    for r in range(0, 1 + len(arr[0])//2):
        for c in range(0, 1 + len(arr[0])//2):
            L = arr[r][c:c+3]
            W = arr[r+1][c+1]
            C = arr[r+2][c:c+3]
            result.append(sum(C) + sum(L) + W)
    print(max(result))
