"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FolderKanban, MoreVertical, Plus, RefreshCw, Check, ChevronRight, ChevronDown } from "lucide-react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface Project {
  id: string;
  name: string;
  progress: number;
  timeSpent: string;
  tasks: Task[];
  expanded?: boolean;
}

interface ViewSettings {
  showTime: boolean;
  showPercents: boolean;
  showPriority: boolean;
  showPlanProgress: boolean;
}

const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    progress: 65,
    timeSpent: "12 hr 30 min",
    tasks: [
      { id: "1-1", title: "Create wireframes", completed: true },
      { id: "1-2", title: "Design mockups", completed: true },
      { id: "1-3", title: "Frontend implementation", completed: false },
      { id: "1-4", title: "Testing & QA", completed: false },
    ],
  },
  {
    id: "2", 
    name: "Mobile App Development",
    progress: 45,
    timeSpent: "8 hr 15 min",
    tasks: [
      { id: "2-1", title: "Setup React Native", completed: true },
      { id: "2-2", title: "Authentication flow", completed: false },
      { id: "2-3", title: "Core features", completed: false },
    ],
  },
  {
    id: "3",
    name: "Database Migration", 
    progress: 89,
    timeSpent: "4 hr 45 min",
    tasks: [
      { id: "3-1", title: "Backup existing data", completed: true },
      { id: "3-2", title: "Schema updates", completed: true },
      { id: "3-3", title: "Data validation", completed: false },
    ],
  },
  {
    id: "4",
    name: "Marketing Campaign",
    progress: 23,
    timeSpent: "2 hr 10 min", 
    tasks: [
      { id: "4-1", title: "Content strategy", completed: false },
      { id: "4-2", title: "Social media assets", completed: false },
      { id: "4-3", title: "Launch plan", completed: false },
    ],
  },
];

export default function ProjectsTasksPanel() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [viewSettings, setViewSettings] = useState<ViewSettings>({
    showTime: true,
    showPercents: true,
    showPriority: false,
    showPlanProgress: false,
  });
  const [renameDialog, setRenameDialog] = useState<{ open: boolean; projectId: string | null }>({
    open: false,
    projectId: null,
  });
  const [renameName, setRenameName] = useState("");

  const loadProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/projects");
      if (!response.ok) throw new Error("Failed to load projects");
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      console.log("API not available, using mock data");
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setProjects(MOCK_PROJECTS);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const toggleProject = useCallback((projectId: string) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === projectId 
          ? { ...project, expanded: !project.expanded }
          : project
      )
    );
  }, []);

  const toggleTask = useCallback(async (projectId: string, taskId: string) => {
    const project = projects.find(p => p.id === projectId);
    const task = project?.tasks.find(t => t.id === taskId);
    if (!task) return;

    const newCompleted = !task.completed;

    // Optimistic update
    setProjects(prev => 
      prev.map(p => {
        if (p.id !== projectId) return p;
        
        const updatedTasks = p.tasks.map(t => 
          t.id === taskId ? { ...t, completed: newCompleted } : t
        );
        
        const completedCount = updatedTasks.filter(t => t.completed).length;
        const newProgress = Math.round((completedCount / updatedTasks.length) * 100);
        
        return {
          ...p,
          tasks: updatedTasks,
          progress: newProgress,
        };
      })
    );

    toast.success(newCompleted ? "Task marked complete" : "Task reopened");

    // Try to sync with server
    try {
      const response = await fetch(`/api/projects/${projectId}/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: newCompleted }),
      });
      
      if (!response.ok) throw new Error("Failed to update task");
    } catch (err) {
      // Revert on error
      setProjects(prev => 
        prev.map(p => {
          if (p.id !== projectId) return p;
          
          const updatedTasks = p.tasks.map(t => 
            t.id === taskId ? { ...t, completed: !newCompleted } : t
          );
          
          const completedCount = updatedTasks.filter(t => t.completed).length;
          const originalProgress = Math.round((completedCount / updatedTasks.length) * 100);
          
          return {
            ...p,
            tasks: updatedTasks,
            progress: originalProgress,
          };
        })
      );
      
      toast.error("Failed to update task. Please try again.");
    }
  }, [projects]);

  const hideWidget = useCallback(() => {
    setHidden(true);
    toast.success("Widget hidden");
  }, []);

  const toggleViewSetting = useCallback((setting: keyof ViewSettings) => {
    setViewSettings(prev => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  }, []);

  const openRenameDialog = useCallback((projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setRenameName(project.name);
      setRenameDialog({ open: true, projectId });
    }
  }, [projects]);

  const handleRename = useCallback(async () => {
    if (!renameDialog.projectId || !renameName.trim()) return;

    const oldName = projects.find(p => p.id === renameDialog.projectId)?.name;

    // Optimistic update
    setProjects(prev =>
      prev.map(p =>
        p.id === renameDialog.projectId
          ? { ...p, name: renameName.trim() }
          : p
      )
    );

    setRenameDialog({ open: false, projectId: null });
    toast.success("Project renamed");

    try {
      const response = await fetch(`/api/projects/${renameDialog.projectId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: renameName.trim() }),
      });

      if (!response.ok) throw new Error("Failed to rename project");
    } catch (err) {
      // Revert on error
      if (oldName) {
        setProjects(prev =>
          prev.map(p =>
            p.id === renameDialog.projectId
              ? { ...p, name: oldName }
              : p
          )
        );
      }
      toast.error("Failed to rename project. Please try again.");
    }
  }, [renameDialog.projectId, renameName, projects]);

  if (hidden) {
    return null;
  }

  if (loading) {
    return (
      <Card className="w-full bg-card shadow-sm rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <h2 className="text-2xl font-semibold text-foreground">Projects & tasks</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 animate-pulse">
              <div className="w-12 h-4 bg-muted rounded" />
              <div className="flex-1 h-4 bg-muted rounded" />
              <div className="w-20 h-4 bg-muted rounded" />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full bg-card shadow-sm rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <h2 className="text-2xl font-semibold text-foreground">Projects & tasks</h2>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">Failed to load projects</p>
            <Button onClick={loadProjects} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (projects.length === 0) {
    return (
      <Card className="w-full bg-card shadow-sm rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <h2 className="text-2xl font-semibold text-foreground">Projects & tasks</h2>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">No projects yet</p>
            <Button onClick={() => toast.info("Create project feature coming soon")}>
              <Plus className="w-4 h-4 mr-2" />
              Create project
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);
  const hasMoreProjects = projects.length > 4;

  return (
    <>
      <Card className="w-full bg-card shadow-sm rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <h2 className="text-2xl font-semibold text-foreground">Projects & tasks</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => toast.info("Details feature coming soon")}>
                Details
              </DropdownMenuItem>
              <DropdownMenuItem onClick={hideWidget}>
                Hide widget
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span>Replace with</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-48">
                  <DropdownMenuItem 
                    onClick={() => toggleViewSetting("showTime")}
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      {viewSettings.showTime && <Check className="w-3 h-3" />}
                    </div>
                    Time
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => toggleViewSetting("showPercents")}
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      {viewSettings.showPercents && <Check className="w-3 h-3" />}
                    </div>
                    Percents
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    disabled
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      {viewSettings.showPriority && <Check className="w-3 h-3" />}
                    </div>
                    Priority
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    disabled
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      {viewSettings.showPlanProgress && <Check className="w-3 h-3" />}
                    </div>
                    Plan progress
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        
        <CardContent className="space-y-3">
          {visibleProjects.map((project) => (
            <div key={project.id} className="space-y-2">
              {/* Desktop Layout */}
              <div className="hidden sm:flex items-center gap-4 group hover:bg-muted/30 rounded-lg p-2 transition-colors">
                {viewSettings.showPercents && (
                  <div className="w-12 text-right text-sm font-medium text-foreground">
                    {project.progress}%
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center gap-2 w-full text-left hover:bg-accent/50 rounded-lg px-3 py-2 transition-colors"
                  >
                    {project.expanded ? (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    )}
                    <div className="flex items-center gap-2 bg-brand-soft text-accent-foreground px-3 py-1.5 rounded-full">
                      <FolderKanban className="w-4 h-4" />
                      <span className="text-sm font-medium truncate">{project.name}</span>
                    </div>
                  </button>
                  <div className="mt-2 px-3">
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </div>

                {viewSettings.showTime && (
                  <div className="text-sm text-muted-foreground whitespace-nowrap">
                    {project.timeSpent}
                  </div>
                )}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreVertical className="w-3 h-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => openRenameDialog(project.id)}>
                      Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.info("Archive feature coming soon")}>
                      Archive
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.info("Project details coming soon")}>
                      Open details
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Mobile Layout */}
              <div className="sm:hidden space-y-2 p-2 hover:bg-muted/30 rounded-lg transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {viewSettings.showPercents && (
                      <span className="text-sm font-medium text-foreground">
                        {project.progress}%
                      </span>
                    )}
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="flex items-center gap-2 hover:bg-accent/50 rounded-lg px-2 py-1 transition-colors"
                    >
                      {project.expanded ? (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      )}
                      <div className="flex items-center gap-2 bg-brand-soft text-accent-foreground px-2 py-1 rounded-full">
                        <FolderKanban className="w-3 h-3" />
                        <span className="text-xs font-medium truncate">{project.name}</span>
                      </div>
                    </button>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreVertical className="w-3 h-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => openRenameDialog(project.id)}>
                        Rename
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toast.info("Archive feature coming soon")}>
                        Archive
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toast.info("Project details coming soon")}>
                        Open details
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  {viewSettings.showTime && (
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {project.timeSpent}
                    </span>
                  )}
                </div>
              </div>

              {/* Expanded Tasks */}
              {project.expanded && (
                <div className="ml-8 sm:ml-16 space-y-2 border-l-2 border-muted pl-4">
                  {project.tasks.length > 0 ? (
                    project.tasks.map((task) => (
                      <div key={task.id} className="flex items-center gap-3 py-1">
                        <button
                          onClick={() => toggleTask(project.id, task.id)}
                          className="flex-shrink-0"
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            task.completed 
                              ? 'bg-primary border-primary text-primary-foreground' 
                              : 'border-muted-foreground hover:border-primary'
                          }`}>
                            {task.completed && <Check className="w-3 h-3" />}
                          </div>
                        </button>
                        <span className={`text-sm ${
                          task.completed 
                            ? 'text-muted-foreground line-through' 
                            : 'text-foreground'
                        }`}>
                          {task.title}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="py-2">
                      <p className="text-sm text-muted-foreground">No tasks yet</p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-auto p-0 text-xs text-primary hover:text-primary/80"
                        onClick={() => toast.info("Add task feature coming soon")}
                      >
                        + Add task
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          
          {hasMoreProjects && !showAllProjects && (
            <div className="pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAllProjects(true)}
                className="text-sm text-primary hover:text-primary/80"
              >
                Show all projects ({projects.length - 4} more)
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Rename Dialog */}
      <Dialog open={renameDialog.open} onOpenChange={(open) => setRenameDialog({ open, projectId: null })}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Rename Project</DialogTitle>
            <DialogDescription>
              Enter a new name for this project.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="project-name">Project name</Label>
              <Input
                id="project-name"
                value={renameName}
                onChange={(e) => setRenameName(e.target.value)}
                placeholder="Enter project name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleRename();
                  }
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setRenameDialog({ open: false, projectId: null })}
            >
              Cancel
            </Button>
            <Button onClick={handleRename} disabled={!renameName.trim()}>
              Rename
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}