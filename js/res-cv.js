  
 
    function showDoc(type) {
      const resume = document.getElementById('resume-viewer');
      const cv = document.getElementById('cv-viewer');
      
      if (type === 'resume') {
        resume.style.display = 'block';
        cv.style.display = 'none';
      } else {
        cv.style.display = 'block';
        resume.style.display = 'none';
      }
    }
