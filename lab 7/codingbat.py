def sleep_in(weekday, vacation):
    if weekday == False or vacation:
        return True
    else:
        return False



def monkey_trouble(a_smile, b_smile):
    if a_smile and b_smile:
        return True
    if a_smile == False and b_smile == False:
        return True
    return False



def sum_double(a, b):
    sum = a + b
    if a == b:
        sum *= 2
    return sum



def diff21(n):
    if n <= 21:
        return 21 - n
    else:
        return 2 * (n - 21)



def parrot_trouble(talking, hour):
    return (talking and (hour < 7 or hour > 20))



def makes10(a, b):
    return (a == 10 or b == 10 or a + b == 10)



def near_hundred(n):
    return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))



def pos_neg(a, b, negative):
    if negative:
        return (a < 0 and b < 0)
    else:
        return ((a < 0 and b > 0) or (a > 0 and b < 0))



def not_string(str):
    if len(str) >= 3 and str[:3] == "not":
        return str
    return "not " + str



def missing_char(str, n):
    front = str[:n]
    back = str[n+1:]
    return front + back


def front_back(str):
    if len(str) <= 1:
        return str
    mid = str[1:len(str) - 1]
    return str[len(str) - 1] + mid + str[0]



def front3(str):
    front_end = 3
    if len(str) < front_end:
        front_end = len(str)
    front = str[:front_end]
    return front + front + front



def string_times(str, n):
    result = ""
    for i in range(n):
        result = result + str
    return result



def front_times(str, n):
    front_len = 3
    if front_len > len(str):
        front_len = len(str)
    front = str[:front_len]
    result = ""
    for i in range(n):
        result = result + front
    return result



def string_bits(str):
    result = ""
    for i in range(len(str)):
        if i % 2 == 0:
            result = result + str[i]
    return result



def string_splosion(str):
    result = ""
    for i in range(len(str)):
        result = result + str[:i+1]
    return result



def last2(str):
    if len(str) < 2:
        return 0

    last2 = str[len(str) - 2:]
    count = 0

    for i in range(len(str) - 2):
        sub = str[i:i + 2]
        if sub == last2:
            count = count + 1

    return count



def array_count9(nums):
    count = 0
    for num in nums:
        if num == 9:
            count = count + 1
    return count


def array_front9(nums):
    end = len(nums)
    if end > 4:
        end = 4

    for i in range(end):
        if nums[i] == 9:
            return True
    return False



def array123(nums):
    for i in range(len(nums)-2):
        if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
            return True
    return False



def string_match(a, b):
    shorter = min(len(a), len(b))
    count = 0

    for i in range(shorter-1):
        a_sub = a[i:i+2]
        b_sub = b[i:i+2]
        if a_sub == b_sub:
            count = count + 1
    return count



def hello_name(name):
    return 'Hello ' + name + '!'



def make_abba(a, b):
    return a + b + b + a



def make_tags(tag, word):
    return "<" + tag + ">" + word + "</" + tag + ">"



def make_out_word(out, word):
    return out[0:2] + word + out[2:4]



def extra_end(str):
    return str[len(str)-2:] * 3



def first_two(str):
    return str[:2]



def first_half(str):
    return str[:len(str)/2]



def without_end(str):
    return str[1:len(str)-1]



def combo_string(a, b):
  if len(a) > len(b):
    return b + a + b
  return a + b + a



def non_start(a, b):
    return a[1:] + b[1:]



def left2(str):
    return str[2:] + str[0:2]



def first_last6(nums):
    if nums[0] == 6 or nums[len(nums)-1] == 6:
        return True
    return False



def same_first_last(nums):
    if len(nums) >= 1 and nums[0] == nums[len(nums)-1]:
        return True
    return False



def make_pi():
    return [3, 1, 4]



def common_end(a, b):
    if a[0] == b[0] or a[len(a)-1] == b[len(b)-1]:
        return True
    return False



def sum3(nums):
    return nums[0] + nums[1] + nums[2]



def rotate_left3(nums):
    return nums[1:] + nums[0:1]



def reverse3(nums):
    return nums[::-1]



def max_end3(nums):
    if nums[0] > nums[2]:
        x = nums[0]
    else:
        x = nums[2]
    for i in range(0, 3):
        nums[i] = x
    return nums



def sum2(nums):
    if len(nums) > 1:
        return nums[0] + nums[1]
    elif len(nums) == 1:
        return nums[0]
    else: return 0



def middle_way(a, b):
    return [a[1], b[1]]



def make_ends(nums):
    if len(nums) > 1:
        return [nums[0], nums[-1]]
    else: return nums * 2



def has23(nums):
    if nums[0] in range(2, 4) or nums[1] in range(2, 4):
        return True
    return False



def cigar_party(cigars, is_weekend):
    if cigars in range(40, 61) and is_weekend == False:
        return True
    elif cigars >= 40 and is_weekend == True:
        return True
    else: return False



def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0
    elif you >= 8 or date >= 8:
        return 2
    else: return 1



def squirrel_play(temp, is_summer):
    if temp in range(60, 91) and is_summer == False:
        return True
    elif temp in range(60, 101) and is_summer == True:
        return True
    else: return False



def caught_speeding(speed, is_birthday):
    if speed <= 60 and is_birthday == False:
        return 0
    if speed in range(61, 81) and is_birthday == False:
        return 1
    if speed > 80 and is_birthday == False:
        return 2
    if speed <= 65 and is_birthday == True:
        return 0
    if speed in range(61, 86) and is_birthday == True:
        return 1
    if speed > 85 and is_birthday == True:
        return 2



def sorta_sum(a, b):
    if a + b in range(10, 20):
        return 20
    return a + b



def alarm_clock(day, vacation):
    if day in range(1, 6) and vacation == False:
        return "7:00"
    if (day in [0, 6] and vacation == False) or (day in range(1, 6) and vacation == True):
        return "10:00"
    return 'off'



def love6(a, b):
    if a == 6 or b == 6 or (a + b) == 6 or abs(a - b) == 6:
        return True
    return False



def in1to10(n, outside_mode):
    if (n in range(1, 11) and outside_mode == False) or (n not in range(2, 10) and outside_mode == True):
        return True
    return False



def near_ten(num):
    if num % 10 <= 2 or num % 10 >= 8 :
        return True
    return False



def make_bricks(small, big, goal):
    if round(goal / 5) < big:
        x = round(goal / 5)
    else:
        x = big

    if small >= goal - (x * 5):
        return True

    return False



def lone_sum(a, b, c):
    if a == b == c:
        return 0
    elif a == b:
        return c
    elif a == c:
        return b
    elif b == c:
        return a
    return a + b + c



def lucky_sum(a, b, c):
    if a == b == c == 13 or a == 13:
        return 0
    elif b == 13:
        return a
    elif c == 13:
        return a + b
    return a + b + c



def no_teen_sum(a, b, c):
    return fix_teen(a) + fix_teen(b) + fix_teen(c)

def fix_teen(n):
    if n in range(13, 15) or n in range(17, 20):
        return 0
    elif n == 15:
        return 15
    elif n == 16:
        return 16
    else:
        return n



def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)

def round10(num):
    if num % 10 >= 5:
        return num + (10 - (num % 10))
    else:
        return num - (num % 10)



def close_far(a, b, c):
    x = abs(a - b)
    y = abs(a - c)
    z = abs(b - c)
    if (x <= 1 and z > 1 and y > 1) or (y <= 1 and x > 1 and z > 1) or (z <= 1 and x > 1 and y > 1):
        return True
    return False


def make_chocolate(small, big, goal):
    if big > 0 and big * 5 <= goal:
        goal -= big * 5
    elif big > 0 and big * 5 > goal:
        goal = goal % 5

    if goal <= small:
        return goal
    return -1



def count_hi(str):
    return str.count('hi')



def cat_dog(str):
    if str.count("cat") == str.count("dog"):
        return True
    return False



def count_code(str):
    cnt = 0
    for i in range(0, len(str)-3):
        if str[i] == 'c' and str[i+1] == 'o' and str[i+3] == 'e':
            cnt += 1
    return cnt



def end_other(a, b):
    a = a.lower()
    b = b.lower()
    if len(a) < len (b):
        c = a
        a = b
        b = c
    c = a[len(a)-len(b):]
    if c == b:
        return True
    return False



def xyz_there(str):
    for i in range(0, len(str)-2):
        if i == 0:
            if str[i] == 'x' and str[i+1] == 'y' and str[i+2] == 'z':
                return True
        else:
            if str[i] == 'x' and str[i+1] == 'y' and str[i+2] == 'z' and str[i-1] != '.':
                return True
    return False



def count_evens(nums):
    cnt = 0
    for i in nums:
        if i % 2 == 0: cnt += 1
    return cnt



def big_diff(nums):
    return max(nums) - min(nums)



def centered_average(nums):
    sum = 0
    for i in nums:
        sum += i
    sum = sum - min(nums) - max(nums)
    return int(round(sum / (len(nums) - 2)))



def sum13(nums):
    sum = 0
    for i in range(0, len(nums)):
        sum += nums[i]
        if nums[i] == 13 and i+1 < len(nums) and nums[i+1] != 13:
            sum = sum - nums[i] - nums[i+1]
        elif nums[i] == 13:
            sum = sum - nums[i]
    return sum



def sum67(nums):
    sum = 0
    is_six = False
    for i in nums:
        if i == 6: is_six = True
        if is_six != True:
            sum += i
        if i == 7: is_six = False
    return sum



def has22(nums):
    for i in range(0, len(nums) - 1):
        if nums[i] == 2 and nums[i+1] == 2:
            return True
    return False