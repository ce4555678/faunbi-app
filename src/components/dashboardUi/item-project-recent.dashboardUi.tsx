import { Eye, FileVideo, MoreVertical, Trash2 } from "lucide-react";
import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { projeto } from "@/db/schema";
import { horasTranscritas } from "@/utils/horas";

type Projeto = typeof projeto.$inferSelect;

export default function ItemProjectRecentDashboardUi({
  projects,
}: Readonly<{
  projects: Projeto[];
}>) {
  return (
    <>
      {projects.map((item) => (
        <TableRow key={item.id} className="hover:bg-muted/50">
          <TableCell>
            <div className="rounded-lg bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
              <FileVideo className="h-5 w-5 text-primary" />
            </div>
          </TableCell>
          <TableCell className="font-medium">{item.title}</TableCell>
          <TableCell className="text-muted-foreground">
            {horasTranscritas(item.duration || 0)}
          </TableCell>
          <TableCell>
            <Badge
              variant={item.status === "completed" ? "default" : "secondary"}
              className={
                item.status === "pending" ? "bg-yellow-100 text-yellow-700" : ""
              }
            >
              {item.status}
            </Badge>
          </TableCell>
          <TableCell className="text-muted-foreground">
            {item.createdAt.toString()}
          </TableCell>
          <TableCell className="text-right">
            <div className="flex items-center justify-end gap-2">
              <Button
                variant="ghost"
                size="icon"
                // onClick={() => handleViewDetails(item.id)}
              >
                <Eye className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    // onClick={() => handleDelete(item.id)}
                    className="text-destructive"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Excluir
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
