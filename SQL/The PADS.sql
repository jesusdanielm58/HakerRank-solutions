SELECT CONCAT(NAME,"(",LEFT(OCCUPATION,1),")") FROM OCCUPATIONS ORDER BY NAME;
SELECT CONCAT("There are a total of ",COUNT(OCCUPATION)," ",LCASE(OCCUPATION),"s.") FROM OCCUPATIONS GROUP BY OCCUPATION ORDER BY COUNT(OCCUPATION),OCCUPATION;
