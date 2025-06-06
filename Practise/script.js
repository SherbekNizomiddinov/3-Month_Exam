const todos = 
[
    // 1-Userlar
    { userId: 1, title: "Ali", completed: true },
    { userId: 1, title: "Nodir", completed: false },
    { userId: 1, title: "Botir", completed: true },
    { userId: 1, title: "Zafar", completed: false },
    { userId: 1, title: "Sherzod", completed: true },
    { userId: 1, title: "Komil", completed: false },
    { userId: 1, title: "Davron", completed: true },
    { userId: 1, title: "Asad", completed: false },
    { userId: 1, title: "Miron", completed: true },
    { userId: 1, title: "Suhrob", completed: false },
    // 2-Userlar
    { userId: 2, title: "Sardor", completed: true },
    { userId: 2, title: "Shaxzod", completed: false },
    { userId: 2, title: "Javlon", completed: true },
    { userId: 2, title: "Eldor", completed: false },
    { userId: 2, title: "Kamron", completed: true },
    { userId: 2, title: "Umar", completed: false },
    { userId: 2, title: "Bobur", completed: true },
    { userId: 2, title: "Farhod", completed: false },
    { userId: 2, title: "Ilyos", completed: true },
    { userId: 2, title: "Rustam", completed: false },
    // 3-Userlar
    { userId: 3, title: "Jasur", completed: true },
    { userId: 3, title: "Diyor", completed: false },
    { userId: 3, title: "Olim", completed: true },
    { userId: 3, title: "Temur", completed: false },
    { userId: 3, title: "Farrux", completed: true },
    { userId: 3, title: "Aziz", completed: false },
    { userId: 3, title: "Mirzo", completed: true },
    { userId: 3, title: "Shohruh", completed: false },
    { userId: 3, title: "Jahongir", completed: true },
    { userId: 3, title: "Sanjar", completed: false },
    // 4-Userlar
    { userId: 4, title: "Mirzo", completed: true },
    { userId: 4, title: "Behzod", completed: false },
    { userId: 4, title: "Alim", completed: true },
    { userId: 4, title: "Nurbek", completed: false },
    { userId: 4, title: "Islom", completed: true },
    { userId: 4, title: "Shavkat", completed: false },
    { userId: 4, title: "Oybek", completed: true },
    { userId: 4, title: "Qodir", completed: false },
    { userId: 4, title: "Akbar", completed: true },
    { userId: 4, title: "Sodiq", completed: false },
    // 5-Userlar
    { userId: 5, title: "Aziz", completed: true },
    { userId: 5, title: "Bahrom", completed: false },
    { userId: 5, title: "Hasan", completed: true },
    { userId: 5, title: "Husan", completed: false },
    { userId: 5, title: "Jamol", completed: true },
    { userId: 5, title: "Kamol", completed: false },
    { userId: 5, title: "Murad", completed: true },
    { userId: 5, title: "Said", completed: false },
    { userId: 5, title: "Zokir", completed: true },
    { userId: 5, title: "Yusuf", completed: false },
    // 6-Userlar
    { userId: 6, title: "Bobur", completed: true },
    { userId: 6, title: "Doniyor", completed: false },
    { userId: 6, title: "Shokir", completed: true },
    { userId: 6, title: "Qobil", completed: false },
    { userId: 6, title: "Siroj", completed: true },
    { userId: 6, title: "Anvar", completed: false },
    { userId: 6, title: "Tohir", completed: true },
    { userId: 6, title: "Jalol", completed: false },
    { userId: 6, title: "Mansur", completed: true },
    { userId: 6, title: "Naim", completed: false },
    // 7-Userlar
    { userId: 7, title: "Olim", completed: true },
    { userId: 7, title: "Zubayr", completed: false },
    { userId: 7, title: "Bilol", completed: true },
    { userId: 7, title: "Hamid", completed: false },
    { userId: 7, title: "Ravshan", completed: true },
    { userId: 7, title: "Sobir", completed: false },
    { userId: 7, title: "Vohid", completed: true },
    { userId: 7, title: "Qudrat", completed: false },
    { userId: 7, title: "Asil", completed: true },
    { userId: 7, title: "Fozil", completed: false },
    // 8-Userlar
    { userId: 8, title: "Temur", completed: true },
    { userId: 8, title: "Shahzod", completed: false },
    { userId: 8, title: "Ibrohim", completed: true },
    { userId: 8, title: "Yunus", completed: false },
    { userId: 8, title: "Hikmat", completed: true },
    { userId: 8, title: "Abdulla", completed: false },
    { userId: 8, title: "Shohid", completed: true },
    { userId: 8, title: "Mirjalol", completed: false },
    { userId: 8, title: "Sattor", completed: true },
    { userId: 8, title: "Komron", completed: false },
    // 9-Userlar
    { userId: 9, title: "Rustam", completed: true },
    { userId: 9, title: "Ismoil", completed: false },
    { userId: 9, title: "Jafar", completed: true },
    { userId: 9, title: "Bahodir", completed: false },
    { userId: 9, title: "Shukur", completed: true },
    { userId: 9, title: "Nizom", completed: false },
    { userId: 9, title: "Habib", completed: true },
    { userId: 9, title: "Salim", completed: false },
    { userId: 9, title: "Odil", completed: true },
    { userId: 9, title: "Jamshid", completed: false },
    // 10-Userlar
    { userId: 10, title: "Farrux", completed: true },
    { userId: 10, title: "Elyor", completed: false },
    { userId: 10, title: "Hoji", completed: true },
    { userId: 10, title: "Mirshod", completed: false },
    { userId: 10, title: "Ulugbek", completed: true },
    { userId: 10, title: "Sunnat", completed: false },
    { userId: 10, title: "Abbos", completed: true },
    { userId: 10, title: "Mirkomil", completed: false },
    { userId: 10, title: "Xurshid", completed: true },
    { userId: 10, title: "Vali", completed: false }
];

function getUserTodos() 
{
    const userId = parseInt(document.getElementById("userId").value);
    const completedFilter = document.getElementById("completed").value;
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    if (isNaN(userId) || userId < 1 || userId > 10) 
    {
        const p = document.createElement("p");
        p.textContent = "Iltimos, 1 dan 10 gacha bo'lgan ID kiriting.";
        todoList.appendChild(p);
        return;
    }

    let filteredTodos = todos.filter(todo => todo.userId === userId);

    if (completedFilter === "true") 
    {
        filteredTodos = filteredTodos.filter(todo => todo.completed === true);
    } else if (completedFilter === "false") 
    {
        filteredTodos = filteredTodos.filter(todo => todo.completed === false);
    }

    if (filteredTodos.length === 0) 
    {
        const p = document.createElement("p");
        p.textContent = "Bu ID va filtrga mos vazifalar topilmadi.";
        todoList.appendChild(p);
        return;
    }

    filteredTodos.forEach(todo => 
    {
        const p = document.createElement("p");
        p.className = todo.completed ? "true" : "false";
        p.innerHTML = `${todo.title} (User ID: ${todo.userId}) <span class="status">${todo.completed ? "True ✅" : "False ❌"}</span>`;
        todoList.appendChild(p);
    });
}

document.addEventListener("keydown", function (evt) 
{
    if (evt.key === "Enter") 
    {
        getUserTodos();
    }
});