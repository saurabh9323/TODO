import React from "react";
import Navbar from "./Navbar";
import InsertData from "./InsertData";
import "../index.css";

const Todo = () => {
  return (
    <>
      <Navbar />

      <main className="todo-page">
        <section className="todo-hero">
          <h1>Todo List</h1>
          <p>Organize your tasks, stay focused, and get things done.</p>
        </section>

        <section className="todo-content">
          <InsertData />
        </section>
      </main>

      <footer className="todo-footer">
        <p>© {new Date().getFullYear()} Todo App · Built with React</p>
      </footer>
    </>
  );
};

export default Todo;
