import ThreeDBox from './ThreeDBox';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-white">
      <header className="w-full py-8 flex flex-col items-center bg-white/80 dark:bg-gray-900/80 shadow-md sticky top-0 z-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">VAIBHAV SUTHAR</h1>
        <nav className="flex gap-6 text-lg font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-24">
        {/* About Section */}
        <section id="about" className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-semibold mb-2">About Me</h2>
          <img
            src="/vs001.jpg"
            alt="Vaibhav Suthar"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 shadow mb-4"
          />
          <p className="text-lg max-w-xl">
            I am a self-motivated and dependable professional with exceptional interpersonal acumen, adept at executing directives across organizational levels and cultivating strong collaborative networks. Renowned for my adaptability, consistency, and time discipline, I bring unwavering work ethic, initiative, and a results-focused mindset to every responsibility I undertake.
          </p>
          <div className="flex flex-col items-center gap-1 text-base text-gray-700 dark:text-gray-300">
            <span><b>Email:</b> vaibhavsuthar9259@gmail.com</span>
            <span><b>Phone:</b> +91 9913454016</span>
            <span><b>Location:</b> Ahmedabad, India 382443</span>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-semibold mb-2">Experience</h2>
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
              <h3 className="text-xl font-bold mb-1">Magic Building Solutions | Ahmedabad, Gujarat</h3>
              <span className="text-sm text-gray-500">Executive Assistant to Chief Executive Officer (05/2025 - Current)</span>
              <ul className="list-disc ml-5 mt-2 text-base">
                <li>Worked as Executive Assistant to the CEO at a dynamic startup, efficiently managing schedules, high-level meetings, and strategic communications.</li>
                <li>Played a vital role in project coordination, daily operations, and supporting executive decision-making with precision and agility.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
              <h3 className="text-xl font-bold mb-1">Sheth group of companies | S. G highway, Ahmedabad, GUJARAT, India</h3>
              <span className="text-sm text-gray-500">Senior Sales & Administrative Executive (08/2024 - 05/2025)</span>
              <ul className="list-disc ml-5 mt-2 text-base">
                <li>Expert in real estate sales, client relationship management, and customised CRM systems, with proven backend coordination skills.</li>
                <li>Efficient in lead tracking, sales optimisation, and handling operations in dynamic, fast-paced environments.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
              <h3 className="text-xl font-bold mb-1">Sardar Patel Institute of Public Administration (SPIPA) | Ahmedabad, Gujarat, India</h3>
              <span className="text-sm text-gray-500">PA to IAS Officer / Training Coordinator (09/2020 - 08/2024)</span>
              <ul className="list-disc ml-5 mt-2 text-base">
                <li>As a PA to an IAS officer, managed the director's calendar, coordinated appointments, meetings, events, and handled correspondence, administrative tasks, and travel arrangements.</li>
                <li>Ensured smooth communication and coordination between the director, staff, and stakeholders, optimising schedules and information flow.</li>
                <li>As a Training Coordinator, arranged and oversaw training sessions for Gujarat government officials, including IAS and Deputy Collector roles, ensuring smooth execution.</li>
                <li>Managed participant coordination, scheduling, facilitator coordination, and budget alignment, using MS Office and Gujarati stenography for effective communication.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
              <h3 className="text-xl font-bold mb-1">Energy Machines Pvt.Ltd | Ahmedabad, India</h3>
              <span className="text-sm text-gray-500">Quality Engineer (09/2019 - 09/2020)</span>
              <ul className="list-disc ml-5 mt-2 text-base">
                <li>Conducted thorough quality checks, generated detailed reports, and ensured products met client specifications.</li>
                <li>Interpreted customer requirements and ensured alignment with product standards for customer satisfaction and excellence.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
              <h3 className="text-xl font-bold mb-1">Flosteer Private Limited | Ahmedabad, India</h3>
              <span className="text-sm text-gray-500">Production Engineer (05/2017 - 08/2019)</span>
              <ul className="list-disc ml-5 mt-2 text-base">
                <li>Conducted online inspections, ensured product quality met standards, and generated detailed reports for process improvement.</li>
                <li>Developed production plans, maintained high quality standards, and managed schedules to enhance efficiency and meet deadlines.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-semibold mb-2">Education</h2>
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
              <h3 className="text-xl font-bold mb-1">FingerTips - EdTech Company | Ahmedabad</h3>
              <span className="text-sm text-gray-500">Institutional Course (A-Levels Degree) in Data Science Pro Program & AI (2025)</span>
              <ul className="list-disc ml-5 mt-2 text-base">
                <li>Proficient in the basics of data analytics and science</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
              <h3 className="text-xl font-bold mb-1">Dr. Babasaheb Ambedkar Open University | Ahmedabad</h3>
              <span className="text-sm text-gray-500">Bachelor of Arts in Gujarati literature & Sociology (2024)</span>
              <ul className="list-disc ml-5 mt-2 text-base">
                <li>Completed Bachelor of Arts degree in March 2024 (Grade A)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
              <h3 className="text-xl font-bold mb-1">Stenography Ahmedabad | Ahmedabad</h3>
              <span className="text-sm text-gray-500">Institutional Certificate in Gujarati Stenography (2020)</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
              <h3 className="text-xl font-bold mb-1">Dalia Institute of Diploma Studies | Kheda, GJ</h3>
              <span className="text-sm text-gray-500">Diploma of Higher Education in Mechanical Engineering (2017)</span>
              <ul className="list-disc ml-5 mt-2 text-base">
                <li>Completed Diploma in Mechanical Engineering in 2017 with a CGPA of 6.38</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
              <h3 className="text-xl font-bold mb-1">Shree Muktajivan School | Isanpur, Ahmedabad</h3>
              <span className="text-sm text-gray-500">10th standard (SSC) in Mathematics & Science (2014)</span>
              <ul className="list-disc ml-5 mt-2 text-base">
                <li>Completed 10th standard (SSC) in 2014 with a score of 59%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications & Affiliations Section */}
        <section id="certifications" className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-semibold mb-2">Certifications & Affiliations</h2>
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
              <h3 className="text-xl font-bold mb-1">Affiliations</h3>
              <ul className="list-disc ml-5 mt-2 text-base">
                <li>Affiliated with Pyramid Dhyan Kendra, a meditation group located in Ghodasar, Ahmedabad, for the past 2 years.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
              <h3 className="text-xl font-bold mb-1">Certifications</h3>
              <ul className="list-disc ml-5 mt-2 text-base">
                <li>Completed specialized 15-day Skill and Entrepreneurship Development Training by TCGL for tourism sector stakeholders.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-semibold mb-2">Languages</h2>
          <ul className="flex flex-wrap justify-center gap-4 text-lg">
            <li className="bg-green-100 dark:bg-green-900 px-4 py-2 rounded">Gujarati: First Language</li>
            <li className="bg-green-100 dark:bg-green-900 px-4 py-2 rounded">English: Intermediate</li>
            <li className="bg-green-100 dark:bg-green-900 px-4 py-2 rounded">Hindi: Proficient</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section id="skills" className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-semibold mb-2">Skills</h2>
          <ul className="flex flex-wrap justify-center gap-4 text-lg mb-8">
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Python</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">SQL</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Cursor-AI Code</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">NumPy</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Pandas</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Tableau</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Matplotlib</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Seaborn</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Regression Analysis</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Time Series Analysis</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">MySQL</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Excel</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Word</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">PowerPoint</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Jupyter Notebooks</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Google Apps Script</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Google Calendar</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Project & Event Management</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Email Management</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Proofreading</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Gujarati Stenography</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Team Leadership</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Customer Relationship Management</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Visual Studio Code</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">Digital Marketing</li>
            <li className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded">3D Animation</li>
          </ul>
          {/* 3D Animation Example */}
          <div className="w-full flex justify-center">
            <ThreeDBox />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-semibold mb-2">Contact</h2>
          <p className="text-lg">Feel free to reach out for collaborations or just a friendly hello!</p>
          <div className="flex flex-col items-center gap-1 text-base text-gray-700 dark:text-gray-300">
            <span><b>Email:</b> vaibhavsuthar9259@gmail.com</span>
            <span><b>Phone:</b> +91 9913454016</span>
            <span><b>Location:</b> Ahmedabad, India 382443</span>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 text-center text-gray-500 text-sm mt-12 border-t border-gray-200 dark:border-gray-700">
        &copy; {new Date().getFullYear()} Vaibhav Suthar. All rights reserved.
      </footer>
    </div>
  );
}











