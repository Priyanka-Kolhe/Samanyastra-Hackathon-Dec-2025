import { useState } from "react";
import { IconButton } from "@mui/material";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Card,
  Chip,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import { data } from "../data";
import "./portfolio.css";


export default function Portfolio() {
  const theme = createTheme({
    palette: { mode: "light" },
  });

  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
          {data.hero.name}
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => scrollToSection("hero")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("experience")}>Experience</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
        </ul>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* ================= PORTFOLIO CONTENT ================= */}
      <Box className="portfolio-container">

        {/* HERO SECTION */}
        <Box
          id="hero"
          className="hero-section"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 5,
            py: 6,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, md: 4 },
          }}
        >
          {/* LEFT SIDE */}
          <Box
            sx={{
              maxWidth: "600px",
              textAlign: { xs: "center", md: "left" },
              marginLeft: { xs: "0", md: "50px" },
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              {data.hero.name}
            </Typography>

            <Typography variant="h6" sx={{ color: "blue" }}>
              {data.hero.title}
            </Typography>

            <Typography sx={{ mt: 1, fontSize: "18px" }}>
              {data.hero.location}
            </Typography>

            <Typography sx={{ mt: 2, fontSize: "18px", lineHeight: 1.6 }}>
              {data.hero.description}
            </Typography>

            {/* CV BUTTON */}
            <Box sx={{ mt: 3 }}>
              <a href="/cv.pdf" download style={{ textDecoration: "none" }}>
                <button
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#1976d2",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#125aa3")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#1976d2")
                  }
                >
                  Download CV
                </button>
              </a>
            </Box>

            {/* SOCIAL LINKS */}
            <Box
              sx={{
                mt: 3,
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {data.socialLinks.map((link) => (
                <IconButton
                  key={link.icon}
                  component="a"
                  href={link.href}
                  target="_blank"
                  sx={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "50%",
                    transition: "0.3s ease",
                    "& svg": { transition: "0.3s ease" },
                    "&:hover": {
                      backgroundColor: "#1976d2",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {/* SVG ICONS */}
                  {link.icon === "linkedin" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" color="black">
                      <path d="M4.98 3.5C4.98 4.6 4.09 5.5 3 5.5C1.91 5.5 1 4.6 1 3.5C1 2.4 1.91 1.5 3 1.5C4.09 1.5 4.98 2.4 4.98 3.5ZM5 8H1V23H5V8ZM14.5 8C11.46 8 10 9.98 10 9.98V8H6V23H10V14.5C10 12.8 11.29 11.5 13 11.5C14.71 11.5 16 12.8 16 14.5V23H20V14C20 9.48 17.04 8 14.5 8Z" />
                    </svg>
                  )}

                  {link.icon === "github" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" color="black">
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.94.58.11.79-.25.79-.56v-1.98C6.73 20.9 6 19 6 19c-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.6-.3-5.34-1.3-5.34-5.81 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.51.12-3.15 0 0 .98-.32 3.2 1.2a11.2 11.2 0 0 1 2.92-.4c.99 0 1.98.13 2.92.4 2.22-1.52 3.2-1.2 3.2-1.2.64 1.64.24 2.85.12 3.15.74.82 1.2 1.87 1.2 3.15 0 4.52-2.75 5.5-5.37 5.79.42.36.8 1.07.8 2.17v3.22c0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                    </svg>
                  )}

                  {link.icon === "instagram" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" color="black">
                      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" />
                    </svg>
                  )}

                  {/* TWITTER (X) ICON */}
                  {link.icon === "twitter" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" color="black">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.88-2.35 8.43 8.43 0 0 1-2.7 1.03 4.22 4.22 0 0 0-7.3 3.84A12 12 0 0 1 3.15 4.6a4.22 4.22 0 0 0 1.31 5.63 4.18 4.18 0 0 1-1.9-.53v.05a4.23 4.23 0 0 0 3.38 4.13 4.3 4.3 0 0 1-1.89.07 4.23 4.23 0 0 0 3.95 2.94A8.48 8.48 0 0 1 2 19.54a12 12 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.36 8.36 0 0 0 22.46 6z" />
                    </svg>
                  )}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* RIGHT SIDE IMAGE */}
          <Avatar
            src={data.profileImage}
            sx={{
              width: { xs: 220, sm: 260, md: 300 },
              height: { xs: 220, sm: 260, md: 300 },
              boxShadow: "0 4px 20px rgba(0,0,0,0.7)",
              marginLeft: { xs: 0, md: "140px" },
            }}
          />
        </Box>

        {/* ABOUT SECTION */}
        <Box id="about" className="section" sx={{ py: 6, px: { xs: 2, md: 4 } }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            About Me
          </Typography>

          <Box
            sx={{
              maxWidth: "1000px",
              margin: "auto",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              mt: 4,
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1, minWidth: "300px" }}>
              {data.about.paragraphs.map((p, i) => (
                <Typography
                  key={i}
                  sx={{
                    mt: 2,
                    fontSize: "18px",
                    lineHeight: 1.7,
                    textAlign: "left",
                  }}
                >
                  {p}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>

        {/* SKILLS */}
        <Box id="skills" className="section" sx={{ py: 6 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              textAlign: { xs: "center", md: "left" },
              ml: { xs: 0, md: "600px" },
              mb: 4,
            }}
          >
            Skills
          </Typography>

          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {data.languages.map((item) => (
              <Grid item xs={6} sm={4} md={2} key={item.name}>
                <Box
                  sx={{
                    textAlign: "center",
                    width: "150px",
                    height: "150px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                    borderRadius: "12px",
                    background: "#fff",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    padding: 2,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    marginTop: 4,
                    "&:hover": {
                      boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ mt: 1 }}>{item.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* EXPERIENCE */}
        <Box id="experience" className="section" sx={{ py: 6 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Experience
          </Typography>

          <Grid container spacing={3} sx={{ mt: 3, justifyContent: "center" }}>
            {data.experience.map((job, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    p: 3,
                    height: "auto",
                    width: { xs: "100%", md: "900px" },
                    margin: "auto",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.45)",
                      color: "#1976d2",
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {job.role}
                  </Typography>

                  <Typography fontWeight={600}>{job.company}</Typography>

                  <Typography sx={{ color: "gray" }}>{job.period}</Typography>

                  <Typography sx={{ mt: 1 }}>{job.description}</Typography>

                  <Box sx={{ mt: 2 }}>
                    {job.skills.map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        sx={{ mr: 1, mb: 1, color: "blue" }}
                      />
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* PROJECTS */}
        <Box id="projects" className="section" sx={{ py: 6 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Projects
          </Typography>

          <Grid container spacing={3} sx={{ mt: 3 }}>
            {data.projects.map((p, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 2,
                    borderRadius: "12px",
                    height: "auto",
                    width: { xs: "100%", md: "900px" },
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
                      transform: "translateY(-5px)",
                      color: "#1976d2",
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {p.title}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>{p.description}</Typography>

                  <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap" }}>
                    {(p.tech || p.skills).map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        sx={{ mr: 1, mb: 1, color: "blue" }}
                      />
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
