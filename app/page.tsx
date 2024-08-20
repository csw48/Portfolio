"use client";

import { Card, Button } from "@nextui-org/react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-4xl font-bold mb-2">Hi, I’m Daniel</h1>
            <h2 className="text-2xl font-semibold mb-4">
                IT Administrator exploring the world of DevOps.
              </h2>
              <h3 className="text-xl font-medium mb-6">
                Building a strong foundation in system administration and aspiring to innovate in DevOps.
              </h3>
              <div className="flex gap-3 mb-8">
            <Button
              as="a"
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
              className="flex items-center gap-2"
            >
              <GithubIcon size={20} />
              GitHub
            </Button>
            <Button
              as="a"
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
              className="flex items-center gap-2"
            >
              <LinkedinIcon size={20} />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-violet-500 mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Currently, I work as an IT Administrator at PASS-SK, where I manage system administration, hardware, and network operations. 
            In my free time, I work on personal DevOps projects to enhance my skills and knowledge. My goal is to transition into a DevOps Engineer role in the near future.
          </p>
          <Button color="secondary" onClick={scrollToProjects}>
            See My Work
          </Button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/profile_photo.png"
            alt="Daniel Vajda"
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* My Projects Section */}
      <div className="w-full max-w-6xl mb-12" ref={projectsRef}>
        <h2 className="text-3xl font-bold text-violet-500 mb-8">
          My Projects
        </h2>
        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap gap-8">
            <Card 
              className="w-full md:w-1/2 bg-gray-800 text-white shadow-lg shadow-gray-600 transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-gray-400"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold text-violet-500">Contacts</h3>
                <p>
                  A React application for managing contact information of employees at PASS-SK.
                </p>
              </div>
            </Card>

            <Card 
              className="w-full md:w-1/2 bg-gray-800 text-white shadow-lg shadow-gray-600 transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-gray-400"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold text-violet-500">Complaint Manager</h3>
                <p>
                  A React and Django application with PostgreSQL for managing complaints, including search, filtering, and reporting.
                </p>
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap gap-8">
            <Card 
              className="w-full md:w-1/2 bg-gray-800 text-white shadow-lg shadow-gray-600 transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-gray-400"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold text-violet-500">Python Tkinter App</h3>
                <p>
                  A Windows application built with Tkinter and Python, connected to an SQL database for data management and export.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Skills & Technologies Section */}
      <div className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold text-violet-500 mb-8">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-python.png" alt="Python" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-react.png" alt="React" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">React</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-nodejs.png" alt="Node.js" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-nextjs.png" alt="Next.js" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-django.png" alt="Django" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">Django</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-postgresql.png" alt="PostgreSQL" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-javascript.png" alt="JavaScript" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-docker.png" alt="Docker" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">Docker</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-kubernetes.png" alt="Kubernetes" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">Kubernetes</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-jenkins.png" alt="Jenkins" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">Jenkins</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-terraform.png" alt="Terraform" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">Terraform</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-ansible.png" alt="Ansible" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">Ansible</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-grafana.png" alt="Grafana" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">Grafana</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-prometheus.png" alt="Prometheus" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">Prometheus</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-aws.png" alt="AWS" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">AWS</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/icons8-sonar.png" alt="SonarQube" className="w-16 h-16" />
            <p className="mt-2 text-center text-lg font-semibold">SonarQube</p>
          </div>
        </div>
      </div>
    </section>
  );
}