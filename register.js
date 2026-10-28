const profile = {
    name: "Lê Huy Trường",
    position: "Data Science Student",

    about:
        "Sinh viên Data Science với niềm đam mê trong lĩnh vực phân tích dữ liệu, trí tuệ nhân tạo và học máy. Luôn chủ động học hỏi công nghệ mới, thích khám phá dữ liệu và tìm ra những insight có giá trị phục vụ cho việc ra quyết định.",

    statement:
        "Mục tiêu của tôi là trở thành Data Scientist chuyên nghiệp, có khả năng xây dựng các mô hình Machine Learning, xử lý dữ liệu lớn và tạo ra những giải pháp dựa trên dữ liệu để hỗ trợ doanh nghiệp phát triển bền vững.",

    skills: [
        "Python",
        "SQL",
        "Machine Learning",
        "Data Analysis",
        "Power BI",
        "Pandas",
        "NumPy",
        "Data Visualization"
    ]
};

document.getElementById("name").textContent =
    profile.name;

document.getElementById("position").textContent =
    profile.position;

document.getElementById("about").textContent =
    profile.about;

document.getElementById("statement").textContent =
    profile.statement;

const skillsContainer =
    document.getElementById("skills");

profile.skills.forEach(skill => {

    const div = document.createElement("div");

    div.className = "skill-item";

    div.textContent = skill;

    skillsContainer.appendChild(div);

});