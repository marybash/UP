SELECT days FROM (
SELECT datediff(curdate(), DATE(CREATED_AT)) days, ROW_NUMBER() OVER (ORDER BY CREATED_AT) rn
FROM profit.offer) tmp
WHERE rn = 1