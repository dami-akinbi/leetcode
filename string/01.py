# EASY
# REMOVE VOWELS FROM A STRING

def removeVowels(word):
    word = word.lower()
    removed = ''
    for char in range(len(word)):
        choice = word[char]
        if (choice != 'a' and choice != 'e' and choice != 'i' and choice != 'o' and choice != 'u'):
            removed += choice
    return removed


result = removeVowels('Aeroplane')
print(result)
