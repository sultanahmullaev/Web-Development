# Ввод-вывод, оператор присваивания
a = int(input())
b = int(input())
print(math.sqrt(a ** 2 + b ** 2))

a = int(input())
print("The next number for the number " + str(a) + " is " + str(a + 1))
print("The next number for the number " + str(a) + " is " + str(a - 1))

n = int(input())
k = int(input())
print(int(k / n))

n = int(input())
k = int(input())
print(int(k % n))

v = int(input())
t = int(input())
ans = 0
if v > 0 and v * t <= 109:
    ans = v * t - 1
elif v > 0 and v * t > 109:
    ans = (v * t) % 109
elif v < 0 and v * t >= -109:
    ans = 109 + v * t
elif v < 0 and v * t < -109:
    ans = 109 + ((v * t) % 109)
print(ans)





# Условный оператор
a = int(input())
b = int(input())
print(max(a, b))


a = int(input())
if a % 4 == 0 and (a % 100 != 0 or a % 400 == 0):
    print("YES")
else:
    print("NO")


a = int(input())
b = int(input())
if (a == b) or (a != 1 and b != 1):
    print("YES")
else:
    print("NO")


a = int(input())
if a > 0:
    print("1")
elif a == 0:
    print("0")
else:
    print("-1")


a = int(input())
b = int(input())
if a == b:
    print("0")
elif a > b:
    print("1")
else:
    print("2")
    
    
    
    
    
# Цикл for
a = int(input())
b = int(input())
for i in range(a, b+1):
    if i % 2 == 0:
        print(i, end=' ')


a = int(input())
b = int(input())
c = int(input())
d = int(input())
for i in range(a, b+1):
    if i % d == c:
        print(i, end=' ')


a = int(input())
b = int(input())
for i in range(a, b+1):
    if round(math.sqrt(i))**2 == i:
        print(i, end=' ')


a = int(input())
for i in range(2, a+1):
    if a % i == 0:
        print(i)
        break


a = int(input())
for i in range(1, a+1):
    if a % i == 0:
        print(i, end=' ')


a = int(input())
cnt = 0
for i in range(1, a+1):
    if a % i == 0:
        cnt += 1
print(cnt)


ans = 0
for i in range(100):
    a = int(input())
    ans += a
print(ans)


ans = 0
a = int(input())
for i in range(a):
    a = int(input())
    ans += a
print(ans)


ans = 0
a = int(input())
for i in range(a):
    a = int(input())
    if a == 0:
        ans += 1
print(ans)





# Цикл while
a = int(input())
i = 0
while i <= a:
    i += 1
    if round(math.sqrt(i))**2 == i:
        print(i)


a = int(input())
i = 1
while i <= a:
    i += 1
    if a % i == 0:
        print(i)
        break


a = int(input())
i = 0
while i < a:
    if 2**i < a:
        print(2**i, end=' ')
    else:
        break
    i += 1


a = int(input())
while True:
    if a == 1:
        print("YES")
        break
    if a % 2 == 0:
        a /= 2
    else:
        print("NO")
        break


a = int(input())
i = 0
while i < a:
    if 2**i > a:
        print(i)
        break
    i += 1
  
  
  
  
  
# Массивы
a = int(input())
l = list(input().split())
for i in range(0, a, 2):
    print(l[i], end=' ')


a = int(input())
l = list(input().split())
for i in range(0, a):
    if int(l[i]) % 2 == 0:
        print(l[i], end=' ')


a = int(input())
l = list(input().split())
cnt = 0
for i in range(0, a):
    if int(l[i]) > 0:
        cnt += 1
print(cnt)


a = int(input())
l = list(input().split())
cnt = 0
for i in range(0, a-1):
    if int(l[i+1]) > int(l[i]):
        cnt += 1
print(cnt)


a = int(input())
l = list(input().split())
b = False
for i in range(0, a - 1):
    if (int(l[i]) > 0 and int(l[i + 1]) > 0) or (int(l[i]) < 0 and int(l[i + 1]) < 0):
        print("YES")
        b = True
        break

if b != True:
    print("NO")


a = int(input())
l = list(input().split())
cnt = 0
for i in range(1, a - 2):
    if int(l[i]) > int(l[i-1]) and int(l[i]) > int(l[i+1]):
        cnt += 1
print(cnt)


a = int(input())
l = list(input().split())
for i in range(a-1, -1, -1):
    x = int(l[i])
    print(x, end=' ')
    
    
    
    
    
# Функции
a, b, c, d = map(int, input().split())
arr = [a, b, c, d]
print(min(arr))


def power(a, b):
    return a**b
a, b = map(int, input().split())
print(power(a, b))


def xor(x, y):
    if (x == 1 and y == 1) or (x == 0 and y == 0):
        print(0)
    else:
        print(1)


x, y = input().split()
xor(int(x), int(y))