--
-- Lists.hs
--
-- (c) 2012-2021 Andres Loeh, Well-Typed LLP

{-# OPTIONS_GHC -Wall #-}
-- (the above line enables more compiler warnings; useful for beginners)
module Lists where

--------------------------------------------------------------------------
-- Introduction:
--
-- In this module, the goal is to write some basic functions on lists.
-- Most of these functions are actually available either in the Prelude
-- or from the standard libraries. However, the goal here is to
-- reimplement them without using the already defined versions.
--
-- This module is carefully structured so that it already compiles. You
-- can load it into GHCi right now! However, many functions in this module
-- are not actually implemented, but rather trigger a run-time error once
-- executed. Your task is it to replace all these uses of error by proper
-- definitions.
--
-- In the beginning, we import a number of modules. We hide some functions
-- from the Prelude, so that they won't conflict with the functions of the
-- same name we are going to define in this module.

import Prelude hiding (length, null, sum, drop)

-- The general structure for defining functions on lists is to follow
-- the structure of the list datatype. The list datatype has two
-- constructors of the following types:
--
--   []  :: [a]
--   (:) :: a -> [a] -> [a]
--
-- They're pronounced 'nil' and 'cons', respectively.
--
-- Following the structure of the datatype means:
--
--   * use one case per constructor (thus two cases),
--   * use pattern matching on the input,
--   * use recursion in the function wherever the datatype itself
--     is recursive (thus, use recursion on the tail of the list in
--     the cons-case).
--
-- The above is what we call the "standard design principle" for
-- functions.
--
-- From these guidelines, we obtain the following template for functions
-- on lists:
--
--   listFun :: [a] -> ...
--   listFun []       = ...
--   listFun (x : xs) = ... listFun xs ...
--
-- Try to use this template for all the following definitions. Sometimes,
-- there are shorter or more elegant solutions possible by combining and
-- reusing other functions. Nevertheless, this basic template is a good
-- strategy that you should always keep in mind.

-- Task Lists-1:
--
-- The function 'length' should determine the length of a list.
-- (Try to reimplement the function we've already seen without looking
-- at it ...)
--
-- Always try calling the functions in GHCi once you're done defining
-- them. E.g., see if the following expressions work as expected:
--
-- length []
-- length [1,2,3,4,5]
-- length [True, False]
-- length "foo"         -- strings are lists of characters in Haskell

length :: [a] -> Int
-- length = error "TODO: implement length"
length [] = 0
length ( dummy : restoflist) = (length restoflist) + 1

-- Task Lists-2:
--
-- The function 'null' should check if a list is empty. Define this
-- directly via pattern matching. Why is this better than going via
-- the length, or the equality function?

null :: [a] -> Bool
-- null = error "TODO: implement null"
null [] = True 
null (_:_) = False 

-- it is better to check null instead of length as calculating the length requires O(n) Time operation of traversing throughout the list.


-- Task Lists-3:
--
-- The function 'sum' should sum all the entries in a list of integers.

sum :: [Int] -> Int
-- sum = error "TODO: implement sum"
sum [] = 0
sum (accumulator:current) = accumulator + (sum current)


-- Task Lists-4:
--
-- The function 'evens' should go through a list of integers and
-- produce a new list that only contains the even elements of the first
-- list.
--
-- Stick to the standard design principle for list functions.
--
-- You can use "if ... then ... else ..." to perform the test. There
-- already is a function
--
--   even :: Int -> Bool
--
-- available that performs the test.

evens :: [Int] -> [Int]
-- evens = error "TODO: implement evens"
evens [] = []
evens (first : rest) = if even first then first : (evens rest) else (evens rest)

-- Task Lists-5:
--
-- The function 'sumEvenSquares' should go through a list of integers,
-- keep only the even ones, square each of them, and compute the sum
-- of these.
--
-- Example:
--
--   sumEvenSquares [1,2,3,4] = 20
--
-- because (2 * 2) + (4 * 4) = 20.
--
-- Again, try to do this all following the standard principle, and in
-- one go. We will see later how we can achieve the same by combining
-- standard functions.

sumEvenSquares :: [Int] -> Int
-- sumEvenSquares = error "TODO: implement sumEvenSquares"
sumEvenSquares [] = 0
sumEvenSquares (first : rest) = if even first then (first * first) + (sumEvenSquares rest) else (sumEvenSquares rest)


-- Task Lists-6:
--
-- The function 'allEven' should check whether all numbers in the
-- given list are even.
--
-- You can use the operator (&&) which implements logical "and".

allEven :: [Int] -> Bool
-- allEven = error "TODO: implement allEven"
allEven [] = True 
allEven (x:xs) = even x && allEven xs

-- Task Lists-7 (optional; slightly more difficult):
--
-- The function 'drop' should discard the first few elements of a
-- list. Define this function once again by pattern matching on the
-- input list.

drop :: Int -> [a] -> [a]
-- drop = error "TODO: implement drop"
drop x [] = []
drop 0 (x:xs) = (x:xs)
drop i (x:xs) = drop (i-1) (xs)


-- Task Lists-8 (optional; slightly more difficult):
--
-- The function 'isAscending' checks if a list of integers is
-- increasing.

isAscending :: [Int] -> Bool
-- isAscending = error "TODO: implement isAscending"
isAscending [] = True 
isAscending [single_item_alone] = True 
isAscending (current_item : x : xs) = current_item <= x && isAscending(x : xs)