SELECT 
CASE 
    WHEN (A+B<=C || A+C<=B) || B+C<=A THEN "Not A Triangle"
    WHEN A=B && B=C THEN "Equilateral"
    WHEN (A=B && A!=C)|| (A=C && A!=B)||(B=C && B!=A) THEN "Isosceles"
    WHEN (A!=B && A!=C) && B!=C THEN "Scalene"
END from triangles;


