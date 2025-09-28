import { useEffect } from "react";
import Header from "./Components/Header.jsx";
import Section from "./Components/Section.jsx";
import Foot from "./Components/Foot.jsx";


const studentName = "Zunairah"; // change this if needed

export default function App() {
  // dynamic title in tab
  useEffect(() => {
    document.title = `Welcome ${studentName} to CodeCraft intranet`;
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Employee Management", href: "#" },
    { label: "JS Sandbox", href: "#" },
  ];

  return (
    <>
      <Header
        brand="CodeCraft"
        welcomeMsg={`Welcome ${studentName} to the CodeCraft Labs Intranet`}
        navItems={navItems}
      />

      <main>
        <Section title="Highlights">
          <h3>Remember to live out our values</h3>
          <ol>
            <li>Relentless Learning and Growth</li>
            <li>Creative Problem Solving</li>
            <li>Curiosity-Driven Exploration</li>
          </ol>

          <h3>Upcoming Events</h3>
          <ul>
            <li><b>Feb 7:</b> Employee Hack-a-ston</li>
            <li><b>Mar 7:</b> Food Bank Volunteering</li>
            <li><b>Apr 4:</b> Company Retreat</li>
          </ul>
        </Section>

        <Section title="Latest Event">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi
            laudantium eos atque sed debitis eum deleniti saepe aut voluptatibus.
          </p>

          <img
            src="https://plus.unsplash.com/premium_photo-1709247069711-068d383b8497"
            style={{ width: "35%" }}
            alt="Kickball outing"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1661429511577-b165fc04718f"
            style={{ width: "35%" }}
            alt="Happy Hour"
          />
        </Section>
      </main>

      <Foot />
    </>
  );
}
