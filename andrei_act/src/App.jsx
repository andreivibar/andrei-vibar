import Profile from "./components/profile"

function App() {
  return (
    <Profile 
    name = "Andrei S. Vibar"
    bio = "I'm a web developer who builds clean, functional, and user-friendly websites."
    email = "andreivibar07@gmail.com"
    phone = "09107949519"
    address = "East Washington Drive, Legazpi City"
    skills={["C++", "MySQL", "PHP", "Python", "Javascript"]}
      experience={[
        { title: "Web Developer", company: "Misqnasiya Corporation", duration: "August 2025 - Present", description: "Manage the website of the company." },
        { title: "Technician", company: "Sherre Company", duration: "August 2015 - 2019", description: "Manage the system of the company." }
      ]}
  />
  )
}

export default App
