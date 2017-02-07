# def draw_stars(arr):
#     for i in range(len(arr)):
#         stars = ""
#         letter = ""
#         if type(num[1])
#         else:
#             for j in range(arr[i]):
#                 stars += "*"
#                 print stars
#     return
# draw_stars([4, 6, 1, 3, 5, 7, 25])

def draw_stars(arr):
    for i in range(len(arr)):
        stars= ""
        lett= ""
        if type(arr[i]) is str:
            for l in range(0,len(arr[i])):
                lett += arr[i][0]
            print lett
        else:
            for j in range(0,arr[i]):
                stars += "*"
            print stars
    return
draw_stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])
