class Person:
	def __init__(self, firstName, lastName, idNumber):
		self.firstName = firstName
		self.lastName = lastName
		self.idNumber = idNumber
	def printPerson(self):
		print("Name:", self.lastName + ",", self.firstName)
		print("ID:", self.idNumber)

class Student(Person):
    #   Class Constructor
    #   
    #   Parameters:
    #   firstName - A string denoting the Person's first name.
    #   lastName - A string denoting the Person's last name.
    #   id - An integer denoting the Person's ID number.
    #   scores - An array of integers denoting the Person's test scores.
    #
    # Write your constructor here
    def __init__(self, firstName, lastName, idNumber, testScores):
        super().__init__(firstName, lastName, idNumber)
        self.testScores = testScores

    def calculate(self):
        total = 0

        for testScore in self.testScores:
            total += testScore

        s = total / len(self.testScores)
        if s < 40:
            return 'T'
        if 40 <= s and s < 55:
            return 'D'
        if 55 <= s and s < 70:
            return 'P'
        if 70 <= s and s < 80:
            return 'A'
        if 80 <= s and s < 90:
            return 'E'
        if 90 <= s and s <= 100:
            return 'O'

line = input().split()