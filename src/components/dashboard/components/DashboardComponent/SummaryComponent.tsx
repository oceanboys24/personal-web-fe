"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefcaseIcon, CodeIcon, FolderIcon } from "lucide-react";

export default function ExperienceCard() {
  // Sample data - replace with your actual data
  const experience = {
    years: 5,
    companies: ["Tech Solutions Inc.", "Digital Innovations", "Freelance"],
  };

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
  ];

  const projects = [
    {
      name: "E-commerce Platform",
      description: "Full-stack online store with payment integration",
    },
    {
      name: "Portfolio Website",
      description: "Responsive personal portfolio with animations",
    },
    {
      name: "Task Management App",
      description: "Collaborative project management tool",
    },
    {
      name: "Social Media Dashboard",
      description: "Analytics dashboard with data visualization",
    },
  ];

  return (
    <Card className="w-full h-full  shadow-md ">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-center font-medium mb-[-20px]">
          Professional Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid grid-cols-3 w-full mb-4">
            <TabsTrigger value="experience" className="flex items-center gap-1">
              <BriefcaseIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="stack" className="flex items-center gap-1">
              <CodeIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Stack</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-1">
              <FolderIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="mt-0">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">Work Experience</h3>
                <Badge variant="outline" className="font-bold">
                  {experience.years} Years
                </Badge>
              </div>
              <ul className="space-y-1 text-sm">
                {experience.companies.map((company, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    {company}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="stack" className="mt-0">
            <div className="space-y-3">
              <h3 className="text-base font-medium">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="mt-0">
            <div className="space-y-3">
              <h3 className="text-base font-medium">Projects</h3>
              <div className="max-h-[100px] overflow-y-auto pr-2 custom-scrollbar">
                <ul className="space-y-2 text-sm">
                  {projects.map((project, index) => (
                    <li
                      key={index}
                      className="border-l-2 border-primary pl-3 py-1"
                    >
                      <div className="font-medium">{project.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {project.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
