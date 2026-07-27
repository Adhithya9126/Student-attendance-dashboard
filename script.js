// 1. Set today's date
document.getElementById('display-date').textContent = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

// 2. Initialize data array (Loads from storage, defaults to 65 students if empty)
let students = JSON.parse(localStorage.getItem('studentDataOD_v2')) || [
    { roll: "24UAM101", name: "AARTHI S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM102", name: "ABISEK T V", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM103", name: "ABISHEK S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM104", name: "ADHITHYA S P", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM105", name: "AISHWARYA M", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM106", name: "AKSHAYAA A S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM107", name: "ANGELINA A", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM108", name: "ANISH SURIYA J", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM109", name: "ARCHANA V", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM110", name: "BALAMURUGAN S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM111", name: "BHAVATHARINI T M", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM112", name: "DHARSHINI R", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM113", name: "DHARSHINI R", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM114", name: "DHARUNIKA N", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM115", name: "DINESH KUMAR S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM116", name: "EZHILAN K", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM117", name: "GOGUL AANANTH Y", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM118", name: "GOPIKA G", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM119", name: "HARIKRISHNAN S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM120", name: "HARISBALAJI G", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM121", name: "HEMAPRABU P", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM123", name: "KARNIKA V", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM124", name: "KARTHIKEYAN M", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM125", name: "KEERTHANAPRIYA S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM126", name: "KRITHIKA N", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM127", name: "MADHANRAJ D", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM128", name: "MADURAVALLI V", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM129", name: "MANUJANA N", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM130", name: "MEERASOUNDHARYA R", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM131", name: "MITHRAA N", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM132", name: "MOHAMED MYDEEN J", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM133", name: "MOHAMMED MINHAJ A", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM134", name: "NANDHINI S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM135", name: "NITHISH A", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM136", name: "NIVEDA SREE DHANDAPANI", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM137", name: "PRAVEEN P", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM138", name: "RAMYA G", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM139", name: "RANJITH KUMAR K", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM140", name: "RATHISH T", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM141", name: "RITHIKA S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM142", name: "RITHISH K", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM143", name: "ROSHMITA V", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM144", name: "SAIRAM K", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM145", name: "SANDHYA B", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM146", name: "SANJAY K", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM147", name: "SANTHIYA M", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM148", name: "SHAKTHI RITHANYA S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM149", name: "SHALINI R", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM150", name: "SHEIK NATHARSHA A", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM151", name: "SHWETHA S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM152", name: "SIVARAM A M", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM153", name: "SOWMYA M", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM154", name: "SOWMYA S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM155", name: "SREE NIVETHA N", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM156", name: "SRI VATSAN S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM157", name: "SRIHARIPRIYA P", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM158", name: "SRIMATHI K", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM159", name: "SRUTHI R", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM160", name: "VAISHNAVI S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM161", name: "VARUN K J", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM162", name: "VIGNESH K", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM163", name: "VIGNESH RAJ S", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM601", name: "HARI PRIYA J", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM602", name: "SIDDHARTH P", dept: "B.E.CSE(AI&ML)", status: "Not Marked" },
    { roll: "24UAM701", name: "KISHORE M", dept: "B.E.CSE(AI&ML)", status: "Not Marked" }
];

// 3. Save to localStorage and update UI
function updateUI() {
    localStorage.setItem('studentDataOD_v2', JSON.stringify(students));
    renderTable();
    updateStats();
}

// 4. Update stats cards
function updateStats() {
    const total = students.length;
    const present = students.filter(s => s.status === 'Present').length;
    const absent = students.filter(s => s.status === 'Absent').length;
    const od = students.filter(s => s.status === 'OD').length;

    document.getElementById('total-count').textContent = total;
    document.getElementById('present-count').textContent = present;
    document.getElementById('absent-count').textContent = absent;
    document.getElementById('od-count').textContent = od;
}

// 5. Render table
function renderTable() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = ''; 

    students.forEach((student, index) => {
        let statusBadge = '<span class="status-badge badge-none">Not Marked</span>';
        if (student.status === 'Present') statusBadge = '<span class="status-badge badge-present">Present</span>';
        if (student.status === 'Absent') statusBadge = '<span class="status-badge badge-absent">Absent</span>';
        if (student.status === 'OD') statusBadge = '<span class="status-badge badge-od">OD</span>';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${student.roll}</strong></td>
            <td>${student.name}</td>
            <td>${student.dept}</td>
            <td>${statusBadge}</td>
            <td class="actions">
                <button class="btn-present" onclick="markAttendance(${index}, 'Present')">Present</button>
                <button class="btn-absent" onclick="markAttendance(${index}, 'Absent')">Absent</button>
                <button class="btn-od" onclick="markAttendance(${index}, 'OD')">OD</button>
            </td>
            <td>
                <button class="btn-delete" onclick="deleteStudent(${index})">Remove</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// 6. Handle form submission for new student
document.getElementById('add-student-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const roll = document.getElementById('roll-no').value;
    const name = document.getElementById('student-name').value;
    const dept = document.getElementById('department').value;

    students.push({
        roll: roll,
        name: name,
        dept: dept,
        status: 'Not Marked'
    });

    this.reset();
    updateUI();
});

// 7. Mark status
window.markAttendance = function(index, newStatus) {
    students[index].status = newStatus;
    updateUI();
};

// 8. Delete student
window.deleteStudent = function(index) {
    if(confirm("Are you sure you want to remove this student?")) {
        students.splice(index, 1);
        updateUI(); 
    }
};

// 9. Initial load
updateUI();
// Add this at the very bottom of script.js
document.getElementById('reset-btn').addEventListener('click', function() {
    if(confirm("Are you sure you want to reset all attendance? This will change everyone back to 'Not Marked'.")) {
        // Loop through all students and reset their status
        students.forEach(student => {
            student.status = 'Not Marked';
        });
        
        // Save the reset list and update the screen
        updateUI();
    }
});