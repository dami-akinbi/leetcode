# TWO SUM

def twoSum(array, target):
    indexes = []
    for i in range(0, len(array), 1):
        for j in range(i + 1, len(array), 1):
            if (array[i] + array[j] == target):
                indexes.append(i)
                indexes.append(j)
    return indexes


result = twoSum([2, 4, 10, 11], 15)
print(result)
