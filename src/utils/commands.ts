
export const commands: { [key: string]: string } = {
  help: `Available commands:
  about        Who am I?
  projects     View my projects
  social       Display social links
  skills       List my technical skills
  experience   View my work experience
  contact      How to reach me
  clear        Clear terminal
  help         Show this help message`,

  about: `I am a software developer passionate about creating elegant solutions to complex problems.
Currently working on web applications and exploring new technologies.
Type 'skills' to see my technical expertise or 'projects' to view my work.`,

  projects: `My Recent Projects:
1. Terminal Portfolio - Interactive terminal-style portfolio website
2. E-commerce Platform - Full-stack shopping application
3. Task Management System - React-based project management tool
Type 'social' to view my GitHub for more projects.`,

  social: `Connect with me:
• GitHub: github.com/yourusername
• LinkedIn: linkedin.com/in/yourusername
• Twitter: @yourusername`,

  skills: `Technical Skills:
• Frontend: React, TypeScript, TailwindCSS
• Backend: Node.js, Express, PostgreSQL
• Tools: Git, Docker, AWS
• Currently learning: Rust, WebAssembly`,

  experience: `Work Experience:
2023-Present | Senior Frontend Developer
2021-2023    | Full Stack Developer
2019-2021    | Software Engineer`,

  contact: `Get in touch:
• Email: your.email@example.com
• LinkedIn: linkedin.com/in/yourusername
Please reach out for collaboration opportunities!`,

  clear: "CLEAR_TERMINAL"
};
