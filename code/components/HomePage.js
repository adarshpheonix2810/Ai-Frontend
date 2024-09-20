import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HomePage() {
  const [subject, setSubject] = useState('');
  const [language, setLanguage] = useState('English');

  const handleCreateCourse = () => {
    alert(`Creating course: ${subject} in ${language}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-purple-600"
        >
          LearningStudioAI
        </motion.div>
        <nav>
          <Link to="/login" className="btn btn-ghost mr-4">Log in</Link>
          <Link to="/signup" className="btn btn-primary">Sign up</Link>
        </nav>
      </header>

      <main className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-4"
        >
          The next generation of elearning
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Introducing <span className="text-purple-600">LearningStudioAI</span>, the<br />
          next-gen online course creation tool
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="flex justify-between items-center mb-4">
            <label htmlFor="subject" className="text-lg">Enter the subject:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g.: Communication"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
          />
          <button
            onClick={handleCreateCourse}
            className="btn btn-primary w-full mb-4"
          >
            Create course
          </button>
          <p className="text-gray-600 mb-4">or</p>
          <button className="btn btn-link w-full">Create with options</button>
        </motion.div>
      </main>
    </div>
  );
}

export default HomePage;