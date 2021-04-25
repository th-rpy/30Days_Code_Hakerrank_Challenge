#!/bin/python3

import math
import os
import random
import re
import sys


if __name__ == '__main__':
    n = int(input())
    for i in range(1, 11):
        result = i * n
        print('{0} x {1} = {2}'.format(n, i, result))
