print("Hello, World!")



n = int(input())
if n % 2 == 0 and n in range(2, 5):
    print("Not Weird")
elif n % 2 == 0 and n in range(6, 20):
    print("Weird")
elif n % 2 == 0 and n > 20:
    print("Not Weird")
else:
    print("Weird")



a = int(input())
b = int(input())
print(a + b)
print(a - b)
print(a * b)



a = int(input())
b = int(input())
print(a // b)
print(a / b)



n = int(input())
for i in range(n):
    print(i ** 2)



year = int(input())
if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
    leap = True
else:
    leap = False
print(leap)



n = int(input())
for i in range(1, n + 1):
    print(i, end='')



s = str(input())
ans = [False, False, False, False, False]
for i in s:
    if i.isdigit():
        ans[0] = ans[2] = True
    if i.isalpha():
        ans[0] = ans[1] = True
    if i.islower():
        ans[3] = True
    if i.isupper():
        ans[4] = True

for i in ans:
    print(i)



n = int(input())
arr = map(int, input().split())
arr = sorted(arr)
for i in range(len(arr)-1, -2, -1):
     if arr[i] != arr[i-1]:
         print(arr[i-1])
         break



first = input()
last = input()
print("Hello " + str(first) + " " + str(last) + "! You just delved into python.")