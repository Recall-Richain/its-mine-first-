function calculateSGPA() {
    const credits = document.getElementById('credits').value;
    const subjects = document.querySelectorAll('.subject');
  
    let totalGradePoints = 0;
    let totalCredits = 0;
  
    subjects.forEach(subject => {
      const grade = parseFloat(subject.querySelector('.grade').value);
      const credit = parseFloat(subject.querySelector('.credit').value);
      totalGradePoints += grade * credit;
      totalCredits += credit;
    });
  
    const sgpa = totalGradePoints / totalCredits;
    if (!isNaN(sgpa)) {
      document.getElementById('result').innerText = sgpa.toFixed(2);
    } else {
      document.getElementById('result').innerText = 'Invalid input';
    }
  }
  
  // Function to add subject inputs dynamically
  function addSubject() {
    const subjectsDiv = document.getElementById('subjects');
  
    const subjectDiv = document.createElement('div');
    subjectDiv.classList.add('subject');
  
    const gradeInput = document.createElement('input');
    gradeInput.setAttribute('type', 'number');
    gradeInput.setAttribute('placeholder', 'Enter grade');
    gradeInput.classList.add('grade');
  
    const creditInput = document.createElement('input');
    creditInput.setAttribute('type', 'number');
    creditInput.setAttribute('placeholder', 'Enter credit');
    creditInput.classList.add('credit');
  
    subjectDiv.appendChild(gradeInput);
    subjectDiv.appendChild(creditInput);
  
    subjectsDiv.appendChild(subjectDiv);
  }
  
  // Call addSubject function to initially add subject inputs
  addSubject();
  