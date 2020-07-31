BEGIN;
INSERT INTO Student_Info (student_ID, first_Name, middle_Name, last_Name, email) 
SELECT DISTINCT student_ID, first_Name, middle_Name, last_Name, email FROM students;

INSERT INTO Courses (course_Name, course_Description)
SELECT DISTINCT course_Name, course_Description FROM students;

INSERT INTO Marks(marks, student_ID,course_Name)
SELECT DISTINCT marks, student_ID,course_Name FROM students;

COMMIT;

SELECT * FROM Student_Info;
SELECT * FROM Courses;
SELECT * FROM Marks;