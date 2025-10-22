import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, UserX, UserCheck, Edit } from "lucide-react";
import { toast } from "sonner";

const UserManagement = () => {
  const users = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com", type: "Cliente", status: "Activo", joinDate: "10 Oct 2025" },
    { id: 2, name: "Carlos Rodríguez", email: "carlos@example.com", type: "Técnico", status: "Activo", joinDate: "15 Sep 2025" },
    { id: 3, name: "María González", email: "maria@example.com", type: "Técnico", status: "Activo", joinDate: "20 Ago 2025" },
    { id: 4, name: "Ana Martínez", email: "ana@example.com", type: "Cliente", status: "Inactivo", joinDate: "5 Jul 2025" }
  ];

  const handleToggleStatus = (id: number, currentStatus: string) => {
    const newStatus = currentStatus === "Activo" ? "Inactivo" : "Activo";
    toast.success(`Usuario ${newStatus === "Activo" ? "activado" : "desactivado"}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Gestión de Usuarios</h2>
        <p className="text-muted-foreground">Administra todos los usuarios de la plataforma</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Usuarios</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{users.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">
              {users.filter(u => u.type === "Cliente").length}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Técnicos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">
              {users.filter(u => u.type === "Técnico").length}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Activos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-500">
              {users.filter(u => u.status === "Activo").length}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar usuarios..." className="pl-9" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los Tipos</SelectItem>
                <SelectItem value="client">Clientes</SelectItem>
                <SelectItem value="technician">Técnicos</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los Estados</SelectItem>
                <SelectItem value="active">Activos</SelectItem>
                <SelectItem value="inactive">Inactivos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Usuarios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-hero">{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Registro: {user.joinDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={user.type === "Técnico" ? "default" : "secondary"}>
                    {user.type}
                  </Badge>
                  <Badge className={user.status === "Activo" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"}>
                    {user.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant={user.status === "Activo" ? "destructive" : "default"}
                      size="sm"
                      onClick={() => handleToggleStatus(user.id, user.status)}
                    >
                      {user.status === "Activo" ? <UserX className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagement;
