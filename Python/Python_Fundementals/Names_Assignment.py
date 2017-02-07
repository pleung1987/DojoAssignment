# Part 1:
# students = [
#  {'first_name':  'Michael', 'last_name' : 'Jordan'},
#  {'first_name' : 'John', 'last_name' : 'Rosales'},
#  {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#  {'first_name' : 'KB', 'last_name' : 'Tonel'}
#  ]
#
# def Names1(arr):
#     for i in range(len(arr)):
#         print arr[i]["first_name"]+ " " + arr[i]["last_name"]
# Names1(students)

# Part 2:
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }
def users2(arr):
    for i in arr:
        print i
        for j in range(len(arr[i])):
            print str(j) + " - " + arr[i][j]["first_name"] + " " + arr[i][j]["last_name"] + " - " + str(len(arr[i][j]["first_name"]) + len(arr[i][j]["last_name"]))
users2(users)
