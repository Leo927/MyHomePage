BEGIN;
UPDATE students SET email="alabba200@cs.uregina.ca" 
WHERE student_ID=200266200;

UPDATE students SET middle_Name = "" 
WHERE student_ID = 200266210;

UPDATE students SET last_Name = "Xu" 
WHERE student_ID = 200266210;

UPDATE students 
SET course_Description = "Web and Database Programming" 
WHERE course_Name = "CS215";

DELETE FROM students 
WHERE student_ID=200266209 AND course_Name = "CS000";
SELECT * FROM students;

COMMIT;