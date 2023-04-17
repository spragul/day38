//users
db.users.insertMany([
    {
        "user_id": "1",
        "name": "Ragul",
        "email": "ragul44@gmail.com",
        "mobile": 10000000001,
    },
    {
        "user_id": "2",
        "name": "gokul",
        "email": "gokulk44@gmail.com",
        "mobile": 65846141366,
    },
    {
        "user_id": "3",
        "name": "palani",
        "email": "palani244@gmail.com",
        "mobile": 58464654358,
    },
    {
        "user_id": "4",
        "name": "honor",
        "email": "honor544@gmail.com",
        "mobile": 645464365143,
    },
    {
        "user_id": "5",
        "name": "axer",
        "email": "axer474@gmail.com",
        "mobile": 546546484645,
    },
    {
        "user_id": "6",
        "name": "maxwel",
        "email": "maxwel4@gmail.com",
        "mobile": 10000540001,
    }
])

//codekata
db.codekata.insertMany([
    {
        "code_id": "1",
        "problems": 20,
        "geekoins": 1000,
    },
    {
        "code_id": "2",
        "problems": 150,
        "geekoins": 7256,
    },
    {
        "code_id": "3",
        "problems": 120,
        "geekoins": 5263,
    },
    {
        "code_id": "4",
        "problems": 69,
        "geekoins": 2364,
    },
    {
        "code_id": "5",
        "problems": 114,
        "geekoins": 5142,
    },
    {
        "code_id": "6",
        "problems": 321,
        "geekoins": 11052,
    }

])

//attendance
db.attendance.insertMany([
    {
        "user_id": "1",
        "status": "pressent",
    },
    {
        "user_id": "2",
        "status": "pressent",
    },
    {
        "user_id": "3",
        "status": "absent",
    },
    {
        "user_id": "4",
        "status": "pressent",
    },
    {
        "user_id": "5",
        "status": "absent",
    },
    {
        "user_id": "6",
        "status": "pressent",
    }
])

//topics
db.topics.insertMany([
    {
        "topic_id": "1",
        "heading": "HTML",
        "topic_date": new Date("2020-10-19"),
    },
    {
        "topic_id": "2",
        "heading": "REACT",
        "topic_date": new Date("2020-11-18"),
    },
    {
        "topic_id": "3",
        "heading": "BOOTSTRAP",
        "topic_date": new Date("2020-10-29"),
    },
    {
        "topic_id": "4",
        "heading": "CSS",
        "topic_date": new Date("2020-11-23"),
    },
    {
        "topic_id": "5",
        "heading": "JAVASCRIPT",
        "topic_date": new Date("2020-10-22"),
    },
    {
        "topic_id": "6",
        "heading": "JAVA",
        "topic_date": new Date("2020-10-18"),
    }
])

//tasks
db.tasks.insertMany([
    {
        "user_id": "1",
        "task_name": "calculator app",
        "date": new Date("2020-10-16"),
        "submittion_date": new Date("17-oct-2020"),
    },
    {
        "user_id": "2",
        "task_name": "motor app",
        "date": new Date("2020-10-17"),
        "submittion_date": new Date("2020-10-19"),
    },
    {
        "user_id": "3",
        "task_name": "map app",
        "date": new Date("2020-10-18"),
        "submittion_date": new Date("2020-11-20"),
    },
    {
        "user_id": "4",
        "task_name": "phone app",
        "date": new Date("2020-10-21"),
        "submittion_date": new Date("2020-10-23"),
    },
    {
        "user_id": "5",
        "task_name": "book app",
        "date": new Date("2020-10-19"),
        "submittion_date": new Date("2020-11-29"),
    }, {
        "user_id": "6",
        "task_name": "qrcode app",
        "date": new Date("2020-10-26"),
        "submittion_date": new Date("2020-10-29"),
    }
])

//company_drives
db.company_drives.insertMany([
    {
        "company_drive_id": "1",
        "company_name": "amazon",
        "date": new Date("2020-10-17"),
        "user_id": "1",
    },
    {
        "company_drive_id": "2",
        "company_name": "redbus",
        "date": new Date("2020-10-21"),
        "user_id": "2",
    },
    {
        "company_drive_id": "3",
        "company_name": "google",
        "date": new Date("2020-10-10"),
        "user_id": "3",
    },
    {
        "company_drive_id": "4",
        "company_name": "oppo",
        "date": new Date("2020-10-22"),
        "user_id": "4",
    },
    {
        "company_drive_id": "5",
        "company_name": "microsoft",
        "date": new Date("2020-10-07"),
        "user_id": "5",
    },
    {
        "company_drive_id": "6",
        "company_name": "micro",
        "date": new Date("2020-10-24"),
        "user_id": "5",
    }

])

//mentors
db.mentors.insertMany([
    {
        "mentor_id": "1",
        "mentee's_count": 20,
    },
    {
        "mentor_id": "2",
        "mentee's_count": 25,
    },
    {
        "mentor_id": "3",
        "mentee's_count": 17,
    },
    {
        "mentor_id": "4",
        "mentee's_count": 12,
    },
    {
        "mentor_id": "5",
        "mentee's_count": 16,
    }
])

