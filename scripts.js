
function generateCV() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const certifications = document.getElementById('certifications').value;
    const languages = document.getElementById('languages').value;
    const projects = document.getElementById('projects').value;
    const awards = document.getElementById('awards').value;

    const yearsOfExperience = document.getElementById('years-of-experience').value;
    const teamworkExperience = document.getElementById('teamwork-experience').value;
    const preferredJob = document.getElementById('preferred-job').value;
    const preferredLocation = document.getElementById('preferred-location').value;
    const availability = document.getElementById('availability').value;

    if (!name) {
        alert('Full Name is required');
        return;
    }

    const cvContent = `
        <h1>${name}</h1>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Professional Summary:</strong> ${summary}</p>
        <p><strong>Work Experience:</strong><br>${experience.replace(/\n/g, '<br>')}</p>
        <p><strong>Education:</strong><br>${education.replace(/\n/g, '<br>')}</p>
        <p><strong>Skills:</strong><br>${skills.replace(/\n/g, '<br>')}</p>
        <p><strong>Certifications:</strong><br>${certifications.replace(/\n/g, '<br>')}</p>
        <p><strong>Languages:</strong><br>${languages.replace(/\n/g, '<br>')}</p>
        <p><strong>Projects:</strong><br>${projects.replace(/\n/g, '<br>')}</p>
        <p><strong>Awards:</strong><br>${awards.replace(/\n/g, '<br>')}</p>
        <p><strong>Years of Experience:</strong> ${yearsOfExperience}</p>
        <p><strong>Experience Working with Teams:</strong> ${teamworkExperience}</p>
        <p><strong>Preferred Job Type:</strong> ${preferredJob}</p>
        <p><strong>Preferred Location:</strong> ${preferredLocation}</p>
        <p><strong>Availability:</strong> ${availability}</p>
    `;

    document.getElementById('cv-content').innerHTML = cvContent;
    document.getElementById('cv-preview').style.display = 'block';

    document.getElementById('download-btn').onclick = function () {
        const docDefinition = {
            content: [
                { text: name, style: 'header' },
                { text: `Address: ${address}`, margin: [0, 10] },
                { text: `Phone Number: ${phone}`, margin: [0, 10] },
                { text: `Email: ${email}`, margin: [0, 10] },
                { text: `Professional Summary: ${summary}`, margin: [0, 10] },
                { text: `Work Experience: ${experience}`, margin: [0, 10] },
                { text: `Education: ${education}`, margin: [0, 10] },
                { text: `Skills: ${skills}`, margin: [0, 10] },
                { text: `Certifications: ${certifications}`, margin: [0, 10] },
                { text: `Languages: ${languages}`, margin: [0, 10] },
                { text: `Projects: ${projects}`, margin: [0, 10] },
                { text: `Awards: ${awards}`, margin: [0, 10] },
                { text: `Years of Experience: ${yearsOfExperience}`, margin: [0, 10] },
                { text: `Experience Working with Teams: ${teamworkExperience}`, margin: [0, 10] },
                { text: `Preferred Job Type: ${preferredJob}`, margin: [0, 10] },
                { text: `Preferred Location: ${preferredLocation}`, margin: [0, 10] },
                { text: `Availability: ${availability}`, margin: [0, 10] }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 20, 0, 10]
                }
            }
        };

        pdfMake.createPdf(docDefinition).download('resume.pdf');
    };
}
