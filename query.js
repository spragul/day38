//1.Find all the topics and tasks which are thought in the month of October
db.tasks.aggregate([
    {
        $lookup: {
            from: "topics",
            localField: "user_id",
            foreignField: "topic_id",
            as: "topic"
        }
    },
    {
        $project: {
            "topic.heading": 1,
            "topic.topic_date": "$topic.topic_date",
            "task_name": 1,
            "date": "$date",
            "month": {
                $month: "$topic.topic_date",
                $month: "$date",
            },
            "year": {
                $year: "$topic.topic_date",
                $year: "$date",
            },


        }
    },
    {
        $match: {
            "month": 10,
            "year": 2020,
        }
    },
    {
        $project: {
            "task_name": 1,
            "date": 1,
            "topic.heading": 1,
            "topic.topic_date": 1,
            "_id": 0,
        }
    }
])


//2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.aggregate([
    {
        $project: {
            "company_name": "$company_name",
            "date": "$date",
            "user_id": 1,
        },
    },
    {
        $match: {
           "date":{$gt: ISODate("2020-10-15T00:00:00.000Z"),$lt:ISODate("2020-10-30T00:00:00.000Z")}
        }
    },
    {
        $project: {
            "company_name": 1,
            "date": "$date",
            "user_id": 1,
        },
    }


])

//3.Find all the company drives and students who are appeared for the placement.
db.company_drives.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "company_drive_id",
            foreignField: "user_id",
            as: "drive"
        }
    },
    {
        $project: {
            "Name_student": "$drive.name",
            "company_name": 1,
        }
    }
])

//4.Find the number of problems solved by the user in codekata
db.users.aggregate([
    {
        $lookup: {
            from: "codekata",
            localField: "user_id",
            foreignField: "code_id",
            as: "codekatadata"
        }
    }, {
        $project: {
            "name": "$name",
            "problem_solved": "$codekatadata.problems",
            "_id": 0,
        }
    }

])

//5.Find all the mentors with who has the mentee's count more than 15
db.mentors.find({ "mentee's_count": { $gt: 15 } })


//6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.users.aggregate([
    {
        $lookup: {
            from: "attendance",
            localField: "user_id",
            foreignField: "user_id",
            as: "Attendance"
        }
    }, 
    {
        $lookup: {
            from: "tasks",
            localField: "user_id",
            foreignField: "user_id",
            as: "sub"
        }
    },
    {
        $match: {$or:[
          { "Attendance.status": "absent",},
          { "sub.submittion_date": {$not:{$gt: ISODate("2020-10-15T00:00:00.000Z"),$lt:ISODate("2020-10-30T00:00:00.000Z")}}}
        ]
        }
    },
    {
        $project: {
            "Name": "$name",
            "Attendance": "$Attendance.status",
            "task_name": "$sub.task_name",
            "submittion_date": "$sub.submittion_date",
        }
    }
])